import Stories from "../../network/stories";
import CheckUserAuth from "./auth/check-user-auth";

const Add ={
    async init(){
      CheckUserAuth.checkLoginState()
      this._initialListener();
    },
  
    _initialListener() {
      const addFormRecord = document.querySelector('#addStoryForm');
      addFormRecord.addEventListener(
        'submit',
        (event) => {
          event.preventDefault();
          event.stopPropagation();
  
          addFormRecord.classList.add('was-validated');
          this._sendPost();
        },
        false,
      );
    },
  
    async _sendPost() {
      const formData = this._getFormData();
  
      if (this._validateFormData({ ...formData })) {
        console.log('formData');
        console.log(formData);
  
        try {
          const response = await Stories.addNewStory(formData);
          window.alert('New Story added successfully : ' + response.message);
  
          this._goToDashboardPage();
        } catch (error) {
          console.error(error);
        }
      }
    },
  
    _getFormData() {
      const descInput = document.querySelector('#description');
      const imageInput = document.querySelector('#formFile');
  
      return {
        description: descInput.value,
        photo: imageInput.files[0],
      };
    },
  
    _validateFormData(formData) {
      const formDataFiltered = Object.values(formData).filter((item) => item === '');
  
      return formDataFiltered.length === 0;
    },
  
    _goToDashboardPage() {
      window.location.href = '/';
    },
}

export default Add;
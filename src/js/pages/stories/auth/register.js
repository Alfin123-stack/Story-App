import Auth from "../../../network/auth";
import CheckUserAuth from "./check-user-auth";

const register ={
    async init(){
        CheckUserAuth.checkLoginState()
        this._initialListener();
    },
    _initialListener() {
        const validateRegister = document.querySelector('#registrationForm');
        validateRegister.addEventListener(
          'submit',
          (event) => {
            event.preventDefault();
            event.stopPropagation();
    
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let valid = true;

        // Validasi nama
        if (!name) {
            valid = false;
            document.getElementById('name').classList.add('is-invalid');
        } else {
            document.getElementById('name').classList.remove('is-invalid');
        }

        // Validasi email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            valid = false;
            document.getElementById('email').classList.add('is-invalid');
        } else {
            document.getElementById('email').classList.remove('is-invalid');
        }

        // Validasi kata sandi
        if (password.length < 8) {
            valid = false;
            document.getElementById('password').classList.add('is-invalid');
        } else {
            document.getElementById('password').classList.remove('is-invalid');
        }

        // Kirim form jika valid
        if (valid) {
            console.log('Form submitted:', { name, email, password });
            // Panggil fungsi pendaftaran di sini (misalnya, registerUser(name, email, password))
        }

        this._getRegistered();
          },
          false,
        );
      },

      async _getRegistered() {
        const formData = this._getFormData();
     
        if (this._validateFormData({ ...formData })) {
          console.log('formData');
          console.log(formData);

        try{
            const responseRegister = await Auth.register(formData);
            window.alert('Registered a new user : ' + responseRegister.message);

            this._goToLoginPage();
          } catch (error) {
            window.alert('Terjadi kesalahan saat mendaftar.');
            console.error(error);
          }
        }
      },
     
      _getFormData() {
        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
     
        return {
          name: name.value,
          email: email.value,
          password: password.value,
        };
      },
     
      _validateFormData(formData) {
        const formDataFiltered = Object.values(formData).filter((item) => item === '');
     
        return formDataFiltered.length === 0;
      },
     
      _goToLoginPage() {
        window.location.href = '/auth/login.html'
      }
}

export default register;
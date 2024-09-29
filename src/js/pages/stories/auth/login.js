import Auth from "../../../network/auth";
import Config from "../../../config/config";
import Utils from "../../../utils/utils";
import CheckUserAuth from "./check-user-auth";

const login ={
    async init(){
        CheckUserAuth.checkLoginState()
        this._initialListener();
    },
    _initialListener() {
        const validateLogin = document.querySelector('#loginForm');
        validateLogin.addEventListener(
          'submit',
          (event) => {
            event.preventDefault();
            event.stopPropagation();
    
            // Ambil nilai input
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let valid = true;

        // Validasi email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            valid = false;
            document.getElementById('email').classList.add('is-invalid');
        } else {
            document.getElementById('email').classList.remove('is-invalid');
        }

        // Validasi kata sandi
        if (!password) {
            valid = false;
            document.getElementById('password').classList.add('is-invalid');
        } else {
            document.getElementById('password').classList.remove('is-invalid');
        }

        // Kirim form jika valid
        if (valid) {
            console.log('Form submitted:', { email, password });
            // Panggil fungsi login di sini (misalnya, loginUser(email, password))
        }

        this._getLogged();
          },
          false,
        );
      },
      async _getLogged() {
        const formData = this._getFormData();
     
        if (this._validateFormData({ ...formData })) {
          console.log('formData');
          console.log(formData);
          
          try{
            const responseRegister = await Auth.login(formData);
            Utils.setUserToken(Config.USER_TOKEN_KEY, responseRegister.loginResult.token);

            window.alert('Login : ' + responseRegister.message);

            this._goToDashboardPage();
          } catch (error) {
            window.alert('Terjadi kesalahan saat Masuk.');
            console.error(error);
          }
        }
      },
     
      _getFormData() {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
     
        return {
          email: email.value,
          password: password.value,
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

export default login;
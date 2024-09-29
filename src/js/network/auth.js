import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';

const Auth = {
  async register(formData) {
    try {
        const response = await axios.post(ApiEndpoint.REGISTER, {
            ...formData
        });

        if (!response.data.error) {
            return response.data
        } else {
            alert('Error: ' + response.data.message);
        }
    } catch (error) {
        console.error('An error occurred:', error.response ? error.response.data : error.message);
    }
  },

  async login(formData) {
    try {
        const response = await axios.post(ApiEndpoint.LOGIN, {
            ...formData
        });

        if (!response.data.error) {
            return response.data
        } else {
            alert('Error: ' + response.data.message);
        }
    } catch (error) {
        console.error('An error occurred:', error.response ? error.response.data : error.message);
    }
  },
};

export default Auth;

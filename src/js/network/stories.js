import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';
import Utils from '../utils/utils';
import Config from '../config/config';

const Stories = {
  async getAll() {
    try {
        const response = await axios.get(ApiEndpoint.GET_ALL_STORIES, {
            headers: {
                Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
            },
        });

        if (!response.data.error) {
            console.log('Stories fetched successfully:', response.data.listStory);
            return response.data;
        } else {
            console.error('Error fetching stories:', response.data.message);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
  },
  async addNewStory({ description, photo}) {

    const formData = {description, photo}
    try {
        const response = await axios.post(ApiEndpoint.GET_ALL_STORIES, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
            },
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding new story:', error.response ? error.response.data : error.message);
        throw error;
    }
}

//   async store({ name, date, amount, type, description, evidence }) {
//     const data = { name, date, amount, type, description, evidence };

//     return await axios.post(ApiEndpoint.STORE_TRANSACTION, data, {
//       headers: {
//         Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//   },

};

export default Stories;

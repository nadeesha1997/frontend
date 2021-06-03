import axios from 'axios';

const HALL_API_BASE_URL = "https://localhost:5001/api/user";

class UserService {

    getUsers(){
        return axios.get(HALL_API_BASE_URL);
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('auth'));
    }

}

export default new UserService()
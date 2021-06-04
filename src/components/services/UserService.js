import axios from 'axios';

const USER_API_BASE_URL = "https://localhost:5001/api/user";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('auth'));
    }
    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

}

export default new UserService()
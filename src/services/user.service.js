import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getStudent() {
        return axios.get(API_URL + 'Student', { headers: authHeader() });
    }

    getLecturer() {
        return axios.get(API_URL + 'Lecturer', { headers: authHeader() });
    }

    getAdmin() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();
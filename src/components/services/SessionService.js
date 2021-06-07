import axios from 'axios';

const SESSION_API_BASE_URL = "https://localhost:5001/api/sessions/permitted/no";

class SessionService {

    getSessions(){
        return axios.get(SESSION_API_BASE_URL);
    }

    deleteSession(sessionId){
        return axios.delete(SESSION_API_BASE_URL + '/' + sessionId);
    }
}

export default new SessionService()
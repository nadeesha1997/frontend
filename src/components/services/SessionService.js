// import axios from 'axios';
//
// const SESSION_API_BASE_URL = "https://localhost:5001/api/sessions";
//
// class SessionService {
//
//     getSessions(){
//         return axios.get(SESSION_API_BASE_URL);
//     }
//
//     createSession( session){
//         return axios.post(SESSION_API_BASE_URL, session);
//     }
//
//     getSessionById(sessionId){
//         return axios.get(SESSION_API_BASE_URL + '/' + sessionId);
//     }
//
//     updateSession(session, sessionId){
//         return axios.put(SESSION_API_BASE_URL + '/' + sessionId,  session);
//     }
//
//     deleteSession(sessionId){
//         return axios.delete(SESSION_API_BASE_URL + '/' + sessionId);
//     }
// }
//
// export default new SessionService()

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
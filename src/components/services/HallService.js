
// import axios from 'axios';
//
// const HALL_API_BASE_URL = "http://localhost:5001/api/Halls";
//
// class HallService {
//
//     getHalls(){
//         return axios.get(HALL_API_BASE_URL);
//     }
//
//     createHall(hall){
//         return axios.post(HALL_API_BASE_URL, hall);
//     }
//
//     getHallById(hallId){
//         return axios.get(HALL_API_BASE_URL + '/' + hallId);
//     }
//
//     updateHall(hall, hallId){
//         return axios.put(HALL_API_BASE_URL + '/' + hallId, hall);
//     }
//
//     deleteHall(hallId){
//         return axios.delete(HALL_API_BASE_URL + '/' + hallId);
//     }
// }
//
// export default new HallService()
import axios from 'axios';

const HALL_API_BASE_URL = "https://localhost:5001/api/halls";

class HallService {

    getHalls(){
        return axios.get(HALL_API_BASE_URL);
    }

    createHall(hall){
        return axios.post(HALL_API_BASE_URL, hall);
    }

    getHallById(hallId){
        return axios.get(HALL_API_BASE_URL + '/' + hallId);
    }

    updateHall(hall, hallId){
        return axios.put(HALL_API_BASE_URL + '/' + hallId, hall);
    }

    deleteHall(hallId){
        return axios.delete(HALL_API_BASE_URL + '/' + hallId);
    }
}

export default new HallService()
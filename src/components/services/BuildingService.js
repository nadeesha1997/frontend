import axios from 'axios';

const HALL_API_BASE_URL = "https://localhost:5001/api/buildings";

class BuildingService {

    getBuildings(){
        return axios.get(HALL_API_BASE_URL);
    }

}

export default new BuildingService()
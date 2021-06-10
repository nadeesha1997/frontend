import axios from 'axios';

// const HALL_API_BASE_URL = "https://localhost:5001/api/buildings";

class BuildingService {

    getBuildings(){
        return axios.get("/buildings");
    }

}

export default new BuildingService()
import axios from 'axios';

const SUBJECT_API_BASE_URL = "https://localhost:5001/api/subjects";

class SubjectService {

    getSubjects(){
        return axios.get(SUBJECT_API_BASE_URL);
    }

    deleteSubjects(subjectId){
        return axios.delete(SUBJECT_API_BASE_URL + '/' + subjectId);
    }
}

export default new SubjectService()
import axios from 'axios';

// const SUBJECT_API_BASE_URL = "https://localhost:5001/api/subjects";

class SubjectService {

    getSubjects(){
        return axios.get("/subjects");
    }

    deleteSubject(subjectId){
        return axios.delete("/subjects/" + subjectId);
    }
}

export default new SubjectService()
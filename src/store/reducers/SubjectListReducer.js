import {SubjectListActionTypes} from "../actions/SubjectListAction";
const subjectListState={
    semester:0,
    department:"",
    subjects:[],
    loading:false,
    error:""
}
const subjectListReducer=(state=subjectListState,action)=>{
    switch (action.type) {
        case SubjectListActionTypes.SET_SEMESTER:
            return {...state,semester: action.payload}
        case SubjectListActionTypes.SET_DEPARTMENT:
            return {...state,department: action.payload}
        case SubjectListActionTypes.GET_SUBJECTS_LOADING:
            return {...state,loading: action.payload}
        case SubjectListActionTypes.GET_SUBJECTS_SUCCESS:
            return {...state,subjects: action.payload}
        case SubjectListActionTypes.GET_SUBJECTS_FAILED:
            return {...subjectListState,error: action.payload}
        default:
            return state;
    }
}
export default subjectListReducer;

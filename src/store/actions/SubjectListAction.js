import axios from "axios";

const SubjectListActionTypes={
    GET_SUBJECTS_LOADING:"GET_SUBJECTS_LOADING",
    GET_SUBJECTS_SUCCESS:"GET_SUBJECTS_SUCCESS",
    GET_SUBJECTS_FAILED:"GET_SUBJECTS_FAILED",
    SET_SEMESTER:"SET_SEMESTER",
    SET_DEPARTMENT:"SET_DEPARTMENT"
};
const SetSemesterAction=(semester)=>{
    return (dispatch)=>{
        dispatch({type:SubjectListActionTypes.SET_SEMESTER,payload:semester});
    }
};
const SetDepartmentAction=(department)=>{
    return (dispatch)=>{
        dispatch({type:SubjectListActionTypes.SET_DEPARTMENT,payload:department});
    };
};
const GetModuleAction=(subjectListState)=>{
    return async (dispatch)=>{
        try{
            dispatch({type:SubjectListActionTypes.GET_SUBJECTS_LOADING,payload:{}})
            const res= await axios.get('subjects/department/'+subjectListState.department+'/semester/'+subjectListState.semester);
            const {data}=res;
            dispatch({type:SubjectListActionTypes.GET_SUBJECTS_SUCCESS,payload:data});
        }catch(error){
            console.error(error);
            dispatch({type:SubjectListActionTypes.GET_SUBJECTS_SUCCESS,payload:error})
        }
    };
};
const GetLecturerModuleAction=(id)=>{
    return async (dispatch)=>{
        try{
            dispatch({type:SubjectListActionTypes.GET_SUBJECTS_LOADING,payload:{}})
            const res= await axios.get("/subjectuser/user/"+id);
            const {data}=res;
            const moduserlist=[...data];
            const modlist=moduserlist.map(mod=>mod.subject)
            dispatch({type:SubjectListActionTypes.GET_SUBJECTS_SUCCESS,payload:modlist});
        }catch(error){
            console.error(error);
            dispatch({type:SubjectListActionTypes.GET_SUBJECTS_SUCCESS,payload:error})
        }
    };
};
export {SubjectListActionTypes,SetSemesterAction,SetDepartmentAction,GetModuleAction,GetLecturerModuleAction};
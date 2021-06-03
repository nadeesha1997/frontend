import axios from "axios";
const SelectedUserActionType={
    GET_ENROLLED_MODULES_START:"GET_ENROLLED_MODULES_START",
    GET_ENROLLED_MODULES_SUCCESS:"GET_ENROLLED_MODULES_SUCCESS",
    GET_ENROLLED_MODULES_FAILED:"GET_ENROLLED_MODULES_FAILED",
    GET_DEPARTMENT_MODULES_START:"GET_DEPARTMENT_MODULES_START",
    GET_DEPARTMENT_MODULES_SUCCESS:"GET_DEPARTMENT_MODULES_SUCCESS",
    GET_DEPARTMENT_MODULES_FAILED:"GET_DEPARTMENT_MODULES_FAILED",
    GET_IS_MODULES_START:"GET_IS_MODULES_START",
    GET_IS_MODULES_SUCCESS:"GET_IS_MODULES_SUCCESS",
    GET_IS_MODULES_FAILED:"GET_IS_MODULES_FAILED",
    UPDATE_PICTURE_SUCCESS:"UPDATE_PICTURE_SUCCESS",
    UPDATE_PICTURE_FAILED:"UPDATE_PICTURE_FAILED",
    SET_ENROLLABLE_MODULES_SUCCESS:"SET_ENROLLABLE_MODULES_SUCCESS",
    SET_ENROLLABLE_MODULES_FAILED:"SET_ENROLLABLE_MODULES_FAILED"
}
const GetEnrolledModulesAction=(id)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:SelectedUserActionType.GET_ENROLLED_MODULES_START,payload:{}})
            let res= await axios.get("https://localhost:5001/api/subjectuser/user/"+id);
            dispatch({type:SelectedUserActionType.GET_ENROLLED_MODULES_SUCCESS,payload:res.data})
        }catch (e) {
            dispatch({type:SelectedUserActionType.GET_ENROLLED_MODULES_FAILED,payload:e})
            console.error(e);
        }
    }
};
const GetDepartmentModulesAction=(deptId,semester)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:SelectedUserActionType.GET_DEPARTMENT_MODULES_START,payload:{}})
            let res= await axios.get("https://localhost:5001/api/subjects/department/"+deptId+"/semester/"+semester);
            dispatch({type:SelectedUserActionType.GET_DEPARTMENT_MODULES_SUCCESS,payload:res.data})
        }catch (e) {
            dispatch({type:SelectedUserActionType.GET_DEPARTMENT_MODULES_FAILED,payload:e})
            console.error(e);
        }
    }
}
const GetIsModulesAction=(semester)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:SelectedUserActionType.GET_IS_MODULES_START,payload:{}})
            let res= await axios.get("https://localhost:5001/api/subjects/department/is/semester/"+semester);
            dispatch({type:SelectedUserActionType.GET_IS_MODULES_SUCCESS,payload:res.data})
        }catch (e) {
            dispatch({type:SelectedUserActionType.GET_IS_MODULES_FAILED,payload:e})
            console.error(e);
        }
    }
}
const SetEnrollableModulesAction=(deptModules,isModules,enrolledModules)=>{
   return (dispatch)=>{
       try{
           let availableModules=[...deptModules,...isModules];
           let enrolled=[...enrolledModules]
           let enrolableModules=availableModules.filter((module)=>notAvailableInArray(module,enrolled))
           dispatch({type:SelectedUserActionType.SET_ENROLLABLE_MODULES_SUCCESS,payload:enrolableModules})
       }catch (e) {
           console.error(e);
           dispatch({type:SelectedUserActionType.SET_ENROLLABLE_MODULES_FAILED,payload:e})
       }
   }

}
const notAvailableInArray=(item,array)=>{
    let arr=[...array];
    if(arr.length>0){
        arr.forEach((val)=>{
            if(val.subjectId==item.subjectId){
                return false;
            }
        })
    }
    return true;
}
export {SelectedUserActionType,GetDepartmentModulesAction,GetEnrolledModulesAction,GetIsModulesAction,SetEnrollableModulesAction}
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
    SET_ENROLLABLE_MODULES_FAILED:"SET_ENROLLABLE_MODULES_FAILED",
    ENROLL_START:"ENROLL_START",
    ENROLL_SUCCESS:"ENROLL_SUCCESS",
    ENROLL_FAILED:"ENROLL_FAILED",
    UNENROLL_START:"UNENROLL_START",
    UNENROLL_SUCCESS:"UNENROLL_SUCCESS",
    UNENROLL_FAILED:"UNENROLL_FAILED"
}
const GetEnrolledModulesAction=(id)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:SelectedUserActionType.GET_ENROLLED_MODULES_START,payload:{}})
            let res= await axios.get("/subjectuser/user/"+id);
            // let subjectUser=[...res.data];
            // let subjects=subjectUser.map((subU)=>subU.subject);
            // console.log("subjects");
            // console.log(subjects);
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
            dispatch({type:SelectedUserActionType.GET_DEPARTMENT_MODULES_START,payload:{}});
            let val=""
            switch(deptId){
                case 1:
                    val="EE";
                    break;
                case 2:
                    val="CE";
                    break;
                case 3:
                    val="ME";
                    break;
                default:
                    val="IS"
            }
            let res= await axios.get("/subjects/department/"+val+"/semester/"+semester);
            console.log(res);
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
            let res= await axios.get("/subjects/department/is/semester/"+semester);
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
           // let enrolableModules=availableModules.filter((module)=>notAvailableInArray(module,enrolled))
           let enrolableModules=removeEnrolled(availableModules,enrolled);
           dispatch({type:SelectedUserActionType.SET_ENROLLABLE_MODULES_SUCCESS,payload:enrolableModules})
       }catch (e) {
           console.error(e);
           dispatch({type:SelectedUserActionType.SET_ENROLLABLE_MODULES_FAILED,payload:e})
       }
   }

}
const EnrollAction=(userId,subjectId)=>{
    return async (dispatch)=>{
        try{
            let sendData={
                userId:userId,
                subjectId:subjectId
            }
            dispatch({type:SelectedUserActionType.ENROLL_START,payload:{}})
            let res= await axios.post("/subjectuser",sendData);
            dispatch({type:SelectedUserActionType.ENROLL_SUCCESS,payload:res.data})
        }catch (e) {
            console.error(e);
            dispatch({type:SelectedUserActionType.ENROLL_FAILED,payload:e})
        }
    }

}
const UnenrollAction=(id)=>{
    return async (dispatch)=>{
        try{
            dispatch({type:SelectedUserActionType.UNENROLL_START,payload:{}})
            let res= await axios.delete("/subjectuser/"+id);
            dispatch({type:SelectedUserActionType.UNENROLL_SUCCESS,payload:res.data})
        }catch (e) {
            console.error(e);
            dispatch({type:SelectedUserActionType.UNENROLL_FAILED,payload:e})
        }
    }

}
const notAvailableInArray=(item,array)=>{
    let arr=[...array];
    if(arr.length>0){
        console.log("called");
        arr.forEach((val)=>{
            if(val.subjectId==item.id){
                return false;
            }
        })
    }
    return true;
}
const removeEnrolled=(enrollable,enrolled)=>{
    let enrolledUserModules=[...enrolled];
    let enrolledMdules=enrolledUserModules.map(mod=>mod.subject);
    let displayModules=enrollable.filter((mod)=>!enrolledMdules.find(m=>m.id===mod.id));
    return displayModules;
}
export {SelectedUserActionType,GetDepartmentModulesAction,GetEnrolledModulesAction,GetIsModulesAction,SetEnrollableModulesAction,EnrollAction,UnenrollAction}
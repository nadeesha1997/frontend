import axios from "axios";
const TimeTableActionType={
    GET_HALLS_SUCCESS:"GET_HALLS_SUCCESS",
    GET_HALLS_FAILED:"GET_HALLS_FAILED",
    GET_HALLS_LOADING:"GET_HALLS_LOADING",
    SET_USER_MODULES_SUCCESS:"SET_USER_MODULES_SUCCESS",
    SET_USER_MODULES_FAILED:"SET_USER_MODULES_FAILED"
}
const GetHallsAction=()=>{
    return async (dispatch)=>{
        try{
            dispatch({type:TimeTableActionType.GET_HALLS_LOADING,payload:null})
            const res= await axios.get("/halls");
            const {data}=res;
            dispatch({type:TimeTableActionType.GET_HALLS_SUCCESS,payload:data});
        }catch(error){
            console.error(error);
            dispatch({type:TimeTableActionType.GET_HALLS_FAILED,payload:error})
        }
    };
};
const SetUserSessionsAction=(sessions,usermodules)=>{
    return (dispatch)=>{
        try{
            let dailySessions=[...sessions];
            let uModules=[...usermodules];
            let modules=uModules.map(mod=>mod.subject);
            let returnModuls=dailySessions.filter(sess=>modules.find(s=>s.id===sess.subject.id));
            let returnSessions=returnModuls.filter(mod=>mod.permitted===true)
            dispatch({type:TimeTableActionType.SET_USER_MODULES_SUCCESS,payload:returnSessions})
        }catch (e) {
            console.error(e);
            dispatch({type:TimeTableActionType.SET_USER_MODULES_FAILED,payload:e})
        }
    }
}
// const checkEnrolled=(dailySessions,userModules)=>{
//     let enrolledUserModules=[...enrolled];
//     let enrolledMdules=enrolledUserModules.map(mod=>mod.subject);
//     let displayModules=enrollable.filter((mod)=>!enrolledMdules.find(m=>m.id===mod.id));
//     return displayModules;
// }
export {GetHallsAction,TimeTableActionType,SetUserSessionsAction};
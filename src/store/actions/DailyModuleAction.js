import axios from "axios";
// import moment from "moment"
const DailyModuleActionType={
    GET_MODULES_SUCCESS:"GET_MODULES_SUCCESS",
    GET_MODULES_FAILED:"GET_MODULES_FAILED",
    SELECT_MODULES:"SELECT_MODULES",
    SET_DATE:"SET_DATE",
    SET_DATE_FAILED:"SET_DATE_FAILED"
}

const SetDateAction=(date)=>{
    return (dispatch)=>{
        try{
            dispatch({type:DailyModuleActionType.SET_DATE,payload:date});
        }catch(error){
            console.error(error);
            dispatch({type:DailyModuleActionType.SET_DATE_FAILED,payload:{}})
        }
    };
};

const GetDailyModulesAction=(moduleState)=>{
    return async (dispatch)=>{
        try{
            const res= await axios.get('/sessions/dateonly/'+moduleState.date.format('YYYY-MM-DD'));
            const {data}=res;
            dispatch({type:DailyModuleActionType.GET_MODULES_SUCCESS,payload:data});
        }catch(error){
            console.error(error);
            dispatch({type:DailyModuleActionType.GET_MODULES_FAILED,payload:{}})
        }
    };
};

export {GetDailyModulesAction,SetDateAction,DailyModuleActionType};
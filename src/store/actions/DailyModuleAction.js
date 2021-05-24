import axios from "axios";
import moment from "moment"
const DailyModuleActionType={

    GET_MODULES_SUCCESS:"GET_MODULES_SUCCESS",
    GET_MODULES_FAILED:"GET_MODULES_FAILED",
    GET_MODULES_START:"GET_MODULES_START",
    SELECT_MODULES:"SELECT_MODULES",
    SET_DATE:"SET_DATE",
    SET_DATE_FAILED:"SET_DATE_FAILED",
    UPDATE_MODULES_SUCCESS:"UPDATE_MODULES_SUCCESS",
    UPDATE_MODULES_FAILED:"UPDATE_MODULES_FAILED"
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

const GetDailyModulesAction=(date)=>{
    return async (dispatch)=>{
        try{dispatch({type:DailyModuleActionType.GET_MODULES_START,payload:{}})
            const res= await axios.get('/sessions/dateonly/'+moment(date).format('YYYY-MM-DD'));
            const {data}=res;
            dispatch({type:DailyModuleActionType.GET_MODULES_SUCCESS,payload:data});
        }catch(error){
            console.error(error);
            dispatch({type:DailyModuleActionType.GET_MODULES_FAILED,payload:{error}})
        }
    };
};
const UpdateDailyModulesAction=(data)=>{
    return (dispatch)=>{
        try{
            dispatch({type:DailyModuleActionType.UPDATE_MODULES_SUCCESS,payload:data})
        }catch (e) {
            dispatch({type:DailyModuleActionType.UPDATE_MODULES_FAILED,payload:{e}})
        }
    }
}


export {GetDailyModulesAction,SetDateAction,DailyModuleActionType};
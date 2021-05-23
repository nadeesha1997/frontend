import axios from "axios";
import moment from "moment";
const ModuleDropActionType={
    SELECT_MODULE:"SET_MODULE",
    SELECT_MODULE_FAILED:"SELECT_MODULE_FAILED",
    // GET_MODULE_LOADING:"GET_MODULE_LOADING",
    // GET_MODULE_SUCCESS:"GET_MODULE_SUCCESS",
    // GET_MODULE_FAILED:"GET_MODULE_FAILED",
    SET_START_TIME:"SET_START_TIME",
    SET_END_TIME:"SET_END_TIME",
    SET_HALL:"SET_HALL",
    SET_PERMITTED:"SET_PERMITTED",
    SET_RESERVED:"SET_RESERVED",
    ADD_SESSION_START:"ADD_SESSION_START",
    ADD_SESSION_SUCCESS:"ADD_SESSION_SUCCESS",
    ADD_SESSION_FAILED:"ADD_SESSION_FAILED",
    SET_MODULE_ID:"SET_MODULE_ID",
    SET_MODULE:"SET_MODULE"
};

const SelectModuleAction=(state)=>{
    return (dispatch)=>{
        // let sesions=state.module.sessions;
        // let val=sesions&&sesions.forEach(mod=>{
        //     if((moment(mod.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=state.moduleDrop.StartDateTime)&&((moment(mod.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=state.module.EndDateTime))&&mod.hallId.toString()===state.moduleDrop.HallId){
        //         return {
        //             reserved:true,
        //             module:mod
        //         }
        //     }
        //     else {
        //         return {
        //             reserved: false,
        //             module: null
        //         }
        //     }
        // })
        // dispatch({type:ModuleDropActionType.SELECT_MODULE,payload:val})
        let sessions=state.module.sessions;
        try{
            let val=sessions&&sessions.forEach(mod=>{
                    if((moment(mod.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=state.moduleDrop.StartDateTime)&&((moment(mod.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=state.module.EndDateTime))&&mod.hallId.toString()===state.moduleDrop.HallId){
                        return {
                            reserved:true,
                            module:mod
                        }
                    }
                })
            if(val){
                dispatch({type:ModuleDropActionType.SELECT_MODULE,payload:val})
            }
            else{
                dispatch({type:ModuleDropActionType.SELECT_MODULE,payload:{}})
            }
        }catch(error){
            console.error(error);
            dispatch({type:ModuleDropActionType.SELECT_MODULE,payload:{}})
        }
    };
};
const SetStartTimeAction=(state,time)=>{
    return (dispatch)=>{
        let val=moment(state.module.date).format('YYYY-MM-DD') + "T" + time;
        dispatch({type:ModuleDropActionType.SET_START_TIME,payload:val})
    };
};
const SetEndTimeAction=(state,time)=>{
    return (dispatch)=>{
        let val=moment(state.module.date).format('YYYY-MM-DD') + "T" + time;
        dispatch({type:ModuleDropActionType.SET_END_TIME,payload:val})
    };
};
const SetHallAction=(state,id)=>{
    return (dispatch)=>{
        let hall=state.timetable.halls.filter(hall=>hall.id===id)
        dispatch({type:ModuleDropActionType.SET_HALL,payload:hall[0]})
    };
};
const AddSessionAction=(state)=>{
    return async (dispatch)=>{
        const sendData={
            HallId:state.moduleDrop.hall.id,
            SubjectId:state.moduleDrop.SubjectId,
            StartDateTime:state.moduleDrop.StartDateTime,
            EndDateTime:state.moduleDrop.EndDateTime,
            Permitted:state.moduleDrop.Permitted,
            UserId:state.auth.user.userDetails.id,
            reserved:state.reserved,
        }
        try{
            dispatch({type:ModuleDropActionType.ADD_SESSION_START,payload:{}})
            const res= await axios.post('/sessions',sendData);
            const {data}=res;
            dispatch({type:ModuleDropActionType.ADD_SESSION_SUCCESS,payload:data});
        }catch(error){
            console.error(error);
            dispatch({type:ModuleDropActionType.ADD_SESSION_FAILED,payload:error})
        }
    };
};
const SetModuleIdAction=(id)=>{
    return (dispatch)=>{
        dispatch({type:ModuleDropActionType.SET_MODULE_ID,payload:id})
    }
}
const SetModuleAction=(mod)=>{
    return (dispatch)=>{
        dispatch({type:ModuleDropActionType.SET_MODULE, payload:mod})
    }

}
export {ModuleDropActionType,SelectModuleAction,SetStartTimeAction,SetEndTimeAction,SetModuleIdAction,SetHallAction,AddSessionAction,SetModuleAction};

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
    SET_MODULE:"SET_MODULE",
    DELETE_SESSION_STARTED:"DELETE_SESSION_STARTED",
    DELETE_SESSION_SUCCESS:"DELETE_SESSION_SUCCESS",
    DELETE_SESSION_FAILED:"DELETE_SESSION_FAILED",
    SET_SESSION_ID:"SET_SESSION_ID",
    OPEN_CLOSE_DELETE:"OPEN_CLOSE_DELETE",
    OPEN_CLOSE_SUBMIT:"OPEN_CLOSE_SUBMIT",
    SET_SUBJECT:"SET_SUBJECT"
};
//
// const SelectModuleAction=(state)=>{
//     return (dispatch)=>{
//         let sessions=state.module.sessions;
//         try{
//             let val=sessions&&sessions.forEach(mod=>{
//                     if((moment(mod.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=state.moduleDrop.StartDateTime)&&((moment(mod.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=state.module.EndDateTime))&&mod.hallId.toString()===state.moduleDrop.HallId){
//                         return {
//                             reserved:true,
//                             module:mod
//                         }
//                     }
//                 })
//             if(val){
//                 dispatch({type:ModuleDropActionType.SELECT_MODULE,payload:val})
//             }
//             else{
//                 dispatch({type:ModuleDropActionType.SELECT_MODULE,payload:{}})
//             }
//         }catch(error){
//             console.error(error);
//             dispatch({type:ModuleDropActionType.SELECT_MODULE,payload:{}})
//         }
//     };
// };
const SetStartTimeAction=(state,time)=>{
    return (dispatch)=>{
        let val=moment(state.module.date).format('YYYY-MM-DD') + "T" + time;
        dispatch({type:ModuleDropActionType.SET_START_TIME,payload:new Date(val)})
    };
};
const SetEndTimeAction=(state,time)=>{
    return (dispatch)=>{
        let val=moment(state.module.date).format('YYYY-MM-DD') + "T" + time;
        dispatch({type:ModuleDropActionType.SET_END_TIME,payload:new Date(val)})
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
        const convertToLocal=(time)=>{
            let val=moment(time).utcOffset(330).format("YYYY-MM-DD[T]HH:mm:ss")
        }
        const sendData={
            HallId:state.moduleDrop.hall.id,
            SubjectId:state.moduleDrop.Subject.id,
            StartDateTime:convertToLocal(state.moduleDrop.StartDateTime),
            EndDateTime:convertToLocal(state.moduleDrop.EndDateTime),
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
};
const SetModuleAction=(mod)=>{
    return (dispatch)=>{
        dispatch({type:ModuleDropActionType.SET_MODULE, payload:mod})
    }

};
const DeleteSessionAction=(session,state)=>{
    return async (dispatch)=>{
        dispatch({type:ModuleDropActionType.DELETE_SESSION_STARTED, payload: {}})
        try{
            const res=await axios.delete("/sessions"+session.id);
            dispatch({type:ModuleDropActionType.DELETE_SESSION_SUCCESS,payload:res.data})
            // let sessions=state.module.sessions;
            // let newSessions=sessions.filter((sess)=>session.id!=sess.id)
        }catch (e) {
            dispatch({type:ModuleDropActionType.DELETE_SESSION_FAILED,payload:e})
        }
    }
};
const SetSessionIdAction=(id)=>{
    return (dispatch)=>{
        dispatch({type:ModuleDropActionType.SET_SESSION_ID,payload:id})
    }
};
const openDeleteModalAction=(open)=>{
    return (dispatch)=>{
        dispatch({type:ModuleDropActionType.OPEN_CLOSE_DELETE,payload:open})
    }
};
const openSubmitModalAction=(open)=>{
    return (dispatch)=>{
        dispatch({type:ModuleDropActionType.OPEN_CLOSE_SUBMIT,payload:open})
    }
};
const setSubjectAction=(subject)=>{
    return (dispatch)=>{
        dispatch({type:ModuleDropActionType.SET_SUBJECT,payload:subject})
    }
};
export {ModuleDropActionType,SetStartTimeAction,SetEndTimeAction,SetModuleIdAction,SetHallAction,AddSessionAction,SetModuleAction,DeleteSessionAction,SetSessionIdAction,openDeleteModalAction,openSubmitModalAction,setSubjectAction};

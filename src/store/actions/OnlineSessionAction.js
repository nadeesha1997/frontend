import axios from "axios";
import moment from "moment";
const OnlineSessionActionType={
    SET_MODULE:"SET_MODULE",
    SET_ONLINE_DATE:"SET_ONLINE_DATE",
    SET_START_TIME:"SET_START_TIME",
    SET_END_TIME:"SET_END_TIME",
    SET_MEETING_ID:"SET_MEETING_ID",
    SET_PASSWORD:"SET_PASSWORD",
    SET_LINK:"SET_LINK",
    SET_DATA:"SET_DATA",
    ADD_ONLINE_SESSION_START:"ADD_ONLINE_SESSION_START",
    ADD_ONLINE_SESSION_SUCCESS:"ADD_ONLINE_SESSION_SUCCESS",
    ADD_SESSION_FAILED:"ADD_SESSION_FAILED",
    MODEL_OPEN_CLOSE:"MODEL_OPEN_CLOSE",
    GET_DAILY_ONLINE_SESSIONS_START:"GET_DAILY_ONLINE_SESSIONS_START",
    GET_DAILY_ONLINE_SESSIONS_SUCCESS:"GET_DAILY_ONLINE_SESSIONS_SUCCESS",
    GET_DAILY_ONLINE_SESSIONS_FAILED:"GET_DAILY_ONLINE_SESSIONS_FAILED",
    SET_DAILY_SESSIONS_SUCCESS:"SET_DAILY_SESSIONS_SUCCESS",
    SET_DAILY_SESSIONS_FAILED:"SET_DAILY_SESSIONS_FAILED",
    ONLINE_SESSION_DALETE_START:"ONLINE_SESSION_DALETE_START",
    ONLINE_SESSION_DALETE_SUCCESS:"ONLINE_SESSION_DALETE_SUCCESS",
    ONLINE_SESSION_DALETE_FAILED:"ONLINE_SESSION_DALETE_FAILED"
}
const SetModuleAction=(id)=>{
    return (dispatch)=>{
        dispatch({type:OnlineSessionActionType.SET_MODULE,payload:id})
    }
}
const SetDateAction=(date)=>{
    return (dispatch)=>{
        try{dispatch({type:OnlineSessionActionType.SET_ONLINE_DATE,payload:new Date(date)})}
        catch (e){console.error(e)}
    }
}
const SetStartTimeAction=(state,time)=>{
    return (dispatch)=>{
        dispatch({type:OnlineSessionActionType.SET_START_TIME,payload:new Date(time)})
    }
}
const SetEndTimeAction=(time)=>{
    return (dispatch)=>{
        dispatch({type:OnlineSessionActionType.SET_END_TIME,payload:time})
    }
}
const SetMeetingIdAction=(id)=>{
    return (dispatch)=>{
        dispatch({type:OnlineSessionActionType.SET_MEETING_ID,payload:id})
    }
}
const SetPasswordAction=(password)=>{
    return (dispatch)=>{
        dispatch({type:OnlineSessionActionType.SET_PASSWORD,payload:password})
    }
}
const SetLinkAction=(link)=>{
    return (dispatch)=>{
        dispatch({type:OnlineSessionActionType.SET_LINK,payload:link})
    }
}
const SetDataAction=(module,date,sTime,eTime,meetingId,password,link)=>{
    let data={
        module:module,
        date:date,
        startTime:sTime,
        endTime:eTime,
        meetingId:meetingId,
        password:password,
        link:link
    }
    return (dispatch)=>{
        dispatch({type:OnlineSessionActionType.SET_DATA,payload:data});
    }
}
const AddOnlineSessionAction=(state)=>{
    return async (dispatch)=>{
        dispatch({type:OnlineSessionActionType.ADD_ONLINE_SESSION_START,payload:state})
        try{
            const sendData={
                link:state.online.link,
                meetingId:state.online.meetingId,
                password:state.online.password,
                startTime:moment(state.online.date).format('YYYY-MM-DD')+"T"+state.online.startTime+":00",
                endTime:moment(state.online.date).format('YYYY-MM-DD')+"T"+state.online.endTime+":00",
                userId:state.auth.user.userDetails.id,
                subjectId:state.online.module
            }
            // console.log(sendData)
            const res= await axios.post("/onlinesessions",sendData);
            dispatch({type:OnlineSessionActionType.ADD_ONLINE_SESSION_SUCCESS,payload:res});
        }catch (e){
            console.error(e);
            dispatch({type:OnlineSessionActionType.ADD_SESSION_FAILED,payload:e})
        }
    }
}
const ModelOpenAction=(open)=>{
    return (dispatch)=>{
        dispatch({type:OnlineSessionActionType.MODEL_OPEN_CLOSE,payload:open})
    }
};
const GetDailySessionsAction=(day)=>{
    return async (dispatch)=>{
        dispatch({type:OnlineSessionActionType.GET_DAILY_ONLINE_SESSIONS_START,payload:{}})
        try{
            let res= await axios.get('/onlinesessions/dateonly/'+moment(day).format('YYYY-MM-DD'))
        dispatch({type:OnlineSessionActionType.GET_DAILY_ONLINE_SESSIONS_SUCCESS,payload:res.data})
        }catch (e){
            console.error(e);
            dispatch({type:OnlineSessionActionType.GET_DAILY_ONLINE_SESSIONS_FAILED,payload:e})
        }
    }

};
const setDailySessionsAction=(daily,enrolled)=>{
    return (dispatch)=>{
        console.log(daily);
        try{
            let dailySessions=[...daily];
        let enrolledModules=[...enrolled];
        let dailyUserSessions=dailySessions.filter(dailyS=>enrolledModules.find(enrolledM=>enrolledM.subjectId===dailyS.subjectId));
        dispatch({type:OnlineSessionActionType.SET_DAILY_SESSIONS_SUCCESS,payload:dailyUserSessions})
        }catch(e){
            console.error(e);
            dispatch({type:OnlineSessionActionType.SET_DAILY_SESSIONS_FAILED,payload:e})
            window.location.reload();
        }
    }
}
const DeleteOnlineSessionAction=(id)=>{
    return async (dispatch)=>{
        dispatch({type:OnlineSessionActionType.ONLINE_SESSION_DALETE_START,payload:{}})
        try{
            let res= await axios.delete("/onlinesessions/"+id);
            dispatch({type:OnlineSessionActionType.GET_DAILY_ONLINE_SESSIONS_SUCCESS,payload:res})
        }catch (e){
            console.error(e);
            dispatch({type:OnlineSessionActionType.GET_DAILY_ONLINE_SESSIONS_FAILED,payload:e})
        }
    }
}
export {OnlineSessionActionType,SetDataAction,AddOnlineSessionAction,ModelOpenAction,GetDailySessionsAction,setDailySessionsAction,DeleteOnlineSessionAction,SetModuleAction,SetDateAction,SetStartTimeAction,SetEndTimeAction,SetMeetingIdAction,SetPasswordAction,SetLinkAction}
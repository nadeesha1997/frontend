import axios from "axios";
import moment from "moment";
const OnlineSessionActionType={
    // SET_MODULE:"SET_MODULE",
    // SET_DATE:"SET_DATE",
    // SET_START_TIME:"SET_START_TIME",
    // SET_END_TIME:"SET_END_TIME",
    // SET_MEETING_ID:"SET_MEETING_ID",
    // SET_PASSWORD:"SET_PASSWORD",
    // SET_LINK:"SET_LINK",
    SET_DATA:"SET_DATA",
    ADD_ONLINE_SESSION_START:"ADD_ONLINE_SESSION_START",
    ADD_ONLINE_SESSION_SUCCESS:"ADD_ONLINE_SESSION_SUCCESS",
    ADD_SESSION_FAILED:"ADD_SESSION_FAILED"
}
// const SetModuleAction=(id)=>{
//     return (dispatch)=>{
//         dispatch({type:OnlineSessionActionType.SET_MODULE,payload:id})
//     }
// }
// const SetDateAction=(date)=>{
//     return (dispatch)=>{
//         dispatch({type:OnlineSessionActionType.SET_DATE,payload:date})
//     }
// }
// const SetStartTimeAction=(time)=>{
//     return (dispatch)=>{
//         dispatch({type:OnlineSessionActionType.SET_START_TIME,payload:time})
//     }
// }
// const SetEndTimeAction=(time)=>{
//     return (dispatch)=>{
//         dispatch({type:OnlineSessionActionType.SET_END_TIME,payload:time})
//     }
// }
// const SetMeetingIdAction=(id)=>{
//     return (dispatch)=>{
//         dispatch({type:OnlineSessionActionType.SET_MEETING_ID,payload:id})
//     }
// }
// const SetPasswordAction=(password)=>{
//     return (dispatch)=>{
//         dispatch({type:OnlineSessionActionType.SET_PASSWORD,payload:password})
//     }
// }
// const SetLinkAction=(link)=>{
//     return (dispatch)=>{
//         dispatch({type:OnlineSessionActionType.SET_LINK,payload:link})
//     }
// }
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
export {OnlineSessionActionType,SetDataAction,AddOnlineSessionAction}
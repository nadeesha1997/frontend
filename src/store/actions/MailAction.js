import axios from "axios";
const MailActionType={
    SEND_HALL_REQUEST_MAIL_START:"SEND_HALL_REQUEST_MAIL_START",
    SEND_HALL_REQUEST_MAIL_SUCCESS:"SEND_HALL_REQUEST_MAIL_SUCCESS",
    SEND_MAIL_FAILED:"SEND_MAIL_FAILED",
    SET_RECIEVER:"SET_RECIEVER",
    GET_SESSION_START:"GET_SESSION_START",
    GET_SESSION_SUCCESS:"GET_SESSION_SUCCESS",
    GET_SESSION_FAILED:"GET_SESSION_FAILED",
    PERMISSION_APPROVAL_START:"PERMISSION_APPROVAL_START",
    PERMISSION_APPROVAL_SUCCESS:"PERMISSION_APPROVAL_SUCCESS",
    PERMISSION_APPROVAL_FAILED:"PERMISSION_APPROVAL_FAILED",
    PERMISSION_NOT_ACCEPTED:"PERMISSION_NOT_ACCEPTED",
    APPROVED_SESSION:"APPROVED_SESSION"
}
const SetRecieverAction=(val)=>{
    return (dispatch)=>{
        dispatch({type:MailActionType.SET_RECIEVER,payload:val})
    }
};
const SendMailAction=(data)=>{
    return async (dispatch)=>{
        dispatch({type:MailActionType.SEND_HALL_REQUEST_MAIL_START,payload:{}})
        try {
            const res= await axios.post('/mail/reserve',data)
            dispatch({type:MailActionType.SEND_HALL_REQUEST_MAIL_SUCCESS,payload:{res}})
        }catch (e) {
            console.error(e);
            dispatch({type:MailActionType.SEND_MAIL_FAILED,payload:e})
        }
    }
}
const GetSessionAction=(id)=>{
    return async (dispatch)=>{
        dispatch({type:MailActionType.GET_SESSION_START,payload:{}})
        try {
            const res= await axios.get('/sessions/'+id)
            dispatch({type:MailActionType.GET_SESSION_SUCCESS,payload:res.data})
        }catch (e) {
            console.error(e);
            dispatch({type:MailActionType.SEND_MAIL_FAILED,payload:e})
        }
    }
}
const SessionApproveAction=(sessionState,history)=>{
    return async (dispatch)=>{
        const sendingData={
            "id": sessionState.session.id,
            "startDateTime": sessionState.session.startDateTime,
            "endDateTime": sessionState.session.endDateTime,
            "permitted": true,
            "subjectId": sessionState.session.subjectId,
            "hallId": sessionState.session.hallId,
            "userId": sessionState.session.userId
        }
        dispatch({type:MailActionType.PERMISSION_APPROVAL_START,payload:{}})
        try {
            const res= await axios.put("/sessions/"+sessionState.session.id,sendingData);
            dispatch({type:MailActionType.PERMISSION_APPROVAL_SUCCESS,payload:res});
            alert("session permitted");
            history.push("/home");

        }catch (e) {
            console.error(e);
            dispatch({type:MailActionType.PERMISSION_APPROVAL_FAILED,payload:e})
            alert("Session permission failed");
            history.push("/home");
        }
    }
};
const PermissionCansellingAction=(history)=>{
    return (dispatch)=>{
        dispatch({type:MailActionType.PERMISSION_APPROVAL_START,payload:{}});
        alert("This session is not permitted");
        history.push("/home");
    }
}
// const ApproveAction=()=>{
//     return (dispatch)=>{
//         dispatch({type:MailActionType.APPROVED_SESSION,payload:{}});
//     }
// }
export {MailActionType,SetRecieverAction,SendMailAction,GetSessionAction,SessionApproveAction,PermissionCansellingAction};
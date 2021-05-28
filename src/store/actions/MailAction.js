import axios from "axios";
const MailActionType={
    SEND_HALL_REQUEST_MAIL_START:"SEND_HALL_REQUEST_MAIL_START",
    SEND_HALL_REQUEST_MAIL_SUCCESS:"SEND_HALL_REQUEST_MAIL_SUCCESS",
    SEND_MAIL_FAILED:"SEND_MAIL_FAILED",
    SET_RECIEVER:"SET_RECIEVER"
}
const SetRecieverAction=(val)=>{
    return (dispatch)=>{
        dispatch({type:MailActionType.SET_RECIEVER,payload:val})
    }
}
export {MailActionType,SetRecieverAction};
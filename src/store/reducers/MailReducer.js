import {MailActionType} from "../actions/MailAction";
const initMailState={
    adminEmail:"nadeeshamadhushan9@gmail.com",
    elecHodEmail:"nadeesha1997@outlook.com",
    civilHodEmail:"nadeesha1997@outlook.com",
    mechHodEmail:"nadeesha1997@outlook.com",
    isHodEmail:"nadeesha1997@outlook.com",
    arEmail:"nadeesha1997@outlook.com",
    loading:false,
    successMessage: "",
    errorMessage:"",
    reciever:""
}
const mailReducer=(state=initMailState,action)=>{
    switch (action.type) {
        case MailActionType.SEND_HALL_REQUEST_MAIL_START:
            return{...state,loading: true}
        case MailActionType.SEND_HALL_REQUEST_MAIL_SUCCESS:
            return {...state,successMessage: action.payload}
        case MailActionType.SEND_MAIL_FAILED:
            return {...state,errorMessage: action.payload}
        default:
            return state
    }
}
export default mailReducer;
import {MailActionType} from "../actions/MailAction";
const initMailState={
   adminEmail:"",
    elecHodEmail:"",
    civilHodEmail:"",
    mechHodEmail:"",
    arEmail:"",
    loading:false,
    successMessage: {},
    errorMessage:"",
    reciever:"",
    session:null
}
const mailReducer=(state=initMailState,action)=>{
    switch (action.type) {
        case MailActionType.SEND_HALL_REQUEST_MAIL_START:
            return{...state,loading: true}
        case MailActionType.SEND_HALL_REQUEST_MAIL_SUCCESS:
            return {...state,successMessage: action.payload,loading: false}
        case MailActionType.SEND_MAIL_FAILED:
            return {...state,errorMessage: action.payload,loading: false}
        case MailActionType.SET_RECIEVER:
            return {...state,reciever: action.payload}
        case MailActionType.GET_SESSION_START:
            return {...state,loading: true}
        case MailActionType.GET_SESSION_SUCCESS:
            return {...state,loading: false,session: action.payload}
        case MailActionType.GET_SESSION_FAILED:
            return {...state,loading: false,errorMessage: action.payload}
        case MailActionType.PERMISSION_APPROVAL_START:
            return {...state,loading: true}
        case MailActionType.PERMISSION_APPROVAL_SUCCESS:
            return {...state,loading: false,successMessage: action.payload}
        case MailActionType.PERMISSION_APPROVAL_FAILED:
            return {...state,loading: false,errorMessage: action.payload}
        case MailActionType.PERMISSION_NOT_ACCEPTED:
            return state;
        case MailActionType.APPROVED_SESSION:
            return state;
        case MailActionType.GET_HODS_START:
            return {...state,loading:true}
        case MailActionType.GET_HODS_SUCCESS:
            return {...state,loading:false,elecHodEmail:action.payload[0].electricalMail,civilHodEmail:action.payload[0].civilMail,mechHodEmail:action.payload[0].mechanicalMail,arEmail:action.payload[0].ArMail,adminEmail:action.payload[0].AdminMail}
        case MailActionType.GET_HODS_FAILED:
            return {...state,loading:false,errorMessage:action.payload}
        default:
            return state
    }
}
export default mailReducer;
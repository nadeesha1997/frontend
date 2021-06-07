import {MailActionType} from "../actions/MailAction";
const initMailState={
   adminEmail:"nadeeshamadhushan9@gmail.com",

    elecHodEmail:"nadeesha1997@outlook.com",
    civilHodEmail:"nadeesha1997@outlook.com",
    mechHodEmail:"nadeesha1997@outlook.com",
    isHodEmail:"nadeesha1997@outlook.com",
    arEmail:"nadeesha1997@outlook.com",
    // adminEmail:"b.d.m.niroshanee@gmail.com",
    // elecHodEmail:"b.d.m.niroshanee@gmail.com",
    // civilHodEmail:"b.d.m.niroshanee@gmail.com",
    // mechHodEmail:"b.d.m.niroshanee@gmail.com",
    // isHodEmail:"b.d.m.niroshanee@gmail.com",
    // arEmail:"b.d.m.niroshanee@gmail.com",

    // adminEmail:"jayasundarakasunika@gmail.com",
    // elecHodEmail:"jayasundarakasunika@gmail.com",
    // civilHodEmail:"jayasundarakasunika@gmail.com",
    // mechHodEmail:"jayasundarakasunika@gmail.com",
    // isHodEmail:"jayasundarakasunika@gmail.com",
    // arEmail:"jayasundarakasunika@gmail.com",

    // adminEmail:"b.d.m.niroshanee@gmail.com",
    // elecHodEmail:"b.d.m.niroshanee@gmail.com",
    // civilHodEmail:"b.d.m.niroshanee@gmail.com",
    // mechHodEmail:"b.d.m.niroshanee@gmail.com",
    // isHodEmail:"b.d.m.niroshanee@gmail.com",
    // arEmail:"b.d.m.niroshanee@gmail.com",
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
        default:
            return state
    }
}
export default mailReducer;
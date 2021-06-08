import {OnlineSessionActionType} from "../actions/OnlineSessionAction"
const initState={
    module:0,
    date:new Date(),
    startTime:new Date(),
    endTime:new Date(),
    meetingId:"",
    password:"",
    link:"",
    loading:false,
    successMessage:{},
    error:{},
    modalOpen:false,
    dailySessions:[],
    userSessions:[],
    dailyUserSesions:[],
    // successResponse:{}
}
const OnlineSessionReducer=(state=initState,action)=>{
    switch (action.type) {
        case OnlineSessionActionType.SET_DATA:
            return {...state,
                module:action.payload.module,
                date:action.payload.date,
                startTime:action.payload.startTime,
                endTime:action.payload.endTime,
                meetingId:action.payload.meetingId,
                password:action.payload.password,
                link:action.payload.link
            }
        case OnlineSessionActionType.ADD_ONLINE_SESSION_START:
            return {...state,loading:true};
        case OnlineSessionActionType.ADD_ONLINE_SESSION_SUCCESS:
            return {...state,successMessage:action.payload,loading:false}
        case OnlineSessionActionType.ADD_SESSION_FAILED:
            return{...state,error:action.payload,loading:false}
        case OnlineSessionActionType.MODEL_OPEN_CLOSE:
            return {...state,modalOpen:action.payload}
        case OnlineSessionActionType.GET_DAILY_ONLINE_SESSIONS_START:
            return {...state,loading:true}
        case OnlineSessionActionType.GET_DAILY_ONLINE_SESSIONS_SUCCESS:
            return {...state,dailySessions:action.payload,loading:false}
        case OnlineSessionActionType.GET_DAILY_ONLINE_SESSIONS_FAILED:
            return {...state,error:action.payload,loading:false}
        case OnlineSessionActionType.SET_DAILY_SESSIONS_SUCCESS:
            return {...state,dailyUserSesions:action.payload}
        case OnlineSessionActionType.SET_DAILY_SESSIONS_FAILED:
            return state;
        case OnlineSessionActionType.ONLINE_SESSION_DALETE_START:
            return {...state,loading:true}
        case OnlineSessionActionType.ONLINE_SESSION_DALETE_SUCCESS:
            return {...state,loading:false,successMessage:action.payload}
        case OnlineSessionActionType.ONLINE_SESSION_DALETE_FAILED:
            return {...state,loading:false,error:action.payload}
        case OnlineSessionActionType.SET_MODULE:
            return{...state,module:action.payload}
        case OnlineSessionActionType.SET_ONLINE_DATE:
            return{...state,date:action.payload}
        case OnlineSessionActionType.SET_START_TIME:
            return{...state,startTime:action.payload}
        case OnlineSessionActionType.SET_END_TIME:
            return{...state,date:action.payload}
        case OnlineSessionActionType.SET_MEETING_ID:
            return{...state,date:action.payload}
        case OnlineSessionActionType.SET_PASSWORD:
            return{...state,date:action.payload}
        case OnlineSessionActionType.SET_LINK:
            return{...state,date:action.payload}
        default:
            return state;
    }
}
export default OnlineSessionReducer;
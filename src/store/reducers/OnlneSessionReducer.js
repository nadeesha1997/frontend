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
    error:{}
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
            return {...state,successMessage:action.payload}
        case OnlineSessionActionType.ADD_SESSION_FAILED:
            return{...state,error:action.payload}
        default:
            return state;
    }
}
export default OnlineSessionReducer;
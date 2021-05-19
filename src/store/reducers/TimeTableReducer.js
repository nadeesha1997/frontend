import {TimeTableActionType} from "../actions/TimeTableAction";
const timetableState={
    halls:[],
    errors:""
}
const timetableReducer=(state=timetableState,action)=>{
    switch (action.type) {
        case TimeTableActionType.GET_HALLS_SUCCESS:
            return {...state,halls:action.payload}
        case TimeTableActionType.GET_HALLS_FAILED:
            return {...state,errors:action.payload,halls:[]}    
        default:
            return state;
    }
}
export default timetableReducer;

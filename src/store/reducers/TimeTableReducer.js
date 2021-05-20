import {TimeTableActionType} from "../actions/TimeTableAction";
const timetableState={
    loading:false,
    halls:[],
    errors:""
}
const timetableReducer=(state=timetableState,action)=>{
    switch (action.type) {
        case TimeTableActionType.GET_HALLS_LOADING:
            return {...state,loading: true}
        case TimeTableActionType.GET_HALLS_SUCCESS:
            return {...state,halls:action.payload,loading: false}
        case TimeTableActionType.GET_HALLS_FAILED:
            return {...state,errors:action.payload,halls:[],loading: false}
        default:
            return state;
    }
}
export default timetableReducer;

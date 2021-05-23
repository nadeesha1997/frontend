import { DailyModuleActionType } from "../actions/DailyModuleAction";
const dailyModuleState={
    date:new Date(),
    sessions:[],
    error:""
};

const dailyModuleReducer=(state=dailyModuleState,action)=>{
    switch (action.type) {
        case DailyModuleActionType.GET_MODULES_START:
            return state;
        case DailyModuleActionType.SET_DATE:
            return {...state,date:action.payload};
        case DailyModuleActionType.GET_MODULES_SUCCESS:
            return {...state,sessions:action.payload};
        case DailyModuleActionType.GET_MODULES_FAILED:
            return {...state,error:action.payload};    
        default:
            return state;
    }
};
export default dailyModuleReducer;
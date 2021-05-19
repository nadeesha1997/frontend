import { DailyModuleActionType } from "../actions/DailyModuleAction";
const dailyModuleState={
    date:new Date(),
    sessions:[]
};

const dailyModuleReducer=(state=dailyModuleState,action)=>{
    switch (action.type) {
        case DailyModuleActionType.SET_DATE:
            return action.payload;
        case DailyModuleActionType.GET_MODULES_SUCCESS:
            return action.payload;
        // case DailyModuleActionType.GET_MODULES_FAILED:
        //     return state;    
        default:
            return state;
    }
};
export default dailyModuleReducer;
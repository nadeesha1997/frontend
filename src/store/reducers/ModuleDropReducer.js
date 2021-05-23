import {ModuleDropActionType} from "../actions/ModuleDropAction";

const ModuleDropState={
    hall:{},
    SubjectId:0,
    StartDateTime:"",
    EndDateTime:"",
    Permitted:false,
    reserved:false,
    module: null,
    loading:false,
    error:""
}
const moduleDropReducer=(state=ModuleDropState,action)=>{
    switch (action.type) {
        case ModuleDropActionType.SELECT_MODULE:
            return {
                ...state,
                module: action.payload.module,
                reserved: action.payload.reserved
                // state
            };
        case ModuleDropActionType.SELECT_MODULE_FAILED:
            return {
                ...state,
                module: null,
                reserved: false
            }
        case ModuleDropActionType.SET_HALL:
            return {...state,hall: action.payload};
        case ModuleDropActionType.SET_START_TIME:
            return {...state,StartDateTime: action.payload};
        case ModuleDropActionType.SET_END_TIME:
            return {...state,EndDateTime: action.payload};
        case ModuleDropActionType.ADD_SESSION_START:
            return {...state,loading: true};
        case ModuleDropActionType.ADD_SESSION_SUCCESS:
            return {...state,loading: false};
        case ModuleDropActionType.ADD_SESSION_FAILED:
            return {...state,loading: false ,error: action.payload};
        case ModuleDropActionType.SET_MODULE_ID:
            return {...state,SubjectId: action.payload};
        case ModuleDropActionType.SET_MODULE:
            return {...state,module: action.payload}
        default:
            return state;
    }
}

export default moduleDropReducer;

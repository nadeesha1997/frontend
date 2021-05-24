import {ModuleDropActionType} from "../actions/ModuleDropAction";

const ModuleDropState={
    hall:{},
    Subject:{},
    StartDateTime:"",
    EndDateTime:"",
    Permitted:false,
    reserved:false,
    module: null,
    loading:false,
    sessionId:0,
    error:"",
    deleteResponse:"",
    openDeleteModal:false,
    openSubmitModal:false
}
const moduleDropReducer=(state=ModuleDropState,action)=>{
    switch (action.type) {
        // case ModuleDropActionType.SELECT_MODULE:
        //     return {
        //         ...state,
        //         module: action.payload.module,
        //         reserved: action.payload.reserved
        //         // state
        //     };
        // case ModuleDropActionType.SELECT_MODULE_FAILED:
        //     return {
        //         ...state,
        //         module: null,
        //         reserved: false
        //     }
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
        case ModuleDropActionType.DELETE_SESSION_STARTED:
            return state;
        case ModuleDropActionType.DELETE_SESSION_SUCCESS:
            return {...state,deleteResponse: action.payload};
        case ModuleDropActionType.DELETE_SESSION_FAILED:
            return state;
        case ModuleDropActionType.SET_SESSION_ID:
            return {...state,sessionId: action.payload};
        case ModuleDropActionType.OPEN_CLOSE_DELETE:
            return {...state,openDeleteModal: action.payload}
        case ModuleDropActionType.OPEN_CLOSE_SUBMIT:
            return {...state,openSubmitModal: action.payload};
        case ModuleDropActionType.SET_SUBJECT:
            return {...state,Subject:action.payload}
        default:
            return state;
    }
}

export default moduleDropReducer;

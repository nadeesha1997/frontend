import {SelectedUserActionType} from "../actions/SelectedUserAction";
const initialState={
    user:localStorage.hasOwnProperty("auth")?JSON.parse(localStorage.getItem("auth")).user.userDetails:null,
    loading:false,
    enrolledModules:[],
    departmentModules:[],
    isModules:[],
    enrollableModules:[],
    successMessage:{},
    errorMessage: {},
    department:{}
};
const selectedUserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SelectedUserActionType.GET_DEPARTMENT_MODULES_START:
            return {...state,loading: true}
        case SelectedUserActionType.GET_DEPARTMENT_MODULES_SUCCESS:
            return {...state,loading: false,departmentModules: action.payload}
        case SelectedUserActionType.GET_DEPARTMENT_MODULES_FAILED:
            return {...state,loading: false,errorMessage: action.payload}
        case SelectedUserActionType.GET_IS_MODULES_START:
            return {...state,loading: true}
        case SelectedUserActionType.GET_IS_MODULES_SUCCESS:
            return {...state,loading: false,isModules: action.payload}
        case SelectedUserActionType.GET_IS_MODULES_FAILED:
            return {...state,loading: false,errorMessage: action.payload}
        case SelectedUserActionType.GET_ENROLLED_MODULES_START:
            return {...state,loading: true}
        case SelectedUserActionType.GET_ENROLLED_MODULES_SUCCESS:
            return {...state,loading: false,enrolledModules: action.payload}
        case SelectedUserActionType.GET_ENROLLED_MODULES_FAILED:
            return {...state,loading: false,errorMessage: action.payload}
        case SelectedUserActionType.SET_ENROLLABLE_MODULES_SUCCESS:
            return {...state,enrollableModules: action.payload}
        case SelectedUserActionType.SET_ENROLLABLE_MODULES_FAILED:
            return {...state,errorMessage: action.payload}
        case SelectedUserActionType.ENROLL_START:
            return {...state,loading:true}
        case SelectedUserActionType.ENROLL_SUCCESS:
            return {...state,loading: false,successMessage: action.payload}
        case SelectedUserActionType.ENROLL_FAILED:
            return {...state,loading: false,errorMessage: action.payload}
        case SelectedUserActionType.UNENROLL_START:
            return {...state,loading: false}
        case SelectedUserActionType.UNENROLL_SUCCESS:
            return {...state,loading: false,successMessage: action.payload}
        case SelectedUserActionType.UNENROLL_FAILED:
            return {...state,loading: false,errorMessage: action.payload}
        case SelectedUserActionType.GET_DEPARTMENT_START:
            return {...state,loading: true}
        case SelectedUserActionType.GET_DEPARTMENT_SUCCESS:
            return {...state,loading: false,department: action.payload}
        case SelectedUserActionType.GET_DEPARTMENT_FAILED:
            return {...state,loading: false,errorMessage: action.payload}
        default:
            return state;
    }
}
export default selectedUserReducer;
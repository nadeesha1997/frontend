import axios from "axios";
const AuthActionType={
    REGISTER_STUDENT_SUCCESS:"REGISTER_STUDENT_SUCCESS",
    REGISTER_LECTURER_SUCCESS:"REGISTER_LECTURER_SUCCESS",
    REGISTER_AR_SUCCESS:"REGISTER_AR_SUCCESS",
    REGISTER_ADMIN_SUCCESS:"REGISTER_ADMIN_SUCCESS",
    REGISTER_FAILED:"REGISTER_FAILED",
    LOGIN_SUCCESSFULL:"LOGIN_SUCCESSFULL",
    LOGIN_FAIL:"LOGIN_FAIL",
    LOGOUT_SUCCESSFULL:"LOGOUT_SUCCESSFULL",
    LOGOUT_FAIL:"LOGOUT_FAIL"
};

const LecturerRegisterAuthAction=(userState,history)=>{
    return async (dispatch)=>{
        try{
            const res= await axios.post("/accounts/register/teacher",userState.data);
            const {data}=res;
            dispatch({type:AuthActionType.REGISTER_LECTURER_SUCCESS,payload:data});
            // console.log(res);
            history.push("/");
        }catch(error){
            console.error(error);
            dispatch({type:AuthActionType.REGISTER_FAILED,payload:{}})
        }
    };
    // console.log(userState);
};
const StudentRegisterAuthAction=(userState)=>{
    return async (dispatch)=>{
        try{
            const res= await axios.post("/accounts/register/student",userState.data);
            const {data}=res;
            dispatch({type:AuthActionType.REGISTER_LECTURER_SUCCESS,payload:data})
            // history.pushState()
        }catch(error){
            console.error(error);
            dispatch({type:AuthActionType.REGISTER_FAILED,payload:{}})
        }
    };
};
const AdminRegisterAuthAction=(userState)=>{
    return async (dispatch)=>{
        try{
            const res= await axios.post("/accounts/register/admin",userState.data);
            const {data}=res;
            dispatch({type:AuthActionType.REGISTER_LECTURER_SUCCESS,payload:data})
        }catch(error){
            console.error(error);
            dispatch({type:AuthActionType.REGISTER_FAILED,payload:{}})
        }
    };
};
const ArRegisterAuthAction=(userState)=>{
    return async (dispatch)=>{
        try{
            const res= await axios.post("/accounts/register/ar",userState.data);
            const {data}=res;
            dispatch({type:AuthActionType.REGISTER_LECTURER_SUCCESS,payload:data})
        }catch(error){
            console.error(error);
            dispatch({type:AuthActionType.REGISTER_FAILED,payload:{}})
        }
    };
};
const LoginAuthAction=(loginState,history)=>{
    return async (dispatch)=>{
        try{
            const res= await axios.post("/accounts/login",loginState);
            const {data}=res;
            dispatch({type:AuthActionType.LOGIN_SUCCESSFULL,payload:data})
            history.push("/");
            // window.location.reload();
        }catch(error){
            console.error(error);
            dispatch({type:AuthActionType.LOGIN_FAIL,payload:{}})
        }
    };
};
const LogoutAuthAction=(history)=>{
    return async (dispatch)=>{
        try{
            dispatch({type:AuthActionType.LOGOUT_SUCCESSFULL,payload:{}})
        }catch(error){
            console.error(error);
            dispatch({type:AuthActionType.LOGOUT_FAIL,payload:{}})
        }
    };
};
export {LecturerRegisterAuthAction,StudentRegisterAuthAction,AdminRegisterAuthAction,ArRegisterAuthAction,LoginAuthAction,LogoutAuthAction,AuthActionType};
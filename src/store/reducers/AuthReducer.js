import axios from "axios";
import { AuthActionType } from "../actions/AuthAction";

// const getAuthStateInInit=()=>{
//     const auth=localStorage.getItem("auth");
//     try {
//         const authobj=JSON.parse(auth);
//         const{jwttoken}=authobj.accessToken;
//         // if(new Date(expires_at)>new Date()){
//         axios.defaults.headers.common["Authorization"]="Bearer"+jwttoken;
//         return authobj;
//     } catch (error) {
//         return null;
//
//     }
// };0

const authState={
    isLoggedin:localStorage.hasOwnProperty("auth"),
    user:localStorage.hasOwnProperty("auth")?JSON.parse(localStorage.getItem("auth")).user:null,
    // role:localStorage.hasOwnProperty("auth")?JSON.parse(localStorage.getItem("auth")).user.role[0]:null,
    // user:null,
    loginModelOpen:false,
    signupModalOpen:false,
    error:{},
    res:{}
};
const getAuthState=()=>{
    const auth=localStorage.getItem("auth");
    try {
        const authobj=JSON.parse(auth);
        const{jwttoken}=authobj.accessToken;
        // if(new Date(expires_at)>new Date()){
            axios.defaults.headers.common["Authorization"]="Bearer"+jwttoken;
            return authobj;
    } catch (error) {
        return authState;

    }
};
const newAuth=getAuthState();
const authReducer=(state=newAuth,action)=>{
    switch (action.type) {
        case AuthActionType.REGISTER_LECTURER_SUCCESS:
            const newAuthState={
                user:action.payload
            };
            // axios.defaults.headers.common["Authorization"]='Bearer ${jwttoken}';
            // localStorage.setItem
            return newAuthState;
        case AuthActionType.LOGIN_SUCCESSFULL:
            const newAuthState1={
                user:action.payload.data,
                isLoggedin:true
                // res:action.payload
            }
            // console.log(action.payload);
            axios.defaults.headers.common["Authorization"]='Bearer'+action.payload.data.accessToken;
            localStorage.setItem("auth",JSON.stringify(newAuthState1));
            // return newAuthState1;
            return {...state,user:action.payload.data,isLoggedin:true,res:action.payload,loginModelOpen:false}
        case AuthActionType.LOGIN_FAIL:
            return {...state,error: action.payload,loginModelOpen:false};
        case AuthActionType.LOGOUT_SUCCESSFULL:
            localStorage.removeItem("auth");
            return authState;
        case AuthActionType.LOGOUT_FAIL:
            localStorage.removeItem("auth");
            return authState;
        case AuthActionType.CHECK_AUTH_STATE:
            const auth1=getAuthState();
            return {...state,auth:auth1};
        case AuthActionType.LOGIN_MODAL_OPEN_CLOSE:
            return {...state,loginModelOpen: action.payload};
        case AuthActionType.SIGNUP_MODAL_OPEN_CLOSE:
            return {...state,signupModalOpen: action.payload};
        case AuthActionType.REGISTER_LECTURER_FAILED:
                return state;
        case AuthActionType.REGISTER_FAILED:
            return {...state,error: action.payload}
        default:
            return state;
    }
};
export default authReducer;

import axios from "axios";
import { AuthActionType } from "../actions/AuthAction";
const authState={
    isLoggedin:false,
    user:null
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
                user:action.payload,
                isLoggedin:true
            }
            console.log(action.payload);
            axios.defaults.headers.common["Authorization"]='Bearer'+action.payload.accessToken;
            localStorage.setItem("auth",JSON.stringify(newAuthState1));
            return newAuthState1;
        case AuthActionType.LOGIN_FAIL:
            return authState;        
        case AuthActionType.LOGOUT_SUCCESSFULL:
            localStorage.removeItem("auth");
            return authState;
        case AuthActionType.LOGOUT_FAIL:
            localStorage.removeItem("auth");
            return authState;
        case AuthActionType.REGISTER_LECTURER_FAILED:
                return state;               
        default:
            return state;
    }
};
export default authReducer;

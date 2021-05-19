import axios from "axios";
const TimeTableActionType={
    GET_HALLS_SUCCESS:"GET_HALLS_SUCCESS",
    GET_HALLS_FAILED:"GET_HALLS_FAILED"
}
const GetHallsAction=()=>{
    return async (dispatch)=>{
        try{
            const res= await axios.get("/halls");
            const {data}=res;
            dispatch({type:TimeTableActionType.GET_HALLS_SUCCESS,payload:data});
        }catch(error){
            console.error(error);
            dispatch({type:TimeTableActionType.GET_HALLS_FAILED,payload:error})
        }
    };
};
export {GetHallsAction,TimeTableActionType};
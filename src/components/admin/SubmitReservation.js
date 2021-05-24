import React from "react";
import {connect} from "react-redux";
import {AddSessionAction, DeleteSessionAction} from "../../store/actions/ModuleDropAction";
function SubmitReservation(props) {
    let {sessionsState,submitSession}=props;
    const checkReserved=()=>{
        if (sessionsState.reserved){

        }
    }
    return(<></>)
}
const mapStateToProps=(moduleDropstate)=>{
    return {
        sessionsState:moduleDropstate.moduleDrop
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        submitSession:(id)=>{
            dispatch(AddSessionAction(id));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SubmitReservation);
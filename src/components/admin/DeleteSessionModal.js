import React from "react";
import {connect} from "react-redux";
import {DeleteSessionAction} from "../../store/actions/ModuleDropAction";
function DeleteSessionModal(props) {
    return(<></>)
}

const mapStateToProps=(moduleDropstate)=>{
    return {
        id:moduleDropstate.moduleDrop.sessionId
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        delete:(id)=>{
            dispatch(DeleteSessionAction(id));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(DeleteSessionModal);
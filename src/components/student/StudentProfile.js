
import React,{useState} from "react";
import '../../css/Nav.css';
import {connect} from "react-redux";
/*export */
function StudentProfile(props) {
    const {auth}=props;

    return (
                        <h6>
                            {auth.user.userDetails.role}

                            {auth.user.userDetails.regNo}

                        </h6>

    );
};

const mapStateToProps=(userState)=>{
    return {
        auth:userState.auth
    }
};

export default connect(mapStateToProps)(StudentProfile);

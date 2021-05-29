import {Button, Image} from "react-bootstrap";
import '../css/Nav.css';
import logo3 from './../images/logo3.png';
import {BrowserRouter as Router,Link, useHistory} from "react-router-dom";
import React,{useState} from "react";
import Login from './Auth/LoginComponent'
import {LogoutAuthAction, OpenLoginAction, OpenSignupAction} from "../store/actions/AuthAction"
import {connect} from "react-redux";
function Header(){
    return (
        <Router>
            <div className="navbar-color">
                <nav  className="navbar navbar-expand-lg navbar-fixed-top n" >
                    <Image img src={logo3} alt="logo"  width={300} height={150} margin={15}/>
                    <div className="text">
                        <ul>
                            <li>
                                <h4> <b>FACULTY OF ENGINEERING</b></h4>
                                <h4><b>UNIVERSITY OF RUHUNA</b></h4>
                                <h4><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h4>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Router>
    );
};

// export default FirstNav;
/*
const mapStateToProps=(userState)=>{
    return {
        auth:userState.auth
    }
};
*/

/*const mapDispatchToProps=(dispatch)=>{
    return {
        logout:(history)=>{
            dispatch(LogoutAuthAction(history));
        },
        openLog:(open)=>{
            dispatch(OpenLoginAction(true));
            dispatch(OpenSignupAction(false));
        }
    }
};*/

export default Header;

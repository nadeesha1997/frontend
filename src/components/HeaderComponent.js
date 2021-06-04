/*
import {Button, Image} from "react-bootstrap";
import '../css/Nav.css';
import logo3 from './../images/logo3.png';
import {BrowserRouter as Router,Link, useHistory} from "react-router-dom";
import React,{useState} from "react";
import Login from './Auth/LoginComponent'
import {LogoutAuthAction, OpenLoginAction, OpenSignupAction} from "../store/actions/AuthAction"
import {connect} from "react-redux";
import SecondNav from "./SecondNav";
import {ThirdNav} from "./ThirdNav";
function Header(){
    return (
        <Router>
            <div className="navbar-color">
                <nav  className="navbar navbar-expand-lg navbar-fixed-top n" >
                    <Image img src={logo3} alt="logo"  width={300} height={150}/>
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
                <SecondNav/>

            </div>
        </Router>
    );
};
export default Header;*/
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {Image} from "react-bootstrap";
import '../css/Nav.css';
import logo3 from './../images/logo3.png';
import SecondNav from "./SecondNav";

const Header = () => {
    return(
        <div className="navbar-color">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl"  variant="dark">

                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <Image img src={logo3} alt="logo"  width={300} height={150}/>
                        <div className="text">
                            <ul>
                                <li>
                                    <h4> <b>FACULTY OF ENGINEERING</b></h4>
                                    <h4><b>UNIVERSITY OF RUHUNA</b></h4>
                                    <h4><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h4>
                                </li>
                            </ul>
                        </div>

                    </ReactBootStrap.Nav>

                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
            <SecondNav/>
        </div>
    )
}

export default Header;
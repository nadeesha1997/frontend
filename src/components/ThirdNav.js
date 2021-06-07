import React,{ useState,useEffect}  from 'react';
import * as ReactBootStrap from "react-bootstrap";
import UserService from "../components/services/UserService";

import {

    NavLink,
} from "react-router-dom";


class ThirdNav extends React.Component {
    userDetails;

    constructor(props) {
        super(props);
        this.state = {
            currentUser: UserService.getCurrentUser(),
        } }


        render(){
        return (
            <div className="navbar-color3">
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="#home">||| Welcome LSMS |||</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">



                            <NavLink to="/Home">
                                <ReactBootStrap.Nav.Link href="#features">Dashboard</ReactBootStrap.Nav.Link>
                            </NavLink>

                        {/*    {this.state.currentUser.user.userDetails.role==="Admin"  &&
                            <NavLink to="/EditTimeTable" className="nav-item nav-link">
                                    <ReactBootStrap.Nav.Link href="StudentTimetable">Edit Timetable</ReactBootStrap.Nav.Link>
                            </NavLink>}
                            {this.state.currentUser.user.userDetails.role==="Admin"  &&
                            <NavLink to="/admin/AdminProfile">
                                <ReactBootStrap.Nav.Link href="profile">Your Profile</ReactBootStrap.Nav.Link>
                            </NavLink>}
                            {this.state.currentUser.user.userDetails.role==="Admin"  &&
                            <NavLink to="/OnlineTimetable">
                                <ReactBootStrap.Nav.Link href="OnlineTimetable">Edit Online Lectures</ReactBootStrap.Nav.Link>
                            </NavLink>}*/}



                            {this.state.currentUser.user.userDetails.role==="Lecturer"  &&
                            <NavLink to="/lecturer/timetable">
                                <ReactBootStrap.Nav.Link href="timetable"> Edit Timetable</ReactBootStrap.Nav.Link>
                            </NavLink>}
                            {this.state.currentUser.user.userDetails.role==="Lecturer"  &&
                            <NavLink to="/OnlineTable">
                                <ReactBootStrap.Nav.Link href="timetable"> Edit Online lectures</ReactBootStrap.Nav.Link>
                            </NavLink>}
                            {this.state.currentUser.user.userDetails.role==="Lecturer"  &&
                            <NavLink to="/lecturer/profile">
                                <ReactBootStrap.Nav.Link href="profile"> Your Profile</ReactBootStrap.Nav.Link>
                            </NavLink>}





                            {this.state.currentUser.user.userDetails.role==="Student"  &&
                            <NavLink to="/StudentTimetable">
                                <ReactBootStrap.Nav.Link href="timetable"> Timetable</ReactBootStrap.Nav.Link>
                            </NavLink>}
                            {this.state.currentUser.user.userDetails.role==="Student"  &&
                            <NavLink to="/OnlineTimetable">
                                <ReactBootStrap.Nav.Link href="timetable"> Online lectures</ReactBootStrap.Nav.Link>
                            </NavLink>}
                            {this.state.currentUser.user.userDetails.role==="Student"  &&
                            <NavLink to="/StudentProfile">
                                <ReactBootStrap.Nav.Link href="profile"> Your Profile</ReactBootStrap.Nav.Link>
                            </NavLink>}

                        </ReactBootStrap.Nav>

                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        );

    }
}
export default ThirdNav;










/*
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {

    Link,
} from "react-router-dom";


const ThirdNav = () => {
    return(
        <div className="navbar-color3">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl"  variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">||| Welcome LSMS |||</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <Link to="/Home">
                            <ReactBootStrap.Nav.Link href="#features">  Dashboard</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/EditTimeTable">
                            <ReactBootStrap.Nav.Link href="#pricing">   Timetable</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/OnlineTable">
                            <ReactBootStrap.Nav.Link href="#pricing">   Online lectures</ReactBootStrap.Nav.Link>
                        </Link>

                    </ReactBootStrap.Nav>

                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default ThirdNav;*/

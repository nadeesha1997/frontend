// import React from 'react';
import { NavLink } from 'react-router-dom';
import React,{useState} from "react";
import '../css/Nav.css';
import {connect} from "react-redux";
/*export */
function ThirdNav(props) {
    const {auth}=props;

    return (
        <div className="navbar-color3">
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="navbar-nav">
                        <a className="navbar-brand" href="#">WELCOME LSMS</a>
                        <a className="navbar-brand" href="#">|</a>

                        <NavLink to="/Home" className="nav-item nav-link">
                            Dashboard
                        </NavLink>

                        {/*<h6>{auth.user.userDetails.role}</h6>*/}
                        {auth.user.userDetails.role==="Lecturer" && <NavLink to="/LecturerTimeTable" className="nav-item nav-link">
                            Timetable</NavLink>}
                        {auth.user.userDetails.role==="Student"  && <NavLink to="/StudentTimeTable" className="nav-item nav-link">
                            Timetable</NavLink>}

                        {/*<NavLink to="/EditTimeTable" className="nav-item nav-link">*/}
                        {/*    Timetable*/}
                        {/*</NavLink>*/}



                        <NavLink to="/OnlineTable" className="nav-item nav-link">
                            Online lectures
                        </NavLink>

                        {/*{isLecturer && <NavLink to="/LectureProfile" className="nav-item nav-link">*/}
                        {/*    Profile</NavLink>}*/}
                        {/*{isStudent && <NavLink to="/StudentProfile" className="nav-item nav-link">*/}
                        {/*    Profile</NavLink>}*/}

                        {/*<NavLink to="/Profile" className="nav-item nav-link">*/}
                        {/*    Profile*/}
                        {/*</NavLink>*/}

                        {auth.user.userDetails.role==="Admin" && <NavLink to="/AdminProfile" className="nav-item nav-link">
                            Profile</NavLink>}
                        {auth.user.userDetails.role==="Lecturer" && <NavLink to="/LecturerProfile" className="nav-item nav-link">
                            Profile</NavLink>}
                        {auth.user.userDetails.role==="Student"  && <NavLink to="/StudentProfile" className="nav-item nav-link">
                            Profile</NavLink>}

                    </div>
                </nav>
            </div>
        </div>
    );
};

const mapStateToProps=(userState)=>{
    return {
        auth:userState.auth
    }
};

export default connect(mapStateToProps)(ThirdNav);

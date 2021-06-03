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

export default ThirdNav;
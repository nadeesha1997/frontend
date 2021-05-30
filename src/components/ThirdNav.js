import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Nav.css';
/*export */
function ThirdNav() {
    return (
        <div className="navbar-color3">
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="navbar-nav">
                        <a className="navbar-brand" href="#">WELCOME LSMS</a>
                        <a className="navbar-brand" href="#">|</a>

                        <NavLink to="" className="nav-item nav-link">
                            Dashboard
                        </NavLink>

                        <NavLink to="Dashboard" className="nav-item nav-link">
                            Timetable
                        </NavLink>

                        <NavLink to="" className="nav-item nav-link">
                            Online lectures
                        </NavLink>

                    </div>
                </nav>
            </div>
        </div>
    );
}

export { ThirdNav };

import React from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Registration from './Auth/Registration/Registration';
import Login from './Auth/LoginComponent';

import CRUDHalls from './admin/CRUDHalls';

import StudentTimetable from './student/StudentTimetable';
import LecturerTimetable from './lecturer/LecturerTimetable';

import StudentProfile from './student/StudentProfile';
import LecturerProfile from './lecturer/LecturerProfile';
import AdminProfile from './admin/AdminProfile';

import StudentUpdateProfile from './student/StudentUpdateProfile';
import LecturerUpdateProfile from './lecturer/LecturerUpdateProfile';
import AdminUpdateProfile from './admin/AdminUpdateProfile';

import Dashboard from '../pages/Dashboard';
import FirstDashboard from '../pages/FirstDashboard';
import OnlineTable from '../pages/OnlineTable';

    const Body=()=> 
    {
        return(
            <div className="body">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Registration}/>
                        <Route path="/home" component={FirstDashboard}/>
                        <Route path="/EditTimeTable" component={Dashboard}/>

                        <Route path="/LecturerTimeTable" component={LecturerTimetable}/>
                        <Route path="/StudentTimeTable" component={StudentTimetable}/>

                        <Route path="/LecturerProfile" component={LecturerProfile}/>
                        <Route path="/StudentProfile" component={StudentProfile}/>
                        <Route path="/AdminProfile" component={AdminProfile}/>

                        {/*<Route path="/LecturerUpdateProfile" component={LecturerUpdateProfile}/>*/}
                        <Route path="/StudentUpdateProfile" component={StudentUpdateProfile}/>
                        {/*<Route path="/AdminUpdateProfile" component={AdminUpdateProfile}/>*/}

                        <Route path="/OnlineTable" component={OnlineTable}/>
                        <Route path="/admin/CRUDHalls" component={CRUDHalls}/>
                    </Switch>
                </Router>
            </div>
        )
    }
export default Body;

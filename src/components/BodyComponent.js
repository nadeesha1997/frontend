import React from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Registration from './Auth/Registration/Registration';
import Login from './Auth/LoginComponent';

import CRUDHalls from './admin/CRUDHalls';
import Dashboard from '../pages/Dashboard';
import FirstDashboard from '../pages/FirstDashboard';
import OnlineTable from '../pages/OnlineTable';

import ListHallComponent from './admin/ListHallComponent';
import ViewHallComponent from './admin/ViewHallComponent';
import CreateHallComponent from './admin/CreateHallComponent';
import ReserveApproval from "../pages/ReserveApproval";

import StudentProfile from "./student/StudentProfile";
import ScheduleOnline from "./admin/ScheduleOnline";
import AddHall from "./admin/AddHall";
import AdminRegisterForm from "./Auth/Registration/AdminRegistrationComponent";
import AdminProfile from "./admin/AdminProfile";
import ListUserComponent from "./admin/ListUserComponent";
import LecturerProfile from "./lecturer/Profile";
import DashboardLecturer from "../pages/DashboardLecturer";
import StudentTimeTable from "./student/StudentTimeTable";

import OnlineTimeTable from "./student/OnlineTimeTable";
import { Profile } from './profile';

    const Body=()=> 
    {
        const isLoggedin=localStorage.hasOwnProperty("auth");
        const role=isLoggedin?JSON.parse(localStorage.getItem("auth")).user.userDetails.role:null;
        return(
            <div className="body">
                 <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Registration}/>

                        <Route path="/OnlineTimetable" component={OnlineTimeTable}/>

                        <Route path="/admin/AdminProfile" component={AdminProfile}/>
                        {isLoggedin&&<>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/home" component={FirstDashboard}/>
                        </>}
{                        role==="Student"&&
                            <><Route path="/profile/student" component={StudentProfile}/>
                            <Route path="/student/timetable" component={StudentTimeTable}/>
                            </>
}                        {role==="Leturer"&&
                            <>
                            <Route path="/lecturer/timetable" component={DashboardLecturer}/>
                            <Route path="/profile/lecturer" component={LecturerProfile}/>
                            <Route path="/OnlineTimetable" component={OnlineTimeTable}/>
                            </>}
                        {role==="Admin"&&
                        <>
                        <Route path="/EditTimeTable" component={Dashboard}/>
                        <Route path="/OnlineTable" component={OnlineTable}/>
                        <Route path="/admin/CRUDHalls" component={CRUDHalls}/>
                        <Route path="/AddStaffMember" component={AdminRegisterForm}/>
                        <Route path = "/users" component = {ListUserComponent}/>
                        <Route path = "/halls" component = {ListHallComponent}></Route>
                        <Route path = "/add-hall/:id" component = {CreateHallComponent}></Route>
                        <Route path = "/view-hall/:id" component = {ViewHallComponent}></Route>
                        <Route path="/add" component={AddHall}/>
                        </>
                        }



                        <Route path="/ScheduleOnline" component={ScheduleOnline}/>
                   <Route path="/add" component={AddHall}/>
                     <Route path = "/approve/:id" component={ReserveApproval}></Route>


                    </Switch>
                </Router>
            </div>
        )
    }
export default Body;

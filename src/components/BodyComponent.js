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

import StudentProfile from "./student/StudentProfile";

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
                        <Route path="/OnlineTable" component={OnlineTable}/>
                        <Route path="/admin/CRUDHalls" component={CRUDHalls}/>

                        <Route path = "/halls" component = {ListHallComponent}></Route>
                        <Route path = "/add-hall/:id" component = {CreateHallComponent}></Route>
                        <Route path = "/view-hall/:id" component = {ViewHallComponent}></Route>

                        <Route path="/StudentProfile" component={StudentProfile}/>

                    </Switch>
                </Router>
            </div>
        )
    }
export default Body;

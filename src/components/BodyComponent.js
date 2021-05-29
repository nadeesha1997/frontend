import React from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from '../pages/Home'
import LecturerRegistration from './Auth/Registration/LecturerRegistrationComponent';
import Login from './Auth/LoginComponent';
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
                        <Route path="/signup" component={LecturerRegistration}/>
                        <Route path="/home" component={FirstDashboard}/>
                        <Route path="/EditTimeTable" component={Dashboard}/>
                        <Route path="/OnlineTable" component={OnlineTable}/>
                    </Switch>
                </Router>
            </div>
        )
    }
export default Body;

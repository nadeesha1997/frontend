import React from "react";
import { Route } from "react-router-dom";
import AdminRegisterForm from "./AdminRegistrationComponent";
import LecturerRegisterForm from "./LecturerRegistrationComponent";
import RegistrationNavBar from "./RegistrationNavBar";
import RegistrationTabBar from "./RegistrationTabBar";
import StudentRegisterForm from "./StudentRegistrationComponent";

const RegistrationComponent = ({ match }) => {


    return (

        <div className="page">
            <RegistrationNavBar />
            <div className="container">
                <RegistrationTabBar />
                <div >
                    <Route
                        exact path="/"
                        component={StudentRegisterForm}
                    />
                    <Route
                        path="/lecturer"
                        component={LecturerRegisterForm}
                    />

                    {/*<Route*/}
                    {/*    path="/faculty-staff"*/}
                    {/*    component={AdminRegisterForm}*/}
                    {/*/>*/}

                </div>
            </div>
        </div>
    );
};

export default RegistrationComponent;

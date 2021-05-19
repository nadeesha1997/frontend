import React from "react";
import { Route } from "react-router-dom";
import AdminRegisterForm from "./registration/AdminRegisterForm";
import LecturerRegisterForm from "./registration/LecturerRegisterForm";
import RegistrationNavbar from "./registration/RegistrationNavbar";
import RegistrationTabbar from "./registration/RegistrationTabbar";
import StudentRegisterForm from "./registration/StudentRegisterForm";

const RegistrationComponent = ({ match }) => {


    return (
        <div className="page">
            <RegistrationNavbar />
            <div className="container">
                <RegistrationTabbar />
                <div >
                    <Route
                        path={`${match.path}/lecturer`}
                        component={LecturerRegisterForm}
                    />

                    <Route
                        path={`${match.path}/student`}
                        component={StudentRegisterForm}
                    />
                    <Route
                        path={`${match.path}/faculty-staff`}
                        component={AdminRegisterForm}
                    />

                </div>
            </div>
        </div>
    );
};

export default RegistrationComponent;

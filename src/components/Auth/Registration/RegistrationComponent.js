import React from "react";
import { Route } from "react-router-dom";

// import AdminRegisterForm from "./registration/AdminRegisterForm";
// import LecturerRegisterForm from "./registration/LecturerRegisterForm";
// import RegistrationNavbar from "./registration/RegistrationNavbar";
// import RegistrationTabbar from "./registration/RegistrationTabbar";
// import StudentRegisterForm from "./registration/StudentRegisterForm";

import AdminRegistrationComponent from "./Registration";
import LecturerRegistrationComponent from "./Registration";
import RegistrationNavbar from "./Registration";
import RegistrationTabBar from "./Registration";
import StudentRegistrationComponent from "./Registration";

const RegistrationComponent = ({ match }) => {


    return (
        <div className="page">
            <RegistrationNavbar />
            <div className="container">
                <RegistrationTabBar />
                <div >
                    <Route
                        path={`${match.path}/lecturer`}
                        component={LecturerRegistrationComponent}
                    />

                    <Route
                        path={`${match.path}/student`}
                        component={StudentRegistrationComponent}
                    />
                    <Route
                        path={`${match.path}/faculty-staff`}
                        component={AdminRegistrationComponent}
                    />

                </div>
            </div>
        </div>
    );
};

export default RegistrationComponent;

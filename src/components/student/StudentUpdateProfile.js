import { FormGroup, Label} from 'reactstrap';
import React,{useState} from "react";
import  { Table } from 'react-bootstrap';
import '../../css/Nav.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SecondNav from "../SecondNav";
import ThirdNav from "../ThirdNav";
import SubjectList from "../admin/SubjectList";
/*export */
function StudentUpdateProfile(props) {
    const {auth}=props;

    return (

        <div className="page ">
            <SecondNav/>
            <ThirdNav/>
            <div className="container emp-profile col-md-6">
                <div className="container">

                    {/*<div style={col} />*/}
                    <div className="row">
                        <div className="col-md-4 col"></div>
                        <div className="col-md-6 col">

                            <div className="profile-img">
                                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="" width="80"/>

                                <input type="file" name="file" id="exampleFile" accept="image/*" className="form-control-file"
                                       onChange="showPreview"/>


                            </div>
                        </div>
                        <div className="col-md-4 col"></div>
                    </div>

                    <Table className="table table-borderless StudentDetails">
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>
                                Full Name
                            </td>
                            <td>
                                { auth.user.userDetails.fullName}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                User Name
                            </td>
                            <td>
                                {auth.user.userDetails.userName}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Register Number
                            </td>
                            <td>
                                {auth.user.userDetails.regNo}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Faculty Email
                            </td>
                            <td>
                                {auth.user.userDetails.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Department
                            </td>
                            <td>
                                {auth.user.userDetails.departmentId}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Semester
                            </td>
                            <td>
                                {auth.user.userDetails.semester}
                            </td>
                        </tr>
                    </Table>
                </div>
                <hr/>
                <div className="row">
                    <Table className="table table-borderless StudentDetails">
                        <tr align="left">

                            <b>Select the Semester and Department</b>

                            <SubjectList/>

                        </tr>


                    </Table>
                </div>
            </div>
        </div>
        // <h6>
        //     {auth.user.userDetails.role}
        //
        //     {auth.user.userDetails.regNo}
        //
        // </h6>

    );
};

const mapStateToProps=(userState)=>{
    return {
        auth:userState.auth
    }
};

export default connect(mapStateToProps)(StudentUpdateProfile);

import { FormGroup, Label} from 'reactstrap';
import React,{useState} from "react";
import  { Table } from 'react-bootstrap';
import '../../css/Nav.css';
import '../../css/Profile.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SecondNav from "../SecondNav";
import {ThirdNav} from "../ThirdNav";

function AdminProfile(props) {
    const {auth}=props;

    return (

        <div> <ThirdNav/>
            <div className="page ">





                    <div className="contain">

                        <div className="wrapper">
                            <div className="contacts">
                                <h3>Profile</h3>

                                <div className="row">
                                    <div className="col-md-4 col"></div>
                                    <div className="col-md-4 col">

                                        <div className="profile-img">
                                            <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="" width="100"/>

                                            <input type="file" name="file" id="exampleFile" style={{width:"100%"} } accept="image/*" className="form-control-file"
                                                   onChange="showPreview"/>


                                        </div>
                                    </div>

                                </div>

                                <Table className="table table-borderless AdminDetails">
                                    <tr>
                                        <td className="text">
                                            Full Name
                                        </td>
                                        <td className="text">
                                            { auth.user.userDetails.fullName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text">
                                            Register No
                                        </td>
                                        <td className="text">
                                            {auth.user.userDetails.regNo}
                                        </td>
                                    </tr>
                                    <tr className="text">
                                        <td>
                                            User Email
                                        </td>
                                        <td className="text">
                                            {auth.user.userDetails.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text">
                                            Department
                                        </td>
                                        <td className="text">
                                            {auth.user.userDetails.departmentId}
                                        </td>
                                    </tr>
                                </Table>

                            </div>

                            <div className="form">
                                <h3  >System Operations</h3>
                                <form action="">
                                    <p>
                                        <label htmlFor="">Add staff member</label>

                                            <Link to="/AddStaffMember"  className="box"><b>{"Click me"}</b></Link>


                                    </p>
                                    <p>
                                        <label htmlFor="">View Users</label>
                                        <Link to="/users"  className="box"><b>{"Click me"}</b></Link>
                                    </p>
                                    <p>
                                        <label htmlFor="">View Halls</label>
                                        <Link to="/halls"  className="box"><b>{"Click me"}</b></Link>
                                    </p>
                                    <p>
                                        <label htmlFor="">Other</label>
                                        <Link to="#"  className="box"><b>{"Click me"}</b></Link>
                                    </p>
                                    <p>
                                        <label htmlFor="">Other2</label>
                                        <textarea name="" id="" cols="10" rows="2"></textarea>
                                    </p>
                                    <br/>

                                </form>
                            </div>
                        </div>
                    </div>

            </div></div>
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

export default connect(mapStateToProps)(AdminProfile);
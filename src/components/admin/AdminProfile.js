import { FormGroup, Label} from 'reactstrap';
import React,{useState} from "react";
import  { Table } from 'react-bootstrap';
import '../../css/Nav.css';
import '../../css/Profile.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SecondNav from "../SecondNav";
import ThirdNav from "../ThirdNav";

function AdminProfile(props) {
    const {auth}=props;

    return (

        <div> <ThirdNav/>
        <br/>
            <div className="page5 ">





                    <div className="contain5">

                        <div className="wrapper5">
                            <div className="contacts5">
                                <h3>Your Profile</h3>

                                <div className="row">
                                    <div className="col-md-4 col"></div>
                                    <div className="col-md-4 col">

                                        <div className="profile-img">
                                            <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="" width="100"/>

                                            <input type="file" name="file" id="exampleFile" style={{width:"100%"} } accept="image/*" className="form5-control-file"
                                                   onChange="showPreview"/>


                                        </div>
                                    </div>

                                </div>

                                <Table className="table5 table5-borderless AdminDetails">
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
                                            Register No
                                        </td>
                                        <td>
                                            {auth.user.userDetails.regNo}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            User Email
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
                                </Table>

                            </div>

                            <div className="form5">
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
                                        <label htmlFor="">View subjects</label>
                                        <Link to="/subjects"  className="box"><b>{"Click me"}</b></Link>
                                    </p>
                                    <p>
                                        <label htmlFor="">Allow Permission for halls</label>
                                        <Link to="/sessions"  className="box"><b>{"Click me"}</b></Link>
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
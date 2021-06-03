import { FormGroup, Label} from 'reactstrap';
import React, {useEffect, useState} from "react";
import  { Table } from 'react-bootstrap';
import '../../css/Nav.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {ThirdNav} from "../ThirdNav";
import {
    GetDepartmentModulesAction,
    GetEnrolledModulesAction,
    GetIsModulesAction, SetEnrollableModulesAction
} from "../../store/actions/SelectedUserAction";
function StudentProfile(props) {
    const {selectedUserState,user,deptModules,isModules,enrolledModules,enrollableModules,loading,getEnrolledModules,getDepartmentModules,getIsModules,setEnrolableModules}=props;
    useEffect(()=>{
        getEnrolledModules(user.id);
        getDepartmentModules(user.semester,user.departmentId);
        getIsModules(user.semester)
    },[enrollableModules]);
    useEffect(()=>{
        setEnrolableModules(deptModules,isModules,enrolledModules)
    },[deptModules,isModules,enrolledModules]);
    useEffect(()=>{
        console.log(selectedUserState);
    },[deptModules,isModules,enrolledModules,enrolledModules])

    const enrolledModuleList=(modules)=>{
        let modList=[...modules];
        if(modList.length>0){
            let returnlist=(modList)=>{
                modList.map((mod)=>{
                    return(
                        <>
                            <tr>
                                <td>{mod.subject.code}</td>
                                <td>{mod.subject.name}</td>
                                <td><button>unenroll</button></td>
                            </tr>
                        </>
                    )
                })
            }
            return(
                <>
                    <table>
                        <thead><tr><th></th><th></th><th></th></tr></thead>
                        <tbody>{returnlist}</tbody>
                    </table>
                </>
            )
        }else {
            return (<></>);
        }
    };

    return (

        <div> <ThirdNav/>
            <div className="page ">


            <div className="container emp-profile col-md-6">
                <div className="container">

                    {/*<div style={col} />*/}
                    <div className="row">
                        <div className="col-md-4 col"></div>
                        <div className="col-md-6 col">

                            <div className="profile-img">
                                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="" width="100"/>

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
                                { user.fullName}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Register Number
                            </td>
                            <td>
                                {user.regNo}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                User Email
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Department
                            </td>
                            <td>
                                {user.departmentId}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Semester
                            </td>
                            <td>
                                {user.semester}
                            </td>
                        </tr>
                    </Table>
                </div>
                <hr/>
                <div className="row">

                    <div align="center" className="col-md-4">
                        <button  style={{width:150,height:40,backgroundColor:'#2d0b34',marginTop:5,marginLeft:150}}
                            type="submit" className="profile-edit-btn" name="btnAddMore" value="Update Profile">
                            <Link to="/StudentUpdateProfile">{"Update profile"}</Link>
                        </button>
                    </div>

                    <div align="center" className="col-md-4">
                        <button  style={{width:150,height:40,backgroundColor:'#2d0b34',marginTop:5,marginLeft:180}}
                            type="submit" className="profile-edit-btn" name="btnAddMore" value="Enroll modules">
                            <Link to="#">  Enroll modules   </Link>
                        </button>
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
        user:userState.selectedUser.user,
        deptModules:userState.selectedUser.departmentModules,
        isModules:userState.selectedUser.isModules,
        enrolledModules: userState.selectedUser.enrolledModules,
        enrollableModules: userState.selectedUser.enrollableModules,
        loading:userState.selectedUser.loading,
        selectedUserState:userState.selectedUser
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        getEnrolledModules:(id)=>{
            dispatch(GetEnrolledModulesAction(id))
        },
        getDepartmentModules:(deptId,semester)=>{
            dispatch(GetDepartmentModulesAction(deptId,semester));
        },
        getIsModules:(semester)=>{
            dispatch(GetIsModulesAction(semester));
        },
        setEnrolableModules:(dept,is,enrolled)=>{
            dispatch(SetEnrollableModulesAction(dept,is,enrolled));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentProfile);
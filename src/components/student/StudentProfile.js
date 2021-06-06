import { FormGroup, Label} from 'reactstrap';
import React, {useEffect, useState} from "react";
import  { Table } from 'react-bootstrap';
import '../../css/Nav.css';
import '../../css/Profile.css'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import ThirdNav from "../ThirdNav";
import {
    EnrollAction,
    GetDepartmentModulesAction,
    GetEnrolledModulesAction,
    GetIsModulesAction,
    SetEnrollableModulesAction,
    UnenrollAction,
    GetDepartmentAction
} from "../../store/actions/SelectedUserAction";
function StudentProfile(props) {
    const {successMessage,
        selectedUserState,
        user,
        deptModules,
        isModules,
        enrolledModules,
        enrollableModules,
        loading,
        getEnrolledModules,
        getDepartmentModules,
        getIsModules,
        setEnrolableModules,
        enroll,
        unEnroll,
        getDepartment}=props;
    useEffect(()=>{
        if(user.semester===1||user.semester===2){
            getDepartmentModules(user.departmentId,user.semester);
        }
        else {
            getDepartmentModules(user.departmentId,user.semester);
            getIsModules(user.semester);
        }
    },[user,successMessage]);
    useEffect(()=>{
        getEnrolledModules(user.id);
    },[user,deptModules,isModules]);
    useEffect(()=>{
        setEnrolableModules(deptModules,isModules,enrolledModules)
    },[deptModules,isModules,enrolledModules]);
    useEffect(()=>{
        if(user.semester!==1&&user.semester!==2){
            getDepartment(user.departmentId);
        }
    },[user])


    return (

        <div> <ThirdNav/>
            <br/>
            <div className="page5">

                <div className="contain5">
            <div className="wrapper5">

                <div className="contacts5">
                    <h3>Your Profile</h3>
                    {/*<div style={col} />*/}
                    <div className="row">
                        <div className="col-md-4 col"></div>
                        <div className="col-md-4 col">

                            <div className="profile-img">
                                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="" width="100"/>

                                <input type="file" name="file" id="exampleFile" style={{width:"100%"} } accept="image/*" className="form-control-file"
                                       onChange="showPreview"/>
                            </div>
                        </div>
                        <div className="col-md-4 col"></div>
                    </div>

                    <Table className="table5 table5-borderless StudentDetails">
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
                        {user.semster!==1&&user.semster!==2&&
                        <tr>
                            <td>
                                Department
                            </td>
                            <td>
                                {selectedUserState.department.name}
                            </td>
                        </tr>}
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
                <div className="module">
                    <h5> Please Enroll your modules..</h5>
                    {enrolledModuleList(enrolledModules,unEnroll)}
                    {enrollableModuleList(user,enrollableModules,enroll)}
                </div>
            </div></div>
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
        selectedUserState:userState.selectedUser,
        successMessage:userState.selectedUser.successMessage
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
        },
        enroll:(userId,moduleId)=>{
            dispatch(EnrollAction(userId,moduleId));
        },
        unEnroll:(id)=>{
            dispatch(UnenrollAction(id));
        },
        getDepartment:(id)=>{
            dispatch(GetDepartmentAction(id));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(StudentProfile);

const enrolledModuleList=(modules,unEnroll)=>{
    let modList=[...modules];
    // console.log("modlist");
    // console.log(modList.length);
    if(modList.length>0){
        // console.log("entrd")
        let returnlist= modList.map((mod)=>{
                return(
                    <>
                        <tr style={{textAlign:"left"}}>
                            <td>{mod.subject.code} -</td>
                            <td>{mod.subject.name}</td>
                            <td><button className="btn btn-primary btn-block" style={{width:100,backgroundColor:'#ad3286'}}
                                onClick={()=>{unEnroll(mod.id)}}>unenroll</button></td>

                        </tr>
                    </>
                );
            });


        return(
            <>
                <table>
                    <thead><tr><th></th><th></th><th></th></tr></thead>
                    <tbody>
                    {returnlist}
                    {/*<tr><td>helloo</td><td>helloo</td><td>helloo</td></tr>*/}
                    </tbody>
                </table>
            </>
        )
    }else {
        return (<></>);
    }
};
const enrollableModuleList=(user,modules,enroll)=>{
    let modList=[...modules];
    // let modList=modules;
    // console.log(modList);
    if(modList.length>0){
        let returnlist= modList.map((mod)=>{
                return(
                    <>
                        <tr>
                            <td style={{textAlign:"left"}}>{mod.code} - </td>
                            <td style={{textAlign:"left"}}>{mod.name}</td>
                            <td><button className="btn btn-primary btn-block" style={{width:100,backgroundColor:'#6a3682'}}

                                onClick={()=>{enroll(user.id,mod.id)}}>enroll</button></td>

                        </tr>
                    </>
                )
            })

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
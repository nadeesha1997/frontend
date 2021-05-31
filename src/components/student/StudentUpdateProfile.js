import React,{Component} from 'react';
import '../css/StudentProfile.css'
//import Student from './data/profile.json'
import AuthService from "../../services/auth.service";
import axios from "axios";
import { Form,Input, Label, FormGroup, FormFeedback, Button,} from "reactstrap";
import HomepageNavbar from "../TimeTable/HomepageNavbar";
import {Nav} from "../Nav";
//<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>

class StudentUpdateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            modules:[],
            // enrolablemodules:{
            //     departmentModules:[],
            //     iSModules:[]
            // }
            departmentModules:[],
            iSModules:[]
        };
        this.getModules();
        /*this.getInitialState();*/


    }

   /* getInitialState = () => ({
        data: {
            Semester: "",
        },

    });*/

    updateDate = data => {
        this.setState({
            date: data
        })
        //this.props.updateDate(data)
        // console.log(this.state)
    }
    componentDidMount() {
        this.getModules();
        this.getISModules();
        this.getEnrolableModules();
        console.log(this.state)
    }
    getModules=()=>{
        axios.get("https://localhost:5001/api/subjectuser/user/"+this.state.currentUser.userDetails.id)
            .then(res=>{
                this.setState({
                    modules:res.data
                })
                console.log(res.data)
            }).then(console.log(this.state))
    }
    getEnrolableModules=()=>{
        let b='';
        axios.get("https://localhost:5001/api/departments/"+this.state.currentUser.userDetails.departmentId)
            .then(res=>{
                b=res.data.code.slice(0,2)
            }).then(this.getDepartmentModules(b));
        this.getISModules();
    }
    getDepartmentModules=(b)=>{
        axios.get("https://localhost:5001/api/subjects/department/"+b+"/semester/"+this.state.currentUser.userDetails.semester)
            .then(res=>{
                this.setState({
                    departmentModules:res.data
                })
                console.log(res.data)
            }).then(console.log(this.state));
    }
    getISModules=()=>{
        axios.get("https://localhost:5001/api/subjects/department/is/semester/"+this.state.currentUser.userDetails.semester)
            .then(res=>{
                this.setState({
                    iSModules:res.data
                })
                console.log(res.data)
            }).then(console.log(this.state))
    }
    Unenroll=(id,e)=>{
        axios.delete('https://localhost:5001/api/SubjectUser/${this.state.currentUser.userDetails.id}/${id}')
            .then((res)=>{console.log(res.data)})
            .then(err=>console.log(err))
    }

    render () {
        const dept = this.state.departmentModules.map((mod) => {

            if(
                this.state.departmentModules.length != 0
            )
            {
                return(
                    <tr>
                        <td >
                            <div key={mod.id}>
                                {/* {mod.subject.code} - {mod.subject.name} */}
                            </div>
                        </td>
                    </tr>
                )
            }
            else{

                return(<div>

                </div>)
            }

        });
        const Isdept = this.state.iSModules.map((mod) => {
            if(
                this.state.iSModules.length != 0
            )
            {
                return(
                    <tr>
                        <td >
                            <div key={mod.id}>
                                {mod.subject.code} - {mod.subject.name}
                            </div>
                        </td>
                    </tr>
                )
            }
            else{

                return(<div>

                </div>)
            }
        });
        const mod = this.state.modules.map((mod) => {
            if(
                this.state.modules.length != 0
            )
            {
                return (
                    <li key={mod.id}>
                        <span>
                            {mod.subject.code} - {mod.subject.name}
                        </span>
                        <span><button onClick = {(e)=>this.Unenroll(mod.id,e)}></button></span>

                    </li>
                );
            }
            else{
                return(<div>

                </div>)
            }
        });
        return (
            <div className="page">
                <HomepageNavbar updateDate={this.updateDate}/>
                <Nav/>
            <div className="container emp-profile col-md-6">
                <form method="post">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col"></div>
                            <div className="col-md-4 col">
                                <div className="profile-img">
                                    <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt=""/>
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col"></div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Full Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.currentUser.userDetails.fullName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>User Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.currentUser.userDetails.userName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Register Number</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.currentUser.userDetails.regNo}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Faculty Email</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.currentUser.userDetails.email}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Department ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.currentUser.userDetails.departmentId}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Semester</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.currentUser.userDetails.semester}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <div className="row">
                        <div> Enrolled Modules
                            {mod}
                        </div>

                        {/* <Table className="table table-borderless StudentDetails">
                            <tr>
                                <th>
                                    Enrolled Modules
                                </th>
                            </tr>
                            {mod}
                        </Table> */}
                    </div>
                    <hr/>
                    <div className="row">
                        <div> Enrollable Modules
                            {dept}
                            {Isdept}
                        </div>
                    </div>

                </form>
            </div>
            </div>
        );
    }
}

export default StudentUpdateProfile
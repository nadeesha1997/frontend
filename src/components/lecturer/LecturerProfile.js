// import React,{Component,useState,useEffect} from 'react';
// import {Nav} from '../Nav';
// import '../css/Profile.css'
// import AuthService from "../../services/auth.service";
// import axios from "axios";
//
// import {Link} from "react-router-dom";
// import  { Table } from 'react-bootstrap';
//
//
// import { FormGroup, Label} from 'reactstrap';
//
//
//
//
// class LecturerProfile extends Component {
//
//
//
//     constructor(props) {
//         super(props);
//         let now = new Date();
//         this.state={ currentUser: AuthService.getCurrentUser(),
//             date:now,
//             modules:[],
//             // enrolablemodules:{
//             //     departmentModules:[],
//             //     iSModules:[]
//             // }
//             departmentModules:[],
//             iSModules:[]
//         };
//         this.getModules();
//     }
//     updateDate = data => {
//         this.setState({
//             date: data
//         })
//         //this.props.updateDate(data)
//         // console.log(this.state)
//     }
//
//
//     componentDidMount() {
//         //this.getModules();
//     }
//     getModules=()=>{
//         axios.get("https://localhost:5001/api/subjectuser/user/"+this.state.currentUser.userDetails.id)
//             .then(res=>{
//                 this.setState({
//                     modules:res.data
//                 })
//                 console.log(res.data)
//             }).then(console.log(this.state))
//     }
//     getEnrolableModules=()=>{
//         let b='';
//         axios.get("https://localhost:5001/api/departments/"+this.state.currentUser.userDetails.departmentId)
//             .then(res=>{
//                 b=res.data.code.slice(0,2)
//             }).then(this.getDepartmentModules(b));
//         this.getISModules();
//     }
//     getDepartmentModules=(b)=>{
//         axios.get("https://localhost:5001/api/subjects/department/"+b+"/semester/"+this.state.currentUser.userDetails.semester)
//             .then(res=>{
//                 this.setState({
//                     departmentModules:res.data
//                 })
//                 console.log(res.data)
//             }).then(console.log(this.state));
//     }
//     getISModules=()=>{
//         axios.get("https://localhost:5001/api/subjects/department/is/semester/"+this.state.currentUser.userDetails.semester)
//             .then(res=>{
//                 this.setState({
//                     iSModules:res.data
//                 })
//                 console.log(res.data)
//             }).then(console.log(this.state))
//     }
//     render () {
//
//
//
//         const mod = this.state.modules.map((mod) => {
//             return (
//                 <li>
//                     <div key={mod.id}>
//                         {mod.subject.code} - {mod.subject.name}
//                     </div>
//                 </li>
//             );
//         });
//         // const dept = this.state.departmentModules.map((mod) => {
//         //     return (
//         //         <tr>
//         //         <td >
//         //             <div key={mod.id}>
//         //                 {mod.subject.code} - {mod.subject.name}
//         //             </div>
//         //         </td>
//         //         </tr>
//         //     );
//         // });
//         // const Isdept = this.state.iSModules.map((mod) => {
//         //     return (
//         //         <tr>
//         //         <td >
//         //             <div key={mod.id}>
//         //                 {mod.subject.code} - {mod.subject.name}
//         //             </div>
//         //         </td>
//         //         </tr>
//         //     );
//         // });
//
//
//
//         return (
//             <div className="page">
//                 <HomepageNavbar updateDate={this.updateDate}/>
//                 <Nav/>
//                 <div className="container emp-profile col-md-6">
//                     <div className="container">
//                         {/*<div style={col} />*/}
//                         <div className="row">
//                             <div className="col-md-4 col"></div>
//                             <div className="col-md-4 col">
//                                 <h4>{this.state.currentUser.userDetails.role} profile</h4>
//                                 <div className="profile-img">
//                                     <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt=""/>
//                                     <div className="file btn btn-lg btn-primary">
//                                         <FormGroup>
//                                             <Label for="exampleFile">Upload Photo</Label>
//                                         </FormGroup>
//                                         <input type="file" name="file" id="exampleFile" accept="image/*" className="form-control-file"
//                                         onChange="showPreview"/>
//
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-4 col"></div>
//                         </div>
//
//                         {/* <div className="row">
//                      <div className="row">
//                         <div className="col-md-6">
//                         <label>Full Name</label>
//                         </div>
//
//                     <div className="col-md-6">
//                         <p>{this.state.currentUser.userDetails.fullName}
//
//                         <br></br>
//                                     {this.state.currentUser.userDetails.role}
//                         </p>
//                     </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <label>User Name</label>
//                         </div>
//                     <div className="col-md-6">
//                         <p>{this.state.currentUser.userDetails.userName}</p>
//                     </div>
//                 </div>
//                 </div> */}
//                         <Table className="table table-borderless StudentDetails">
//                             <tr>
//                                 <th></th>
//                                 <th></th>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     Full Name
//                                 </td>
//                                 <td>
//                                     {this.state.currentUser.userDetails.fullName}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     User Name
//                                 </td>
//                                 <td>
//                                     {this.state.currentUser.userDetails.userName}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     Register Number
//                                 </td>
//                                 <td>
//                                     {this.state.currentUser.userDetails.regNo}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     Faculty Email
//                                 </td>
//                                 <td>
//                                     {this.state.currentUser.userDetails.email}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     Department
//                                 </td>
//                                 <td>
//                                     {this.state.currentUser.userDetails.departmentId}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     Semester
//                                 </td>
//                                 <td>
//                                     {this.state.currentUser.userDetails.semester}
//                                 </td>
//                             </tr>
//                         </Table>
//                     </div>
//                     <hr/>
//                     <div className="row">
//                         <Table className="table table-borderless StudentDetails">
//                             <tr>
//                                 <th>
//                                     Enrolled Modules
//
//                                 </th>
//
//
//                             </tr>
//
//                             <ol align="left">
//                                 CE1301 - Introduction to Civil Engineering<br/>
//                                 CE2201 - Fundamentals of Fluid Mechanics <br/>
//                                 CE3202 - Concrete Technology  <br/>
//                                 CE3301 - Building Planning and Cost Estimating   <br/>
//                                 CE2302 - Mechanics of Materials <br/>
//
//
//                             </ol>
//
//                             {mod}
//                         </Table>
//                         <div align="center" className="col-md-4">
//                             <button  type="submit" className="profile-edit-btn" name="btnAddMore" value="Update Profile">
//                                 <Link to="./LecturerUpdateProfile">{"Update profile"}</Link>
//                             </button>
//                         </div>
//                     </div>
//                     {/* <div className="row">
//                 <Table className="table table-borderless StudentDetails">
//                     <tr>
//                         <th>
//                             Enrollable Modules
//                         </th>
//                     </tr>
//                     {dept}
//                     {Isdept}
//                 </Table>
//             </div> */}
//                 </div>
//             </div>
//
//         );
//     }
// }
//
// export default LecturerProfile
//
//

import React,{Component} from 'react';
import '../css/StudentProfile.css'
import AuthService from "../../services/auth.service";
import Select from "react-select";
import axios from "axios";
import HomepageNavbar from "../TimeTable/HomepageNavbar";
import {Nav} from "../Nav";




class LecturerUpdateProfile extends Component {


    constructor(props){
        super(props);

        this.state = {
            selectedItemsValue: [],
            currentUser: AuthService.getCurrentUser(),
            modules:[],
            // enrolablemodules:{
            //     departmentModules:[],
            //     iSModules:[]
            // }
            departmentModules:[],
            iSModules:[],
            iSModulesAll:[],

            selectOptions : [],
            // id: "",
            // name: '',
            // code:''
            value:[]

        };
        // this.getModules();

        this.getISModulesAll();
    }

    // getSelectedItems() {
    //     if (this.listobj) {
    //         console.log(this.listobj)
    //          this.setState({
    //             selectedItemsValue: this.listobj.getSelectedItems().data});
    //     }
    // }

    updateDate = data => {
        this.setState({
            date: data
        })
        //this.props.updateDate(data)
        // console.log(this.state)
    }
    componentDidMount() {

        this.getOptions();
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
    Unenroll=(modId)=>{
        axios.delete('https://localhost:5001/api/SubjectUser/'+modId)
            .then(response => {
                if(response.data != null){
                    alert("removed successfully!");
                    this.setState({
                        modules: this.state.modules.filter(mod => mod.id !== modId)
                    })
                }
            });
            // .then( res => {console.log(res.data)})
            // .then(err=>console.log(err))
    }

    getISModulesAll=()=>{
        axios.get("https://localhost:5001/api/subjects")
            .then(res=>{
                this.setState({
                    iSModulesAll:res.data
                })
                });
    }

    // getOptions(){
    //     axios.get("https://localhost:5001/api/subjects")
    //         .then(res=>{
    //             this.setState({
    //                 iSModulesAll:res.data
    //             })
    //         });
    // }


    async getOptions(){
        const res = await axios.get('https://localhost:5001/api/subjects')
        const data = res.data

        const options = data.map(d => ({
            "value" : d.id,
            "label" : d.name,
            "code":d.code
        }))
        this.setState({selectOptions: options})
    }

    handleChange(e){
        // this.setState({id:e.value, name:e.label, code:e.code })
        this.setState({value:e})
    }


    // selectionChange=(item)=>{
    //     console.log(item.name);
    // }


    handleSubmit = (e) => {
        e.preventDefault();
        const { data } = this.state;
            console.log(data);
            //Call an api here
            axios.post('https://localhost:5001/api/accounts/lecturer', data)
                .then(res=>{
                    console.log(res.data);
                });
    };

    render () {

        // console.log(this.state.selectOptions)
        console.log(this.state.value)


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
                    <li key={mod.id}>
                    <span>
                        {/* {mod.subject.code} - {mod.subject.name} */}
                    </span>
                    <span><button  class="themeBtn4" onClick = {(this.getISModules.bind(this, mod.id))}>add</button></span>

                    </li>
                );
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
                        <span><button  class="themeBtn4" onClick = {(this.Unenroll.bind(this, mod.id))}>remove</button></span>

                    </li>
                );
            }
            else{
                return(<div>

                </div>)
            }
        });
        /*const listobj=null;*/
        return (
            <div className="page">
                <HomepageNavbar updateDate={this.updateDate}/>
                <Nav/>
            <div className="container emp-profile col-md-6">
                <form>
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
                                    <label>Reg No</label>
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

                        </div>
                    </div>

                {/*  button tags */}
                </form>

                <hr/>

                <div>
                    <div className="row">
                        <div> Available Modules
                            {dept}
                            {Isdept}
                        </div>
                    </div>

                    {/*<div>*/}
                    {/*    <Select  options={this.state.selectOptions}*/}
                    {/*             onChange={this.handleChange.bind(this)}*/}
                    {/*                                                     />*/}
                    {/*    <p>You have selected  <strong>{this.state.name}</strong>*/}
                    {/*        whose Module code is <strong>{this.state.code}</strong></p>*/}
                    {/*</div>*/}

                    <div>
                        <Select options={this.state.selectOptions}  onSubmit={this.handleSubmit}  onChange={this.handleChange.bind(this)} isMulti />
                        <hr/>
                        <p align="left">You have selected </p>

                        {
                            this.state.value === null ? "" : this.state.value.map(v => <h6 align="left">{ v.code}- { v.label}</h6>)
                        }
                    </div>

                    <button type="submit" className="profile-edit-btn"  >update</button>

                </div>

                <hr/>

                {/*<div className="row">*/}
                {/*    <div>Selected Modules*/}
                {/*        {mod}*/}

                {/*        <div>*/}
                {/*            <table>*/}
                {/*                <tbody>*/}
                {/*                <tr>*/}
                {/*                    <div className="col-md-4 col"><th>Text</th></div>*/}
                {/*                    <div className="row-cols-md-12 col"><th>Id</th></div>*/}
                {/*                </tr>*/}

                {/*                {this.state.selectedItemsValue.map((item, index) => {*/}
                {/*                    return (<tr key={index}>*/}
                {/*                        <td>{item.text}</td>*/}
                {/*                        <td>{item.id}</td>*/}
                {/*                    </tr>);*/}
                {/*                })}*/}
                {/*                </tbody>*/}
                {/*            </table>*/}
                {/*        </div>*/}

                {/*    </div>*/}

                {/*</div>*/}


            </div>
            </div>
        )



    }
}

export default LecturerUpdateProfile



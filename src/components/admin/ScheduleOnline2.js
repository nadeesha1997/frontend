
import React, {useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import '../../css/modal.css';
import '../../css/OnlineLecture.css';
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import {useHistory} from "react-router";

const ScheduleOnline=(props)=>{

const {user,register,err}=props;
const history=useHistory();

const initialState ={
    data: {
        RegNo: "",
        FullName: "",
        email: "",
        password: "",
        confirmPassword:"",
       Semester: "",
        Role:"Lecturer"

    },
    errors: {},
};

const [state, setState] = useState(initialState);
const handleChange = (e) => {
    setState({
        data: {
            ...state.data,
            [e.target.name]: e.target.value,
        },
        errors: {
            ...state.errors,
            [e.target.name]: "",
        },
    });
};

const validate = () => {
    const { data } = state;
    let errors = {};

    if (data.RegNo === "") errors.RegNo = "Lecturer_ID can not be blank.";
    if (data.FullName === "") errors.FullName = "Full_Name can not be blank.";
    if (data.email === "") errors.email = " Email can not be blank.";
    if (data.DepartmentID === "") errors.DepartmentID = "Department can not be blank.";
    if (data.password === "") errors.password = "Password must be valid.";
    if (data.confirmPassword !== data.password)
        errors.confirmPassword = "Passwords must match.";

    return errors;
};

const handleSubmit = (e) => {
    e.preventDefault();

    const { data } = state;

    const errors = validate();

    if (Object.keys(errors).length === 0) {
        console.log(data);
        //Call an api here
        axios.post('https://localhost:5001/api/Shedule/Online', data)
            .then(res=>{
                console.log(res.data);
            });
        //Resetting the form
        setState(initialState);
        alert("Registration successful! please logging in")
    } else {
        setState({ errors });
        alert("Registration is not successful! Please register again")
    }
    console.log(user);
    register(state,history);
};

const { data, errors } = state;


    return(

        <Modal show={true}>
            <ModalHeader closeButton>
                <ModalTitle>LSMS-Schedule a Online Lecture</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="page1">
                    <div className="container tab-pane active mb-5" align="left" style={{fontWeight:"bolder"}}>

                        <br />
                        <div className="col-sm-8">
                            <div className="form">
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup className="form-group">
                                        <div className="col-sm-12">

                                            <Label for="RegNo">Lecturer ID</Label>
                                            <Input
                                                style={{width:350}}
                                                value={data.RegNo}
                                                invalid={!!errors.RegNo}
                                                name="RegNo"
                                                onChange={handleChange}
                                            />
                                            <FormFeedback>{errors.RegNo}</FormFeedback>
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <div className="col-sm-12">
                                            <Label for="FullName">Full Name : </Label>
                                            <Input
                                                style={{width:350}}
                                                value={data.FullName}
                                                invalid={!!errors.FullName}
                                                name="FullName"
                                                onChange={handleChange}
                                            />
                                            <FormFeedback>{errors.FullName}</FormFeedback>
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <div className="col-sm-12">
                                            <Label for="email"> Email : </Label>
                                            <Input
                                                style={{width:350}}
                                                value={data.email}
                                                invalid={!!errors.email}
                                                name="email"
                                                onChange={handleChange}
                                            />
                                            <FormFeedback>{errors.email}</FormFeedback>
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <div className="col-sm-12">
                                            <Label for="DepartmentID">Department  : </Label>
                                            {"\n"}
                                            <select
                                                style={{width: `${(8*data.DepartmentID.length) + 50}px`}}
                                                value={data.DepartmentID}
                                                onChange={handleChange}
                                                invalid={!!errors.DepartmentID}
                                                name="DepartmentID">
                                                <option value="0"></option>
                                                <option value="1">EIE</option>
                                                <option value="2">CEE</option>
                                                <option value="3">MME</option>
                                                <option value="4">IS</option>
                                            </select>
                                            {/*<Input
                                    value={data.DepartmentID}
                                    invalid={!!errors.DepartmentID}
                                    name="DepartmentID"
                                    onChange={this.handleChange}
                                />*/}
                                            <FormFeedback>{errors.DepartmentID}</FormFeedback>
                                        </div>
                                    </FormGroup>

                                    <FormGroup>

                                        <div className="col-sm-12">
                                            <Label for="password">Password : </Label>
                                            <Input
                                                style={{width:350}}
                                                value={data.password}
                                                type="password"
                                                name="password"
                                                invalid={!!errors.password}
                                                onChange={handleChange}
                                            />
                                            <FormFeedback>{errors.password}</FormFeedback>
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <div className="col-sm-12">
                                            <Label for="confirmPassword">Confirm Password : </Label>
                                            <Input
                                                style={{width:350}}
                                                value={data.confirmPassword}
                                                type="password"
                                                name="confirmPassword"
                                                invalid={!!errors.confirmPassword}
                                                onChange={handleChange}
                                            />
                                            <FormFeedback>{errors.confirmPassword}</FormFeedback>
                                        </div>
                                    </FormGroup>

                                    <div className="col-sm-12">

                                        <Button className="btn-block" style={{fontFamily:'Arial',width:150,backgroundColor:'#150037',marginLeft:150,marginBottom:-10}} >
                                            Register
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                            {err}
                        </div>
                    </div>
                </div>

            </ModalBody>


        </Modal>

    );}

export default ScheduleOnline;
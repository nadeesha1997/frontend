import React, { useState } from "react";
import { Form,Input, Label, FormGroup, FormFeedback, Button,} from "reactstrap";
import axios from "axios";
import '../../../css/modal.css';

const StudentRegisterForm=(props)=> {
  const initialState ={
      data: {
          RegNo: "",
          FullName: "",
          email: "",
          password: "",
          confirmPassword:"",
          DepartmentID: "",
          Semester:1,
          Role:"Student"

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

        if (data.RegNo === "") errors.RegNo = "Student_ID can not be blank.";
        if (data.FullName === "") errors.FullName = "Full_Name can not be blank.";
        if (data.email === "") errors.email = " Email can not be blank.";
        // if (data.DepartmentID === "") errors.DepartmentID = "Department can not be blank.";
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
            axios.post('https://localhost:5001/api/accounts/register/student', data)
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
    };
    const { data, errors } = state;

        return (
            <div className="page1">
            <div className="container tab-pane active mb-5" align="left" style={{fontWeight:"bolder"}}>

                <br />
                <div className="col-sm-8">
                    <div className="form">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="form-group">
                            <div className="col-sm-12">
                                <Label for="RegNo">Student ID</Label>
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
                                <Label for="Semester">Semester  : </Label>
                                {"\n"}
                                <select
                                    style={{width: `${(8*data.DepartmentID.length) + 50}px`}}
                                    value={data.Semester}
                                    onChange={handleChange}
                                    invalid={!!errors.Semester}
                                    name="Semester">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>

                                </select>
                                {/*<Input
                                    value={data.DepartmentID}
                                    invalid={!!errors.DepartmentID}
                                    name="DepartmentID"
                                    onChange={this.handleChange}
                                />*/}
                                <FormFeedback>{errors.Semester}</FormFeedback>
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
                                    <option value=""></option>
                                    <option value="1">EIE</option>
                                    <option value="2">CEE</option>
                                    <option value="3">MME</option>
                                    {/*<option value="4">IS</option>*/}
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

                            <Button className="btn-block" style={{fontFamily:'Arial',width:150,backgroundColor:'#150037',marginLeft:150}} >
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
                </div></div></div>
        );
}

export default StudentRegisterForm;


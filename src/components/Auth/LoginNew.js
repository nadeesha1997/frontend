import React, { Component } from "react";
import axios from "axios";
import { Form,Input, Label, FormGroup, FormFeedback, Button,} from "reactstrap";


class LecturerRegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            RegNo: "",
            FullName: "",
            email: "",
            password: "",
            confirmPassword:"",
            DepartmentID: "",
            Role:"Lecturer"

        },
        errors: {},
    });
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value,
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: "",
            },
        });
    };
    validate = () => {
        const { data } = this.state;
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

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            axios.post('https://localhost:5001/api/accounts/register/lecturer', data)
                .then(res=>{
                    console.log(res.data);
                });
            //Resetting the form
            this.setState(this.getInitialState());
            alert("Registration successful! please logging in")
        } else {
            this.setState({ errors });
            alert("Registration is not successful! Please register again")
        }
    };

    render() {
        const { data, errors } = this.state;
        return (


            <div className="container tab-pane active mb-5" align="left" style={{fontWeight:"bolder"}}>

                <br />
                <div className="col-sm-8">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="form-group">
                            <div className="col-sm-12">
                                <Label for="RegNo">Lecturer ID</Label>
                                <Input
                                    value={data.RegNo}
                                    invalid={!!errors.RegNo}
                                    name="RegNo"
                                    onChange={this.handleChange}
                                />
                                <FormFeedback>{errors.RegNo}</FormFeedback>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <div className="col-sm-12">
                                <Label for="FullName">Full Name : </Label>
                                <Input
                                    value={data.FullName}
                                    invalid={!!errors.FullName}
                                    name="FullName"
                                    onChange={this.handleChange}
                                />
                                <FormFeedback>{errors.FullName}</FormFeedback>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <div className="col-sm-12">
                                <Label for="email"> Email : </Label>
                                <Input
                                    value={data.email}
                                    invalid={!!errors.email}
                                    name="email"
                                    onChange={this.handleChange}
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
                                    onChange={this.handleChange}
                                    invalid={!!errors.DepartmentID}
                                    name="DepartmentID">
                                    <option value=""></option>
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
                                    value={data.password}
                                    type="password"
                                    name="password"
                                    invalid={!!errors.password}
                                    onChange={this.handleChange}
                                />
                                <FormFeedback>{errors.password}</FormFeedback>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <div className="col-sm-12">
                                <Label for="confirmPassword">Confirm Password : </Label>
                                <Input
                                    value={data.confirmPassword}
                                    type="password"
                                    name="confirmPassword"
                                    invalid={!!errors.confirmPassword}
                                    onChange={this.handleChange}
                                />
                                <FormFeedback>{errors.confirmPassword}</FormFeedback>
                            </div>
                        </FormGroup>

                        <div className="col-sm-12">

                            <Button className="btn-block" style={{fontFamily:'Arial',width:150,backgroundColor:'#150037',marginLeft:250}} >


                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LecturerRegisterForm;


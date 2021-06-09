import React,{useState} from 'react';
// import {Redirect} from 'react-router-dom';

import { Link, useHistory } from "react-router-dom";

import icon from '../../images/icon.jpg';

import '../../css/modal.css';

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
// import Button from 'react-bootstrap/Button';
// import AuthService from '../../services/auth.service';
import { Button,Image } from "react-bootstrap";

import {LoginAuthAction, OpenLoginAction} from "../../store/actions/AuthAction";

import {connect} from 'react-redux';

// const required = value => {
//     if (!value) {
//         return (
//             <div className="alert alert-danger" role="alert">
//                 This field is required!
//             </div>
//         );
//     }
// };

const Login=(props)=>{
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const [message, setmessage] = useState("");

    const history=useHistory();
    const {login,isopen,closeModal,openSign}=props;

    const handleEmail=e=>setemail(e.target.value);
    const handlePassword=e=>setpassword(e.target.value);
    const handleLogin=e=>{
        e.preventDefault();
        setmessage("");
        setloading(true);
        login({email,password},history);
        setloading(false);
    }

    // const {isLoggedIn,messages}=props;
    // if(isLoggedIn){
    //     return <Redirect to="/profile"/>
    // }

    return(
        <>
    {/*    <div*/}
    {/*    className="d-flex align-items-center justify-content-center"*/}
    {/*    style={{ height: "100vh" ,*/}
    {/*    // zIndex:1*/}
    {/*}}*/}
    {/*    >*/}
    {/*    </div>*/}
         <Modal show={isopen}
         onHide={()=>closeModal(false)}
         // style={{zIndex:1}}
         >
            <ModalHeader closeButton>
                <ModalTitle>
                    <div className="title">LSMS-Login</div></ModalTitle>
            </ModalHeader>
            <ModalBody>
                {/* Woohoo, you're reading this text in a modal!
                <Form.Group>
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control type="text" onChange={handleEmail} value={email} placeholder="email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control type="password" onChange={handlePassword} value={password} placeholder="password"/>
                </Form.Group> */}

                <div>

                {/*<div className="p1">*/}
                {/*    <h5><u>LECTURE SCHEDULE MANAGEMENT SYSTEM</u></h5>*/}
                {/*</div>*/}

            <div className="page1">


                <Image img src={icon} alt="icon" style={{width: 250,
                    height: 250,
                    borderRadius: 450 ,
                    padding:10,marginLeft:100}}/>
                <Form
                    onSubmit={handleLogin}
                >
                    <div className="form-group">
                        <label  htmlFor="username" style={{color:'black',fontWeight:'bolder'}}>Email : </label>
                        <Input style={{width:350}}
                            type="text"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                            required
                            //validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" style={{color:'black',fontWeight:'bolder'}}>Password : </label>
                        <Input style={{width:350}}
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                            required
                            //validations={[required]}
                        />
                    </div>


                        <button  style={{width:150,height:40,backgroundColor:'#2d0b34',marginTop:5,marginLeft:130}}
                                className="btn btn-primary btn-block"
                                disabled={loading}
                        >
                            {loading && (
                                <span  className="spinner-border spinner-border-sm"></span>
                            )}
                            Login
                        </button>

                    <div className="form-group">
                        {/*<Link to="#" variant="body2" >*/}
                        {/*    <Link to="/Reset/ResetPassword"> Forgot password?  </Link>*/}
                        {/*</Link>*/}

                        {/* <p> Forgot password?
                            <Link to="/Reset/ResetPassword">
                              <b > {"  Reset"}</b>
                            </Link>
                        </p> */}
                        {/*<p> Don't have an account?*/}
                        {/*    <Link to="/lecturer">*/}
                        {/*        {"  Register Here"}*/}
                        {/*    </Link>*/}
                        {/*</p>*/}



                    </div>

                    {message && (
                        <div  className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    {/* <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    /> */}
                </Form>
            </div>
                </div>


            </ModalBody>
            {/*<ModalFooter>*/}
            {/*    <Button variant="primary"*/}
            {/*            // onClick={props.handleSubmit}*/}
            {/*    >*/}
            {/*    Submit */}
            {/*    </Button>*/}
            {/*</ModalFooter>*/}
        </Modal>
        </>
    );
}
// function mapStateToProps(state) {
//     const { isLoggedIn } = state.auth;
//     const { message } = state.message;
//     return {
//         isLoggedIn,
//         message
//     };
// }

// export default connect(mapStateToProps)(Login);
// export default Login;
const mapStateToProps=(userState)=>{
    return {
        auth:userState,
        isopen:userState.auth.loginModelOpen
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        login:(loginState,history)=>{
            dispatch(LoginAuthAction(loginState,history));
        },
        closeModal:(open)=>{
            dispatch(OpenLoginAction(open));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);

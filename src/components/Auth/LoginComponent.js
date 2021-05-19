import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import Form, { form } from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button'
import Button from 'react-bootstrap/Button';
// import AuthService from '../services/auth.service';

import {connect} from 'react-redux';
import {login} from '../../store/actions/auth';

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login=(props)=>{
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const [message, setmessage] = useState("");

    const handleEmail=e=>setemail(e.target.value);
    const handlePassword=e=>setpassword(e.target.value);
    const handleLogin=e=>{
        e.preventDefaults();
        setmessage("");
        setloading(true);
        form.validateAll();
        const {dispatch,history}=props;
        if(checkBtn.context._errors.length===0){
            dispatch(login(email,password))
            .then(()=>{
                history.push("/profile");
                window.location.reload();
            })
            .catch(()=>{
                setloading(false);
            });
        }
        else{
            setloading(false);
        }
    }

    const {isLoggedIn,messages}=props;
    if(isLoggedIn){
        return <Redirect to="/profile"/>
    }

    return(
        <>
        <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" ,
        // zIndex:1
    }}
        >
        </div>
         <Modal show={props.isOpen} 
         onHide={props.closeModal}
        //  style={{zIndex:1}}
         >
            <ModalHeader closeButton>
                <ModalTitle>Login</ModalTitle>
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
                <div className="col-md-12">
                    <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form
                        onSubmit={handleLogin}
                        ref={(c) => {
                        form = c;
                        }}
                    >
                        <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={email}
                            onChange={handleEmail}
                            validations={[required]}
                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                            validations={[required]}
                        />
                        </div>

                        <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            disabled={loading}
                        >
                            {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </button>
                        </div>

                        {messages && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                            {messages}
                            </div>
                        </div>
                        )}
                        <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                            checkBtn = c;
                        }}
                        />
                    </Form>
                    </div>
                </div>
                
            </ModalBody>
            <ModalFooter>
                <Button variant="primary" onClick={props.handleSubmit}>
                Submit 
                </Button>
            </ModalFooter>
        </Modal>
        </>
    );
}
export default Login;

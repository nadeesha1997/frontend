import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
const Registration=()=>{
    return(
        <>
            <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
            ></div>
            <Modal show={props.isOpen} 
            onHide={props.closeModal}
            //  style={{zIndex:1}}
            >
                <ModalHeader closeButton>
                    <ModalTitle>Signup</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <nav className="navbar navbar-expand-sm  navbar-fixed-top " style={{padding:0, marginBottom:20,backgroundColor:'#31023e'}}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link">
                                    You are not logged in.<Button style={{
                                        width: 150,
                                        backgroundColor: '#440151',
                                    /*  marginTop: 5,*/
                                        marginLeft: 20,
                                        marginRight: 10
                                    }} type='submit'>

                                        <Link to="/Login"><b>Log In</b> </Link>
                                    </Button>
                                    {/*<span className="fa fa-sign-in"/> <Link to="./Login">Login</Link>*/}
                                </a>
                            {/* <a className="navbar-brand   mb-.2">
                                    <h6>You are not log in.</h6>
                                </a>*/}
                            </li>
                        </ul>
                    </nav>
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
export default Registration;
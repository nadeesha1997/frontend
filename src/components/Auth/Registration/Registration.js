import React from 'react';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
// import { Button } from "react-bootstrap/Button";
import  Button  from "react-bootstrap/Button";
import RegistrationComponent from './RegistrationComponent';
const Registration=(props)=>{
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
                   <RegistrationComponent/>
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
import React from 'react';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import RegistrationComponent from './RegistrationComponent';
const Registration=(props)=>{
    return(

        <Modal.Dialog>
            {/*<Modal.Header closeButton>*/}
            {/*    <Modal.Title>Modal title</Modal.Title>*/}
            {/*</Modal.Header>*/}

            <Modal.Body>
                <RegistrationComponent/>
            </Modal.Body>

            {/*<Modal.Footer>*/}
            {/*    <Button variant="secondary">Close</Button>*/}
            {/*    <Button variant="primary">Save changes</Button>*/}
            {/*</Modal.Footer>*/}
        </Modal.Dialog>


        // <RegistrationComponent/>
        // <>
        //     <div
        //     className="d-flex align-items-center justify-content-center"
        //     style={{ height: "100vh" }}
        //     ></div>
        //     <Modal show={props.isOpen}
        //     onHide={props.closeModal}
        //     //  style={{zIndex:1}}
        //     >
        //         <ModalHeader closeButton>
        //             <ModalTitle>Signup</ModalTitle>
        //         </ModalHeader>
        //         <ModalBody>
        //            <RegistrationComponent/>
        //         </ModalBody>
        //         <ModalFooter>
        //             <Button variant="primary" onClick={props.handleSubmit}>
        //             Submit
        //             </Button>
        //         </ModalFooter>
        //     </Modal>
        // </>

    );

}
export default Registration;
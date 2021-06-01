import React from 'react';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import RegistrationComponent from './RegistrationComponent';
import {LoginAuthAction, OpenLoginAction, OpenSignupAction} from "../../../store/actions/AuthAction";
import {connect} from "react-redux";
const Registration=(props)=>{
    const {isopen,closeModal}=props
    return(

        // <Modal.Dialog>
        //     {/*<Modal.Header closeButton>*/}
        //     {/*    <Modal.Title>Modal title</Modal.Title>*/}
        //     {/*</Modal.Header>*/}
        //
        //     <Modal.Body>
        //         <RegistrationComponent/>
        //     </Modal.Body>
        //
        //     {/*<Modal.Footer>*/}
        //     {/*    <Button variant="secondary">Close</Button>*/}
        //     {/*    <Button variant="primary">Save changes</Button>*/}
        //     {/*</Modal.Footer>*/}
        // </Modal.Dialog>


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

        <Modal show={isopen}
                onHide={()=>closeModal(false)}
               // style={"zIndex:1"}
                >
            <ModalHeader closeButton>
                <ModalTitle>LSMS-Signup</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <RegistrationComponent/>
            </ModalBody>

            {/*<Modal.Footer>*/}
            {/*    <Button variant="secondary">Close</Button>*/}
            {/*    <Button variant="primary">Save changes</Button>*/}
            {/*</Modal.Footer>*/}
        </Modal>

    );

}
// export default Registration;
const mapStateToProps=(userState)=>{
    return {
        // auth:userState,
        isopen:userState.auth.signupModalOpen
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        closeModal:(open)=>{
            dispatch(OpenSignupAction(open));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Registration);

import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import '../../css/modal.css';
import {Button} from "reactstrap";

const AddHall=()=> {
    return (
        <Modal show={true}>
            <ModalHeader closeButton>
                <ModalTitle>LSMS-Add Lecture Hall</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="page1">

                                    <div>
                                        <div className="sub">
                                            <label> Name: </label>
                                            <input
                                                style={{width:350}}
                                                placeholder="Name" name="Name" className="form-control"
                                                   value="" />
                                        </div>
                                        {/*<div className="sub">*/}
                                        {/*    <label> Building: </label>*/}
                                        {/*    <input*/}

                                        {/*        style={{width:350}}*/}
                                        {/*        placeholder="Building" name="Building" className="form-control"*/}
                                        {/*           value=""    />*/}
                                        {/*</div>*/}
                                        <div className="sub">
                                            <label> Building Id: </label>
                                            <input
                                                style={{width:350}}
                                                placeholder="BuildingId" name="BuildingId" className="form-control"
                                                   value=""
                                                  />
                                        </div>

                                        <button className="btn btn-success"style={{marginLeft: "120px",backgroundColor:'#2d0b34',marginBottom:10,marginTop:10,width:100}} >Save</button>
                                        <button className="btn btn-danger"  style={{marginLeft: "10px",backgroundColor:'#2d0b34',marginBottom:10,marginTop:10,width:100}}>Cancel</button>
                                    </div>
                                </div>

            </ModalBody>


        </Modal>

    );
}


export default AddHall

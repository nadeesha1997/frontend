
import React from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import '../../css/modal.css';
import {Button, Input} from "reactstrap";


const ScheduleOnline=()=>{

    return(

        <Modal show={true}>
            <ModalHeader closeButton>
                <ModalTitle>LSMS-Schedule a Online Lecture</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="page1">
                    <div>
                            <div className="sub">
                                <label htmlFor="module">Module:</label>
                                <Input
                                    placeholder="Module"
                                    style={{width:390}}
                                    type="text"
                                    className="form-control"
                                    name="module"
                                    value=""

                                />
                            </div>

                            <div className="sub">
                                <label htmlFor="date">Date:</label>
                                <Input
                                    placeholder="Date"
                                    style={{width:390}}
                                    type="text"
                                    className="form-control"
                                    name="date"
                                    value=""

                                />
                            </div>
                            <div className="sub">
                                <label htmlFor="starttime">Start Time:</label>
                                <Input
                                    placeholder="Start Time"
                                    style={{width:390}}
                                    type="text"
                                    className="form-control"
                                    name="module"

                                    readOnly
                                />
                            </div>
                            <div className="sub">
                                <label

                                    htmlFor="endtime">End Time:</label>
                                <Input
                                    placeholder="End Time"
                                    style={{width:390}}
                                    type="text"
                                    className="form-control"
                                    name="module"

                                    readOnly
                                />
                            </div>
                        <div className="sub">
                            <label htmlFor="module">Meting ID:</label>
                            <Input
                                placeholder="Meting ID"
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="module"
                                value=""

                            />
                        </div>
                        <div className="sub">
                            <label htmlFor="module">Password:</label>
                            <Input
                                placeholder="Password"
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="module"
                                value=""

                            />
                        </div>
                        <div className="sub">
                            <label htmlFor="module">Zoom Link:</label>
                            <Input
                                placeholder="Zoom Link"
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="module"
                                value=""

                            />
                        </div>



                            <div className="form-group">
                                <Button
                                    // type="submit"
                                    style={{width:100,height:40,backgroundColor:'#2d0b34',marginBottom:15,marginLeft:130,marginTop:15}}
                                    className="btn btn-primary btn-block"
                                    name="submit"

                                >SUBMIT</Button>
                            </div>
                    </div></div>

            </ModalBody>


        </Modal>

    );}

export default ScheduleOnline;
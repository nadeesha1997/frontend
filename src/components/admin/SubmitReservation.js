import React from "react";
import {connect} from "react-redux";
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import TimeField from 'react-simple-timefield';
import '../../css/modal.css';

import {
    AddSessionAction,
    DeleteSessionAction,
    openSubmitModalAction,
    SetEndTimeAction
} from "../../store/actions/ModuleDropAction";
import {Button, Input} from "reactstrap";
import {Form} from "react-bootstrap";
import moment from "moment";
function SubmitReservation(props) {
    let {sessionsState,submitSession,openMod,closeMod,setEndTime,mState}=props;
    return(<>
        <Modal show={sessionsState.openSubmitModal}
               onHide={()=>closeMod()}>
            <ModalHeader closeButton>
                <ModalTitle>LSMS-Schedule a lecture</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="page1">
                <div>
                    <Form>
                        <div className="sub">
                            <label htmlFor="module">Module:</label>
                            <Input
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="module"
                                value={sessionsState.Subject.name}
                                readOnly
                            />
                        </div>
                        <div className="sub">
                            <label htmlFor="date">Date:</label>
                            <Input
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="date"
                                value={moment(sessionsState.StartDateTime).format("YYYY-MM-DD")}
                                readOnly
                            />
                        </div>
                        <div className="sub">
                            <label htmlFor="starttime">Start Time:</label>
                            <Input
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="module"
                                value={moment(sessionsState.StartDateTime).format("HH:mm")}
                                readOnly
                            />
                        </div>
                        <div className="sub">
                            <label

                                htmlFor="endtime">End Time:</label>
                            {/*<Input*/}
                            {/*    type="time"*/}
                            {/*    className="form-control"*/}
                            {/*    name="endtime"*/}
                            {/*    // value={email}*/}
                            {/*    readonly*/}
                            {/*/>*/}
                            <TimeField style={{width:80}}
                                value={moment(sessionsState.EndDateTime).format("HH:mm")}                     // {String}   required, format '00:00' or '00:00:00'
                                onChange={(event) => {setEndTime(mState,event.target.value);console.log(event.target.value);}}      // {Function} required
                                input={<input type="text" />} // {Element}  default: <input type="text" />
                                colon=":"                        // {String}   default: ":"
                                showSeconds={false}                      // {Boolean}  default: false
                                name="endtime"
                            />
                        </div>
                        <div className="form-group">
                            <Button
                                // type="submit"
                                style={{width:100,height:40,backgroundColor:'#2d0b34',marginBottom:15,marginLeft:130,marginTop:15}}
                                className="btn btn-primary btn-block"
                                name="submit"
                                onClick={()=>{
                                    submitSession(mState);
                                    closeMod();
                                }}
                                >SUBMIT</Button>
                        </div>
                    </Form>
                </div></div>
            </ModalBody>

        </Modal>
    </>)
}
const mapStateToProps=(moduleDropstate)=>{
    return {
        sessionsState:moduleDropstate.moduleDrop,
        mState:moduleDropstate
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        submitSession:(state)=>{
            dispatch(AddSessionAction(state));
        },
        closeMod:()=>{
            dispatch(openSubmitModalAction(false));
        },
        openMod:()=>{
            dispatch(openSubmitModalAction(true));
        },
        setEndTime:(moduleDropState,EndTime)=>{
            dispatch(SetEndTimeAction(moduleDropState,EndTime))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SubmitReservation);

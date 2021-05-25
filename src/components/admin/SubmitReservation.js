import React from "react";
import {connect} from "react-redux";
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import TimeField from 'react-simple-timefield';
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
               onHide={()=>closeMod(false)}>
            <ModalHeader closeButton>
                <ModalTitle>Schedule lecture</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="module">Module:</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="module"
                                value={sessionsState.Subject.name}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="date"
                                value={moment(sessionsState.StartDateTime).format("YYYY-MM-DD")}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="starttime">Start Time:</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="module"
                                value={moment(sessionsState.StartDateTime).format("HH:mm")}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endtime">End Time:</label>
                            {/*<Input*/}
                            {/*    type="time"*/}
                            {/*    className="form-control"*/}
                            {/*    name="endtime"*/}
                            {/*    // value={email}*/}
                            {/*    readonly*/}
                            {/*/>*/}
                            <TimeField
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
                                className="btn btn-primary"
                                name="submit"
                                onClick={()=>submitSession(mState)}
                                >SUBMIT</Button>
                        </div>
                    </Form>
                </div>
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

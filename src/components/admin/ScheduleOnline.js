import React,{useEffect, useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import '../../css/modal.css';
import {Button, Input} from "reactstrap";
import {connect} from "react-redux";
import { AddOnlineSessionAction, SetDataAction } from '../../store/actions/OnlineSessionAction';
import { GetEnrolledModulesAction } from '../../store/actions/SelectedUserAction';


const ScheduleOnline=(props)=>{
    let {setdata,addSession,user,getModules,modules,baseState}=props;
    useEffect(()=>{
        getModules(user.id);
    },[user]);
    const [module, setModule] = useState(0);
    const [date, setDate] = useState(new Date());
    const [startTime, setstartTime] = useState(new Date());
    const [endTime, setendTime] = useState(new Date());
    const [meetingId, setMeetingId] = useState("");
    const [password, setPassword] = useState("");
    const [link, setLink] = useState("");
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
                                <select
                                    // placeholder="Module"
                                    style={{width:390}}
                                    type="text"
                                    className="form-control"
                                    name="module"
                                    value={module}
                                    onChange={e=>{setModule(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}
                                >
                                    <option value="1">Select Module</option>
                                    {mapModulesToOptions(modules)}
                                </select>
                            </div>

                            <div className="sub">
                                <label htmlFor="date">Date:</label>
                                <Input
                                    placeholder="Date"
                                    style={{width:390}}
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    value={date}
                                    onChange={e=>{setDate(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link);}}

                                />
                            </div>
                            <div className="sub">
                                <label htmlFor="starttime">Start Time:</label>
                                <Input
                                    placeholder="Start Time"
                                    style={{width:390}}
                                    type="time"
                                    className="form-control"
                                    name="starttime"
                                    value={startTime}
                                    onChange={e=>{setstartTime(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}
                                />
                            </div>
                            <div className="sub">
                                <label

                                    htmlFor="endtime">End Time:</label>
                                <Input
                                    placeholder="End Time"
                                    style={{width:390}}
                                    type="time"
                                    className="form-control"
                                    name="endtime"
                                    value={endTime}
                                    onChange={e=>{setendTime(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link);}}
                                />
                            </div>
                        <div className="sub">
                            <label htmlFor="meetingId">Meeting ID:</label>
                            <Input
                                placeholder="Meting ID"
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="meetingId"
                                value={meetingId}
                                onChange={e=>{setMeetingId(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}

                            />
                        </div>
                        <div className="sub">
                            <label htmlFor="password">Password:</label>
                            <Input
                                placeholder="Password"
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={e=>{setPassword(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}

                            />
                        </div>
                        <div className="sub">
                            <label htmlFor="link">Zoom Link:</label>
                            <Input
                                placeholder="Zoom Link"
                                style={{width:390}}
                                type="text"
                                className="form-control"
                                name="link"
                                value={link}
                                onChange={e=>{setLink(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}

                            />
                        </div>



                            <div className="form-group">
                                <Button
                                    // type="submit"
                                    style={{width:100,height:40,backgroundColor:'#2d0b34',marginBottom:15,marginLeft:130,marginTop:15}}
                                    className="btn btn-primary btn-block"
                                    name="submit"
                                    onClick={()=>{
                                        setdata(module,date,startTime,endTime,meetingId,password,link);
                                        addSession(baseState);
                                        console.log(module)
                                    }}

                                >SUBMIT</Button>
                            </div>
                    </div></div>

            </ModalBody>


        </Modal>

    );}

// export default ScheduleOnline;
const mapStateToProps=(userState)=>{
    return {
        user:userState.auth.user.userDetails,
        modules:userState.selectedUser.enrolledModules,
        baseState:userState,
        loading:userState.selectedUser.enrolledModules,
        response:userState.timetable.userSessions
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        setdata:(module,date,sTime,eTime,meetingId,password,link)=>{
            dispatch(SetDataAction(module,date,sTime,eTime,meetingId,password,link));
        },
        addSession:(state)=>{
            dispatch(AddOnlineSessionAction(state));
        },
        getModules:(id)=>{
            dispatch(GetEnrolledModulesAction(id))
        }
    }
};

const mapModulesToOptions=(modules)=>{
    let modlist=[...modules];
    let options=modlist.map(module=>{
        return(
            <>
            <option value={module.subject.id}>{module.subject.code}-{module.subject.name}</option>
            </>
        )
    });
    return options;
}
export default connect(mapStateToProps,mapDispatchToProps)(ScheduleOnline);
import React,{useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import TimeField from 'react-simple-timefield';
import moment from "moment"

import "react-datepicker/dist/react-datepicker.css";

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import '../../css/modal.css';
import {Button, Input} from "reactstrap";
import {connect} from "react-redux";
import { AddOnlineSessionAction, SetDataAction ,ModelOpenAction, SetModuleAction, SetDateAction, SetStartTimeAction, SetEndTimeAction, SetMeetingIdAction, SetPasswordAction, SetLinkAction} from '../../store/actions/OnlineSessionAction';
import { GetEnrolledModulesAction } from '../../store/actions/SelectedUserAction';


const ScheduleOnline=(props)=>{
    let {setdata,addSession,user,getModules,modules,baseState,open,openModal,moduleSet,online,dateSet,sTimeSet,eTimeSet,meetingIdSet,passwordSet,linkSet}=props;
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

        <Modal show={open}

               onHide={()=>openModal(false)}
        >
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
                                value={online.module}
                                // onChange={e=>{setModule(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}
                                // onBlur={e=>setModule(e.target.value)}
                                onChange={e=>moduleSet(e.target.value)}
                            >
                                <option value="1">Select Module</option>
                                {mapModulesToOptions(modules)}
                            </select>
                        </div>

                        <div className="sub">
                            <label htmlFor="date">Date:</label>
                            {/* <Input
                                placeholder="Date"
                                style={{width:390}}
                                type="date"
                                className="form-control"
                                name="date"
                                value={online.date}
                                // onChange={e=>{setDate(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link);}}
                                // onBlur={e=>setDate(e.target.value)}
                                onChange={e=>dateSet(e.target.value)}
                            /> */}
                            <DatePicker selected={online.date} onChange={(date) => dateSet(date)} />
                        </div>
                        <div className="sub">
                            <label htmlFor="starttime">Start Time:</label>
                            {/* <Input
                                placeholder="Start Time"
                                style={{width:390}}
                                type="time"
                                className="form-control"
                                name="starttime"
                                value={online.startTime}
                                // onChange={e=>{setstartTime(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}
                                // onBlur={e=>setstartTime(e.target.value)}
                                onChange={e=>sTimeSet(e.target.value)}
                            /> */}
                            <TimeField style={{width:80}}
                                value={online.startTime}                     // {String}   required, format '00:00' or '00:00:00'
                                onChange={(event) =>sTimeSet(event.target.value)}      // {Function} required
                                input={<input type="text" />} // {Element}  default: <input type="text" />
                                colon=":"                        // {String}   default: ":"
                                showSeconds={false}                      // {Boolean}  default: false
                                name="starttime"
                            />
                        </div>
                        <div className="sub">
                            <label

                                htmlFor="endtime">End Time:</label>
                            {/* <Input
                                placeholder="End Time"
                                style={{width:390}}
                                type="time"
                                className="form-control"
                                name="endtime"
                                value={online.endTime}
                                // onChange={e=>{setendTime(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link);}}
                                // onBlur={e=>setendTime(e.target.value)}
                                onChange={e=>eTimeSet(e.target.value)}
                            /> */}
                            <TimeField style={{width:80}}
                                value={online.endTime}                     // {String}   required, format '00:00' or '00:00:00'
                                onChange={(event) =>eTimeSet(event.target.value)}      // {Function} required
                                input={<input type="text" />} // {Element}  default: <input type="text" />
                                colon=":"                        // {String}   default: ":"
                                showSeconds={false}                      // {Boolean}  default: false
                                name="endtime"
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
                                value={online.meetingId}
                                // onChange={e=>{setMeetingId(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}
                                // onBlur={e=>setMeetingId(e.target.value)}
                                onChange={(e)=>meetingIdSet(e.target.value)}

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
                                value={online.password}
                                // onChange={e=>{setPassword(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}
                                // onBlur={e=>setPassword(e.target.value)}
                                onChange={e=>passwordSet(e.target.value)}

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
                                value={online.link}
                                // onChange={e=>{setLink(e.target.value);setdata(module,date,startTime,endTime,meetingId,password,link)}}
                                // onBlur={e=>setLink(e.target.value)}
                                // onMouseLeave={e=>setLink(e.target.value)}
                                onChange={e=>linkSet(e.target.value)}
                            />
                        </div>



                        <div className="form-group">
                            <Button
                                // type="submit"
                                style={{width:100,height:40,backgroundColor:'#2d0b34',marginBottom:15,marginLeft:130,marginTop:15}}
                                className="btn btn-primary btn-block"
                                name="submit"
                                onClick={()=>{
                                    // setdata(module,date,startTime,endTime,meetingId,password,link);
                                    addSession(baseState);
                                    // console.log(link)
                                    console.log(baseState.online);
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
        response:userState.timetable.userSessions,
        open:userState.online.modalOpen,
        online:userState.online
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
        },
        openModal:(open)=>{
            dispatch(ModelOpenAction(open))
        },
        moduleSet:(id)=>{
            dispatch(SetModuleAction(id));
        },
        dateSet:(date)=>{
            dispatch(SetDateAction(date))
        },
        sTimeSet:(time)=>{
            dispatch(SetStartTimeAction(time))
        },
        eTimeSet:(time)=>{
            dispatch(SetEndTimeAction(time))
        },
        meetingIdSet:(id)=>{
            dispatch(SetMeetingIdAction(id))
        },
        passwordSet:(password)=>{
            dispatch(SetPasswordAction(password))
        },
        linkSet:(link)=>{
            dispatch(SetLinkAction(link))
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
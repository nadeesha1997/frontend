import React,{useEffect} from 'react'
import Calendar from "../Calendar";
import {GetEnrolledModulesAction} from "../../store/actions/SelectedUserAction";
import {SetUserSessionsAction} from "../../store/actions/TimeTableAction";
import {connect} from "react-redux";
import moment from "moment";

function StudentTimeTable(props) {
    let {user,sessions,userModules,getUserModules,selectUserSessions,userSessions}=props;
    useEffect(()=>{
        getUserModules(user.id);
    },[]);
    useEffect(()=>{
        // if(sessions)
        selectUserSessions(sessions,userModules);
    },[sessions,userModules]);
    return (
        <div className="page">
            <Calendar/>
            <br/>
            <table className = "table table-striped table-bordered">

                <thead>
                <tr>
                    <th> Time Period</th>
                    <th> Module Code</th>
                    <th> Module Name</th>
                    <th> Venue</th>
                </tr>
                </thead>
                <tbody>
                {/*{mappedSessions(userSessions)}*/}
                {checkAvailable(times,userSessions)}
                {/*{returnSessions(userSessions[0])}*/}
                </tbody>
            </table>
        </div>

    )
}

// export default StudentTimeTable
const mapStateToProps=(userState)=>{
    return {
        sessions:userState.module.sessions,
        user:userState.auth.user.userDetails,
        userModules:userState.selectedUser.enrolledModules,
        userSessions:userState.timetable.userSessions
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        // logout:(history)=>{
        //     dispatch(LogoutAuthAction(history));
        // },
        getUserModules:(id)=>{
            dispatch(GetEnrolledModulesAction(id));
        },
        selectUserSessions:(sessions,usermodules)=>{
            dispatch(SetUserSessionsAction(sessions,usermodules))
        }
    }
};

const checkAvailable=(time,sessions)=>{
    const timeList=[...time];
    const sessionsList=[...sessions]
    const timeInDate=(dateTime)=>moment(dateTime).format('HH:mm:ss')
        timeList.forEach(time=>{
            // if((mod.startDateTime<=moment(startDateTime).format("YYYY-MM-DD[T]HH:mm:ss"))&&((mod.endDateTime>=moment(endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")))&&mod.hallId==hallid){
            //     setmodule(mod);
            //     setreserved(true);
            //     setpermitted(mod.permitted);
            // }
            // else{
            //     setreserved(false);
            // }
            let val=sessionsList.forEach(s=>{
                if(timeInDate(s.startDateTime)<=time.startTime&&timeInDate(s.endDateTime)>=time.endTime){
                    // console.log(s.startDateTime);
                    // console.log(timeInDate(s.startDateTime));
                    // console.log(time.startTime);
                    // console.log(s.endDateTime);
                    // console.log(timeInDate(s.endDateTime));
                    // console.log(time.endTime);
                    // console.log(s)
                    returnSessions(s);
                }
            })
        });
};
const returnSessions=(sess)=>{
    // console.log(moment(sess.startDateTime).format('HH:mm'));

        return(
            <>
                <tr>
                    <td>
                        {moment(sess.startDateTime).format('HH:mm')} - {moment(sess.endDateTime).format('HH:mm')}
                    </td>
                    <td>
                        {sess.subject.code}
                    </td>
                    <td>
                        {sess.subject.name}
                    </td>
                    <td>
                        {sess.hall.name}
                    </td>
                </tr>
            </>
        )
};

const mappedSessions=(sessios)=>{
    let sessionlist=[...sessios];
    let returnSessions=sessionlist.map(sess=>{
        return(
            <>
                <tr>
                    <td>
                        {moment(sess.startDateTime).format('HH:mm')} - {moment(sess.endDateTime).format('HH:mm')}
                    </td>
                    <td>
                        {sess.subject.code}
                    </td>
                    <td>
                        {sess.subject.name}
                    </td>
                    <td>
                        {sess.hall.name}
                    </td>
                </tr>
            </>
        )
    })
    return returnSessions;
};
const times=[
    {startTime:"07:30:00",endTime:"08:30:00"},
    {startTime:"08:30:00",endTime:"09:30:00"},
    {startTime:"09:30:00",endTime:"10:30:00"},
    {startTime:"10:30:00",endTime:"11:30:00"},
    {startTime:"11:30:00",endTime:"12:30:00"},
    {startTime:"12:30:00",endTime:"13:30:00"},
    {startTime:"13:30:00",endTime:"14:30:00"},
    {startTime:"14:30:00",endTime:"15:30:00"},
    {startTime:"15:30:00",endTime:"16:30:00"},
    {startTime:"16:30:00",endTime:"17:30:00"},
    {startTime:"17:30:00",endTime:"18:30:00"},
    {startTime:"18:30:00",endTime:"19:30:00"},
    {startTime:"19:30:00",endTime:"20:30:00"}
];

export default connect(mapStateToProps,mapDispatchToProps)(StudentTimeTable);

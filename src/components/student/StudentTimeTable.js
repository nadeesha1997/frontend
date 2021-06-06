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
                {mappedSessions(userSessions)}
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
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentTimeTable);

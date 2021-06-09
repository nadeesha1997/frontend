// import React, { Component } from 'react'
// import Calendar from "../Calendar";
// import ThirdNav from "../ThirdNav";

// class OnlineTimeTable extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <div><ThirdNav/>

//                 <div className="page">

//                     <div className="locate2" > <Calendar/></div>
//                     <br/>
//                     <h3>Find Your Online Lecture Schedule...</h3>
//                     <br/>
//                     <table className = "table table-striped table-bordered">

//                         <thead>
//                         <tr>
//                             <th> Time Period</th>
//                             <th> Module Code</th>
//                             <th> Module Name</th>
//                             <th> Meeting ID</th>
//                             <th> Password</th>
//                             <th> Zoom link</th>

//                         </tr>
//                         </thead>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// export default OnlineTimeTable

import SecondNav from "../SecondNav";
import ThirdNav from "../ThirdNav";
import React, { useEffect } from "react";
import Calendar from "../Calendar";
import {Button} from "react-bootstrap";
import { connect } from 'react-redux'
import { DeleteOnlineSessionAction, GetDailySessionsAction, ModelOpenAction, setDailySessionsAction, } from "../../store/actions/OnlineSessionAction";
import {GetEnrolledModulesAction} from "../../store/actions/SelectedUserAction"
import moment from "moment";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export const OnlineTimeTable = (props) => {
    const {openModal,getDailySessions,getUserModules,setDailySessions,dailySessions,userModules,user,date,dailyUserSessions,successMessage,deleteSession}=props;
    // useEffect(()=>{
    //     getDailySessions(date);
    // },[date]);
    useEffect(()=>{
        getUserModules(user.id);
    },[user]);
    useEffect(()=>{
        if(dailySessions&&userModules){
            setDailySessions(dailySessions,userModules)
        }
        // console.log("1");
    },[dailySessions,userModules])
    useEffect(()=>{
        openModal(false);
        // getDailySessions(date);
        // setDailySessions(dailySessions,userModules);
        // console.log("2");
    },[successMessage])
    return (
        <>
            <div>

                <ThirdNav/>
                <div className="page">
                    <div className="main">
                        <table><td><tr>
                            <Calendar/></tr>
                        {/*    <tr>
                                <Button style={{width:180,backgroundColor:'#440151',marginTop:50,marginLeft:90,marginRight:20,marginBottom:150}}
                                    // type='submit'
                                        onClick={()=>openModal(true)}
                                >

                                     <Link to="./Register/student">
                                    <b> Schedule a Online Lecture</b>
                                     </Link>
                                </Button></tr>*/}</td>
                           <td>

                               <h3 style={{marginLeft:-190}}>Your scheduled Online Lectures...</h3>
                               <br/>
                               <div style={{marginLeft:30}}>

                                   <table className = "table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th> Time Period</th>
                                    <th> Module Code</th>
                                    <th> Module Name</th>
                                    <th> Meeting ID</th>
                                    <th> Password</th>
                                    <th> Zoom link</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {dailySesionsList(dailyUserSessions,deleteSession)}
                                </tbody>
                            </table></div></td>
                        </table>

                    </div>
                </div>

            </div>
            {/* <ScheduleOnline/> */}
        </>
    )
}

const dailySesionsList=(sessions,deleteFunc)=>{
    let sessionsList=[...sessions];
    let sortedList=sessionsList.sort((a,b)=>(a.startTime>b.startTime)?1:-1)
    let mappedSessions=sortedList.map(sess=>{
        return(
            <>
            <tr key={sess.id}>
                <td>{moment(sess.startTime).format('HH:mm')}-{moment(sess.endTime).format('HH:mm')}</td>
                <td>{sess.subject.code}</td>
                <td>{sess.subject.name}</td>
                <td>{sess.meetingId}</td>
                <td>{sess.password}</td>
                <td>
                    <textarea readOnly>{sess.link}</textarea>
                    {/* <button onClick={navigator.clipboard.writeText(sess.link)}>copy</button> */}
                    <CopyToClipboard text={sess.link}><span>Copy</span></CopyToClipboard>
                </td>
                {/*<td><button onClick={()=>deleteFunc(sess.id)}>Delete</button></td>*/}
            </tr>
            </>
        )
    })
    return mappedSessions;
}

const mapStateToProps = (state) => ({
    dailySessions:state.online.dailySessions,
    userModules:state.selectedUser.enrolledModules,
    user:state.auth.user.userDetails,
    date:state.module.date,
    dailyUserSessions:state.online.dailyUserSesions,
    successMessage:state.online.successMessage
})

const mapDispatchToProps =(dispatch)=> {
    return{
        openModal:(open)=>{
            dispatch(ModelOpenAction(open))
        },
        getDailySessions:(date)=>{
            dispatch(GetDailySessionsAction(date))
        },
        getUserModules:(id)=>{
            dispatch(GetEnrolledModulesAction(id))
        },
        setDailySessions:(daily,enrolled)=>{
            dispatch(setDailySessionsAction(daily,enrolled))
        },
        deleteSession:(id)=>{
            dispatch(DeleteOnlineSessionAction(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineTimeTable)
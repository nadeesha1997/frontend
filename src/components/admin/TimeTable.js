import React, {useEffect, useState} from 'react'
import { connect ,useSelector,useDispatch} from 'react-redux'
import {GetHallsAction} from "../../store/actions/TimeTableAction";
import HallList from "./HallList";
import LecTimes from "./LecTimes";
import "../../css/Table.css"
import SubmitReservation from "./SubmitReservation";
import DeleteSessionModal from "./DeleteSessionModal";
import { GetHodsAction } from '../../store/actions/MailAction';
import LoopCircleLoading from '../Loading';
import { GetDailyModulesAction } from '../../store/actions/DailyModuleAction';

export const TimeTable = (props) => {
    let timetableState=useSelector(state=> state)
    const {halls,date,getHalls,loading,getMails}=props;
    const  dispatch = useDispatch()
    const [tableStyle,settableStyle]=useState({
        display: "grid",
        gridTemplateColumns: "repeat(17, 1fr)",
        backgroundColor: "#a998bd",
        gridColumnGap: "0.01em",
        gridRowGap: "0.1em",
        marginTop: "0px"
    });
    useEffect(()=>{
        dispatch(GetDailyModulesAction(timetableState.module.date))
    },[]);
    useEffect(()=>{
        setStyles(timetableState.timetable.halls.length);
    },[timetableState.timetable.halls])
    const setStyles=(length)=>{
        let newLength=length+1
        let val="repeat("+newLength+", 1fr)";
        settableStyle({...tableStyle,gridTemplateColumns: val})
    }
    return (
        <>{timetableState.timetable.loading?<LoopCircleLoading/>:
            <>
            <div>
            <div
                className="grid-container"
                style={tableStyle}>
                <div className="grid-item">Time</div>
                <HallList/>
                <LecTimes/>
            </div>
        </div>
        <SubmitReservation/>
        <DeleteSessionModal/>
            </>
        }
        
    </>
    )
};


const mapStateToProps=(state)=>{
    return {
        halls:state.timetable.halls,
        loading:state.timetable.loading,
        date:state.module.date
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        getHalls:()=>{
            dispatch(GetHallsAction());
        },
        getMails:()=>{
            dispatch(GetHodsAction());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)

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
// import React, {useEffect, useState} from 'react'
// import { connect } from 'react-redux'
// import {GetHallsAction} from "../../store/actions/TimeTableAction";
// import HallList from "./HallList";
// import LecTimes from "./LecTimes";
// import "../../css/Table.css"
// import SubmitReservation from "../admin/SubmitReservation";
// import DeleteSessionModal from "../admin/DeleteSessionModal";
// import { GetHodsAction } from '../../store/actions/MailAction';
// import LoopCircleLoading from '../Loading';

// export const TimeTable = (props) => {
//     const {halls,date,getHalls,loading,getHods}=props;
//     //    useEffect(()=>getHods(),[]);
//     const [tableStyle,settableStyle]=useState({
//         display: "grid",
//         gridTemplateColumns: "repeat(17, 1fr)",
//         backgroundColor: "#a998bd",
//         gridColumnGap: "0.01em",
//         gridRowGap: "0.1em",
//         marginTop: "0px"
//     });
 
//     useEffect(()=>{
//         setStyles(halls.length);
//     },[halls])
//     const setStyles=(length)=>{
//         let val="repeat("+length+1+", 1fr)";
//         settableStyle({...tableStyle,gridTemplateColumns: val})
//     }
//     return (
//         <>
//         {loading?<LoopCircleLoading/>:
//         <>
//         <>
//             <div>
//                 <div
//                     className="grid-container"
//                     style={tableStyle}>
//                     <div className="grid-item">Time</div>
//                     <HallList/>
//                     <LecTimes/>
//                 </div>
//             </div>
//             <SubmitReservation/>
//             <DeleteSessionModal/>
//         </>
//         </>
//         }
//         </>
//     )
// };



// const mapStateToProps = (state) => ({
//     halls:state.timetable.halls?state.timetable.halls:0,
//     loading:state.timetable.loading,
//     date:state.module.date
// });

// const mapDispatchToProps =(dispatch)=> {
//     return {
//         getHalls:()=>{
//             dispatch(GetHallsAction());
//         },
//         getHods:()=>{
//             dispatch(GetHodsAction())
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)

// const times=[
//     {startTime:"07:30:00",endTime:"08:30:00"},
//     {startTime:"08:30:00",endTime:"09:30:00"},
//     {startTime:"09:30:00",endTime:"10:30:00"},
//     {startTime:"10:30:00",endTime:"11:30:00"},
//     {startTime:"11:30:00",endTime:"12:30:00"},
//     {startTime:"12:30:00",endTime:"13:30:00"},
//     {startTime:"13:30:00",endTime:"14:30:00"},
//     {startTime:"14:30:00",endTime:"15:30:00"},
//     {startTime:"15:30:00",endTime:"16:30:00"},
//     {startTime:"16:30:00",endTime:"17:30:00"},
//     {startTime:"17:30:00",endTime:"18:30:00"},
//     {startTime:"18:30:00",endTime:"19:30:00"},
//     {startTime:"19:30:00",endTime:"20:30:00"}
// ];
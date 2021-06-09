import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {GetHallsAction} from "../../store/actions/TimeTableAction";
import HallList from "./HallList";
import LecTimes from "./LecTimes";
import "../../css/Table.css"
import SubmitReservation from "../admin/SubmitReservation";
import DeleteSessionModal from "../admin/DeleteSessionModal";
import { GetHodsAction } from '../../store/actions/MailAction';
import LoopCircleLoading from '../Loading';

export const TimeTableLecturer = (props) => {
    const {halls,date,getHalls,loading,getMails}=props;
    const [tableStyle,settableStyle]=useState({
        display: "grid",
        gridTemplateColumns: "repeat(17, 1fr)",
        backgroundColor: "#a998bd",
        gridColumnGap: "0.01em",
        gridRowGap: "0.1em",
        marginTop: "0px"
    });
    useEffect(()=>{
        getMails();
    },[]);
    useEffect(()=>getHalls(),[]);
    useEffect(()=>{
        setStyles(halls.length);
    },[halls])
    const setStyles=(length)=>{
        let newLength=length+1;
        let val="repeat("+newLength+", 1fr)";
        settableStyle({...tableStyle,gridTemplateColumns: val})
    }
    return (
        <>
        {loading?<LoopCircleLoading/>:
        <>
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
        </>
        }
        </>
    )
};



const mapStateToProps = (state) => ({
    halls:state.timetable.halls,
    loading:state.timetable.loading,
    date:state.module.date
})

const mapDispatchToProps =(dispatch)=> {
    return {
        getHalls:()=>{
            dispatch(GetHallsAction());
        },
        getMails:()=>{
            dispatch(GetHodsAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeTableLecturer)

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
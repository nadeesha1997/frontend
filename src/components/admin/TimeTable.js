import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {GetHallsAction} from "../../store/actions/TimeTableAction";
import HallList from "./HallList";
import LecTimes from "./LecTimes";
import "../../css/Table.css"
import SubmitReservation from "./SubmitReservation";
import DeleteSessionModal from "./DeleteSessionModal";

export const TimeTable = (props) => {
    const {halls,date,getHalls,loading}=props;
    const [tableStyle,settableStyle]=useState({
        display: "grid",
        gridTemplateColumns: "repeat(15, 1fr)",
        backgroundColor: "#a998bd",
        gridColumnGap: "0.01em",
        gridRowGap: "0.1em",
        marginTop: "0px"
    });
    // useEffect(()=>{
    //     getHalls();
    // },[])
    // useEffect(()=>{
    //     setStyles(halls.length);
    // },[halls])
    const setStyles=(length)=>{
        let val="repeat("+length+1+", 1fr)";
        settableStyle({...tableStyle,gridTemplateColumns: val})
    }
    return (
        <>
            <div>
                <div
                    className="grid-container"
                    style={tableStyle}>
                    <div className="grid-item">Hall</div>
                    <HallList/>
                    <LecTimes/>

                </div>
            </div>
            <SubmitReservation/>
            <DeleteSessionModal/>
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
        }
    }
}

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
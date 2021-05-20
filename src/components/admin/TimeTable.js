import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import ModuleDrop from "./ModuleDrop";
import {GetHallsAction} from "../../store/actions/TimeTableAction";
import axios from "axios";
import HallList from "./HallList";
import LecTimes from "./LecTimes";
import "../../css/Table.css"

export const TimeTable = (props) => {
    const {halls,date,getHalls,loading}=props;

    useEffect(()=>{

    })
    // const lecTimes=halls&&times.map((time)=>{
    //     const mappedHalls=halls.map(hall=>{
    //         return(<>
    //             <div className="grid-item">
    //                 <ModuleDrop
    //                     hallid={hall.id}
    //                     startTime={time.startTime}
    //                     EndTime={time.endTime}
    //                     date={date}
    //                     // sessions={this.state.sessions}
    //                     // rerender={this.rerender}
    //                 />
    //             </div>
    //         </>);
    //     })
    //     return(
    //     <>
    //         <div className="grid-item">{time.startTime}</div>
    //         {mappedHalls}
    //     </>
    //         );
    // })
    // const hallList=halls&&halls.map(hall=>{
    //     return(
    //         <div className="grid-item" hallid={hall.id}>{hall.name}</div>
    //     )
    // })
    return (
        <div>
            <div className="grid-container">
                <div className="grid-item">Time</div>
                <HallList/>
                <LecTimes/>
                </div>
        </div>
        // <div>
        //     {loading&&<div>loading...</div>}
        //     {!loading&&<div>{halls.map((hall)=>{return(<div>{hall.name}</div>)})}</div>}
        // </div>
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
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import ModuleDrop from "./ModuleDrop";
import {GetHallsAction} from "../../store/actions/TimeTableAction";
import axios from "axios";

export const TimeTable = (props) => {
    const {halls,date,getHalls,loading}=props;

    const LecTimes=()=>{
        const mappedTimes=halls&&times.map((time)=>{
            const mappedHalls=halls.map(hall=>{
                return(<>
                    <div className="grid-item">
                        <ModuleDrop
                            hallid={hall.id}
                            startTime={time.startTime}
                            EndTime={time.endTime}
                            date={date}
                            // sessions={this.state.sessions}
                            // rerender={this.rerender}
                        />
                    </div>
                </>);
            })
            return(
                <>
                    <div className="grid-item">{time.startTime}</div>
                    {mappedHalls}
                </>
            );
        })
        return(<>{mappedTimes}</>);
    };
    return (
        <div>
            {loading&&<div>loading...</div>}
            {!loading&&<div>{halls.map((hall)=>{return(<div>{hall.name}</div>)})}</div>}
        </div>
    )
};

const LecTimes=(props)=>{
    const {halls,date}=props
    const mappedTimes=halls&&times.map((time)=>{
        const mappedHalls=halls.map(hall=>{
            return(<>
                <div className="grid-item">
                    <ModuleDrop
                        hallid={hall.id}
                        startTime={time.startTime}
                        EndTime={time.endTime}
                        date={date}
                        // sessions={this.state.sessions}
                        // rerender={this.rerender}
                    />
                </div>
            </>);
        })
        return(
            <>
                <div className="grid-item">{time.startTime}</div>
                {mappedHalls}
            </>
        );
    })
    return(<>{mappedTimes}</>);
};

const HallList=(props)=>{
    const {halls}= props;
    const mappedList=halls&&halls.map(hall=>{
        return(
            <div className="grid-item" hallid={hall.id}>{hall.name}</div>
        )
    })
    return (<>{mappedList}</>);
};

// const mapStateToProps = (state) => ({
//     halls:state.timetable.halls,
//     loading:state.timetable.loading,
//     date:state.module.date
// })
//
// const mapDispatchToProps =(dispatch)=> {
//     return {
//         getHalls:()=>{
//             dispatch(GetHallsAction());
//         }
//     }
// }

export default TimeTable;

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
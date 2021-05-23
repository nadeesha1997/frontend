import ModuleDrop from "./ModuleDrop";
import React from "react";
import {connect} from "react-redux";
import "../../css/Table.css"

const LecTimes=(props)=>{
    let {halls,sessions}=props;
    const mappedTimes=halls&&times.map((time)=>{
        const mappedHalls=halls.map(hall=>{
            return(<>
                <div className="grid-item">
                    <ModuleDrop
                        hallid={hall.id}
                        startTime={time.startTime}
                        EndTime={time.endTime}
                        // date={date}
                        sessions={sessions}
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
const mapStateToProps = (state) => ({
    halls:state.timetable.halls,
    // loading:state.timetable.loading,
    date:state.module.date,
    sessions:state.module.sessions
})

const mapDispatchToProps =(dispatch)=> {
    return {
        // getHalls:()=>{
        //     dispatch(GetHallsAction());
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecTimes)
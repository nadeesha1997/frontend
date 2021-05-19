// import React from "react";
// import Calendar from "../components/Calendar";
// function Dashboard(props) {

//     return(
//         <>
//         <Calendar/>
//         </>
//     );
// }
// export default Dashboard;
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Calendar from "../components/Calendar";
import {GetHallsAction} from "../store/actions/TimeTableAction"
import {TimeTable} from "../components/admin/TimeTable";

export const Dashboard = (props) => {
    const {getHalls}=props;
    useEffect(()=>getHalls())
    useEffect(()=>getHalls(),)
    return (
        <>
        <Calendar/>
        <TimeTable/>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch)=>{
    return{
        getHalls:()=>dispatch(GetHallsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

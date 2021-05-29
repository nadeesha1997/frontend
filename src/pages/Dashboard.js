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
import SubjectList from "../components/admin/SubjectList";
import '../css/Dashboard.css';
import SecondNav from "../components/SecondNav";
import {ThirdNav} from "../components/ThirdNav";


export const Dashboard = (props) => {
    const {getHalls}=props;
    useEffect(()=>getHalls())
    useEffect(()=>getHalls(),)
    return (
        <>
            <div className="page">
                {/*<Navigation/>*/}
                {/*<HomepageNavbar updateDate={this.updateDate}/>*/}
                {/*<Nav/>*/}
                <SecondNav/>
                <ThirdNav/>
                <div className="main">
                <Calendar/></div>
                <div className="row">
                    <div className="list">
                        <SubjectList/>
                    </div>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12">
                    <TimeTable/>

                </div>

            </div>
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

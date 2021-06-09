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
import {GetHallsAction} from "../store/actions/TimeTableAction";
import {GetHodsAction} from "../store/actions/MailAction"
import {TimeTable} from "../components/admin/TimeTable";
import SubjectList from "../components/admin/SubjectList";
import '../css/Dashboard.css';
import SecondNav from "../components/SecondNav";
import ThirdNav from "../components/ThirdNav";


export const Dashboard = (props) => {
    const {getHalls,getMails}=props;
    useEffect(()=>getMails(),[]);
    useEffect(()=>{getHalls()},[])
    return (
        <>
            <div>
                {/*<Navigation/>*/}
                {/*<HomepageNavbar updateDate={this.updateDate}/>*/}
                {/*<Nav/>*/}
                <ThirdNav/>

                <div className="page">
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

            </div></div>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch)=>{
    return{
        getHalls:()=>{dispatch(GetHallsAction())},
        getMails:()=>{dispatch(GetHodsAction())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

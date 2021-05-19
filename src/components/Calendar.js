import React,{useEffect} from "react";
import { GetDailyModulesAction, SetDateAction } from "../store/actions/DailyModuleAction";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import "../css/Calendar.css";
function CalendarComponent(props){
    const {date,setDate,getDailyModules}=props;
    const changeDate = (e) => {
                setDate(e);
                getDailyModules(e);
            };

    useEffect(()=>{
        getDailyModules(date);
    });

    return(
        <div className="calendar">

            <Calendar
                value={date}
                onChange={changeDate}
                className="react-calendar"
            />
        </div>
    )
}
const mapStateToProps=(moduleState)=>{
    return {
        date:moduleState.date
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        setDate:(date)=>{
            dispatch(SetDateAction(date));
        },
        getDailyModules:(date)=>{
            dispatch(GetDailyModulesAction(date));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CalendarComponent);
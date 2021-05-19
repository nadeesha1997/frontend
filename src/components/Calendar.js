// import React, {Component} from 'react'
// import Calendar from 'react-calendar'
// import '../css/calendar.css';
// import moment from 'moment'
// import axios from "axios";

// class CalendarNew extends Component {
//     constructor(props) {
//         super(props);
//         let today=new Date();
//         this.state={
//             date:today,
//             sessions:null
//         }
//         this.props.updateDate(today);
//         this.changeDate=this.changeDate.bind(this);
//         this.sessionsGet=this.sessionsGet.bind(this);
//     }
//     changeDate = (e) => {
//         this.setState({
//             date:e
//         },()=>{this.sessionsGet(e)})
//         // console.log(e);
//         this.props.updateDate(e);
//         // window.location.reload();
//         this.forceUpdate(()=>this.props.updateDate(e));
//     }
//     sessionsGet=(e)=>{
//         axios.get('https://localhost:5001/api/sessions/dateonly/'+moment(e).format('YYYY-MM-DD'))
//             .then((res)=>{this.setState({sessions:res.data},()=>{this.forceUpdate(()=>this.props.sessions(res.data));})})

//     }
//     render() {
//         return (
//             <div className="calendar">

//                 <Calendar
//                     value={this.state.date}
//                     onChange={this.changeDate}
//                     className="react-calendar"
//                 />
//                 {/*<p> TODAY: <b>{moment(this.state.date).format('MMMM Do YYYY')}</b></p>
// */}
//             </div>
//         )
//     }
// }
// export default CalendarNew;
import React,{useEffect} from "react";
import { GetDailyModulesAction, SetDateAction } from "../store/actions/DailyModuleAction";
import { connect } from "react-redux";
function Calendar(props){
    // const now=new Date()
    // const [date, setdate] = useState(now);
    // const {date,setDate,getDailyModules}=props;
    // const changeDate = (e) => {
    //             setDate(e);
    //         };

    // useEffect(()=>{
    //     getDailyModules(date);
    // });

    return(
        <div className="calendar">

            <Calendar
                // value={date}
                // onChange={changeDate}
                // className="react-calendar"
            />
            {/*<p> TODAY: <b>{moment(this.state.date).format('MMMM Do YYYY')}</b></p>*/}
        </div>
    )
}
// const mapStateToProps=(moduleState)=>{
//     return {
//         date:moduleState.date
//     }
// };

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         setDate:(date)=>{
//             dispatch(SetDateAction(date));
//         },
//         getDailyModules:(date)=>{
//             dispatch(GetDailyModulesAction(date));
//         }
//     }
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Calendar);
export default Calendar;
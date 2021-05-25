import React, {useEffect, useState} from "react";
import moment from "moment";
import "../../css/ModuleDrop.css";
import {useDispatch, useSelector} from "react-redux";
import {
    openDeleteModalAction, openSubmitModalAction,
    SelectModuleAction, SetEndTimeAction,
    SetHallAction, SetModuleAction,
    SetModuleIdAction, SetSessionIdAction,
    SetStartTimeAction
} from "../../store/actions/ModuleDropAction";
import {GetDailyModulesAction} from "../../store/actions/DailyModuleAction";
import SubmitReservation from "./SubmitReservation";
function ModuleDrop(props) {
    let {hallid,startTime,EndTime,sessions}=props;
    let moduleDropState=useSelector(state=> state)
    // cont [subject,]
    const dispatch=useDispatch();

    const [module, setmodule] = useState(null);
    const [reserved,setreserved]=useState(false);
    const [permitted,setpermitted]=useState(false);
    const [startDateTime,setstartDatetime]=useState(new Date());
    const [endDateTime,setEndDatetime]=useState(new Date());

    useEffect(()=>{
        startTimeSet();
        endTimeSet();
    },[moduleDropState.module.date])
    useEffect(()=>{
        // dispatch(SelectModuleAction(moduleDropState))
        checkBooked()
        if(moduleDropState.module.sessions.length==0){
            setmodule(null);
        }
        // console.log("check booked");

    },[moduleDropState.module.sessions]);
    useEffect(()=>{
        renderDiv()
    },[module,moduleDropState.module.date]);
    useEffect(()=>{
        dispatch(GetDailyModulesAction(moduleDropState.module.date))
    },[moduleDropState.moduleDrop.deleteResponse])

    const startTimeSet=()=>{
        let date=moment(moduleDropState.module.date).format('YYYY-MM-DD') + "T" + startTime
        setstartDatetime(new Date(date));
    };
    const endTimeSet=()=>{
        let date=moment(moduleDropState.module.date).format('YYYY-MM-DD') + "T" + EndTime
        setEndDatetime(new Date(date));
    };

    const checkBooked=()=>{
        let ss=moduleDropState.module.sessions;
        // console.log("called "+ss.length);
        if(ss.length!=0){
            ss.forEach(mod=>{
                // console.log(mod.startDateTime);
                // console.log(moment(startDateTime).format("YYYY-MM-DD[T]HH:mm:ss"));
                // console.log(mod.endDateTime);
                // console.log(moment(endDateTime).format("YYYY-MM-DD[T]HH:mm:ss"));
                // console.log(mod.hallId);
                // console.log(hallid);
                // if((moment(mod.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=startDateTime)&&((moment(mod.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=endDateTime))&&mod.hallId.toString()==hallid){
                    if((mod.startDateTime<=moment(startDateTime).format("YYYY-MM-DD[T]HH:mm:ss"))&&((mod.endDateTime>=moment(endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")))&&mod.hallId==hallid){
                        // console.log("found");
                    setmodule(mod);
                    setreserved(true);
                    setpermitted(mod.permitted);
                }
            });
        }
    };

    const onDragOver=(ev)=>{
        ev.preventDefault()
    };
    const onDragStart=(ev,id)=>{
        console.log('dragstart:',id);
    };
    const onDragLeave= (ev) => {
        let id = ev.dataTransfer.getData("id");
      dispatch(SetModuleIdAction(id));
    };
    const onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        if(reserved){
            alert("Time has already taken");
        }
        if(startDateTime<new Date()){
            alert("Time has already passed")
        }
        else {
            dispatch(SetModuleIdAction(id));
            dispatch(SetStartTimeAction(moduleDropState,startTime));
            dispatch(SetHallAction(moduleDropState,hallid));
            dispatch(SetEndTimeAction(moduleDropState,EndTime));
            dispatch(SetModuleAction(module));
            dispatch(openSubmitModalAction(true));
        }
    };
    const renderDiv=()=>{
        if(module!=null&&module.subject!=null){
            if(module.permitted){
                return(<div style={{backgroundColor: "red", marginTop:"1"}}><p>{module.subject.code}</p></div>)
            }
            else{
                return (<div style={{backgroundColor: "yellow", marginTop:"1"}}><p>{module.subject.code}</p></div>)
            }
        }
        else{
            return (<div></div>)
        }
        if(moduleDropState.module.sessions.length==0){
            return (<div></div>)
        }
    };
    const handleClick=()=>{
        if(module){
            dispatch(SetSessionIdAction(module.id));
            dispatch(openDeleteModalAction(true));
        }
        // console.log("clicked");
    };

    return(<>
        <div
            className="grid-item1"
            style={{width:"100%",height:"100%"}}
            onDragOver={(e)=>onDragOver(e)}
            onDrop={(e)=>onDrop(e, "complete")}
            onClick={()=>handleClick()}
        >
            {/*{this.state.reserved&&this.state.smodule&&<div style={{backgroundColor: "red", marginTop:"1"}}><p>{this.state.smodule.subject.code}</p></div>}*/}
            {/*{reserved&&permitted&&module.subject.code?<div style={{backgroundColor: "red", marginTop:"1"}}><p>{module.subject.code}</p></div>:null}*/}
            {/*{reserved&&!permitted&&module.subject.code?<div style={{backgroundColor: "yellow", marginTop:"1"}}><p>{module.subject.code}</p></div>:null}*/}
            {renderDiv()}
            {moduleDropState.moduleDrop.openSubmitModal&&<SubmitReservation/>}
        </div>
    </>);
}
// const mapStateToProps=(moduleState)=>{
//     return {
//     }
// };
//
// const mapDispatchToProps=(dispatch)=>{
//     return {}
//
// };

// export default connect(mapStateToProps,mapDispatchToProps)(ModuleDrop);
export default ModuleDrop;
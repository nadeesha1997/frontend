import React, {useEffect, useState} from "react";
import moment from "moment";
import "../../css/ModuleDrop.css";
import {useDispatch, useSelector} from "react-redux";
import {
    SelectModuleAction, SetEndTimeAction,
    SetHallAction, SetModuleAction,
    SetModuleIdAction,
    SetStartTimeAction
} from "../../store/actions/ModuleDropAction";
function ModuleDrop(props) {
    let {hallid,startTime,EndTime,sessions}=props;
    let moduleDropState=useSelector(state=> state)
    // cont [subject,]
    const dispatch=useDispatch();

    const [module, setmodule] = useState({});
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
        // console.log("check booked");

    },[moduleDropState.module.sessions,startDateTime,endDateTime]);

    const startTimeSet=()=>{
        let date=moment(moduleDropState.module.date).format('YYYY-MM-DD') + "T" + startTime
        setstartDatetime(new Date(date));
    }
    const endTimeSet=()=>{
        let date=moment(moduleDropState.module.date).format('YYYY-MM-DD') + "T" + EndTime
        setEndDatetime(new Date(date));
    }

    const checkBooked=()=>{
        let ss=moduleDropState.module.sessions;
        console.log("called"+ss.length);
        if(ss.length!=0){
            ss.forEach(mod=>{
                console.log(moment(mod.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss"));
                console.log(startDateTime);
                console.log(moment(mod.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss"));
                console.log(endDateTime);
                console.log(mod.hallId.toString());
                console.log(hallid);
                // if((moment(mod.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=startDateTime)&&((moment(mod.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=endDateTime))&&mod.hallId.toString()==hallid){
                    if((mod.startDateTime<=startDateTime)&&((mod.endDateTime>=endDateTime))&&mod.hallId==hallid){
                        console.log("found");
                    setmodule(mod.subject);
                    setreserved(true);
                    setpermitted(mod.permitted);
                }
                else{
                    console.log("not found")
                }
            });
        }
    }

    const onDragOver=(ev)=>{
        ev.preventDefault()
    }
    const onDragStart=(ev,id)=>{
        console.log('dragstart:',id);
        // ev.dataTransfer.setData("id",id);
        // this.setState({
        //     SubjectId:id
        // })
    }
    const onDragLeave= (ev) => {
        let id = ev.dataTransfer.getData("id");
        dispatch(SetModuleIdAction(id));
    }


    const onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        dispatch(SetModuleIdAction(id));
        dispatch(SetStartTimeAction(moduleDropState,startTime));
        dispatch(SetHallAction(moduleDropState,hallid));
        dispatch(SetEndTimeAction(moduleDropState,EndTime));
        dispatch(SetModuleAction(module));

    }

    return(<>
        <div
            className="grid-item1"
            style={{width:"100%",height:"100%"}}
            onDragOver={(e)=>onDragOver(e)}
            onDrop={(e)=>onDrop(e, "complete")}
        >
            {/*{this.state.reserved&&this.state.smodule&&<div style={{backgroundColor: "red", marginTop:"1"}}><p>{this.state.smodule.subject.code}</p></div>}*/}
            {reserved&&permitted&&module&&<div style={{backgroundColor: "red", marginTop:"1"}}><p>{module.subject.code}</p></div>}
            {reserved&&!permitted&&module&&<div style={{backgroundColor: "yellow", marginTop:"1"}}><p>{module.subject.code}</p></div>}
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
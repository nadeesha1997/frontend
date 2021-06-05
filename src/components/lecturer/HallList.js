import React from "react";
import {connect} from "react-redux";
import "../../css/Table.css"
const HallList=(props)=>{
    let {halls}=props;
    const mappedList=halls&&halls.map(hall=>{
        return(
            <div className="grid-item" hallid={hall.id}>{hall.name}</div>
        )
    })
    return (<>{mappedList}</>);
};
const mapStateToProps = (state) => ({
    halls:state.timetable.halls
})
const mapDispatchToProps =(dispatch)=> {
    return {
        // getHalls:()=>{
        //     dispatch(GetHallsAction());
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HallList)
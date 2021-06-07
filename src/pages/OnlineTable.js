import SecondNav from "../components/SecondNav";
import ThirdNav from "../components/ThirdNav";
import React from "react";
import Calendar from "../components/Calendar";
import {Button} from "react-bootstrap";
import { connect } from 'react-redux'
import { ModelOpenAction } from "../store/actions/OnlineSessionAction";
import ScheduleOnline from "../components/admin/ScheduleOnline"

export const OnlineTable = (props) => {
    const {openModal}=props;
    return (
        <>
            <div>

                <ThirdNav/>
                <div className="page">
                    <div className="main">
                        <table><td><tr>
                            <Calendar/></tr>
                            <tr>
                                <Button style={{width:180,backgroundColor:'#440151',marginTop:50,marginLeft:90,marginRight:20,marginBottom:150}}
                                    // type='submit'
                                        onClick={()=>openModal(true)}
                                >
                                    {/* <Link to="./Register/student">  */}
                                    <b> Schedule a Online Lecture</b>
                                    {/* </Link> */}
                                </Button></tr></td>
                           <td>
                               <div style={{marginLeft:50}}>
                            <h3>Your scheduled Online Lectures...</h3>

                            <table className = "table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th> Time Period</th>
                                    <th> Module Code</th>
                                    <th> Module Name</th>
                                    <th> Meeting ID</th>
                                    <th> Password</th>
                                    <th> Zoom link</th>
                                </tr>
                                </thead>
                            </table></div></td>
                        </table>

                    </div>
                </div>

            </div>
            <ScheduleOnline/>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps =(dispatch)=> {
    return{
        openModal:(open)=>{
            dispatch(ModelOpenAction(open))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineTable)
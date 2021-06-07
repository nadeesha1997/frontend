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
                        <table><tr>
                            <Calendar/></tr>
                            <tr>
                                <Button style={{width:180,backgroundColor:'#440151',marginTop:50,marginLeft:90,marginRight:20,marginBottom:150}}
                                    // type='submit'
                                        onClick={()=>openModal(true)}
                                >
                                    {/* <Link to="./Register/student">  */}
                                    <b> Schedule a Online Lecture</b>
                                    {/* </Link> */}
                                </Button>
                            </tr>
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
import SecondNav from "../components/SecondNav";
import {ThirdNav} from "../components/ThirdNav";
import React from "react";
import Calendar from "../components/Calendar";
import {Button} from "react-bootstrap";

export const  OnlineTable= () => {


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
                        >
                            {/* <Link to="./Register/student">  */}
                            <b> Schedule a Online Lecture</b>
                            {/* </Link> */}
                        </Button></tr>


                        </table>

                    </div>
                </div>

            </div>
            </>
    );
}
export default OnlineTable;
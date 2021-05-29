import SecondNav from "../components/SecondNav";
import {ThirdNav} from "../components/ThirdNav";
import React from "react";
import Calendar from "../components/Calendar";

export const  OnlineTable= () => {


    return (
        <>
            <div>
                <SecondNav/>
                <ThirdNav/>
                <div className="page">
                    <div className="main">
                        <Calendar/></div>
                </div>
            </div>
            </>
    );
}
export default OnlineTable;
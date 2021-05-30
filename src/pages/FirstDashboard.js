
import React from 'react'
import Calendar from "../components/Calendar";
import '../css/Dashboard.css';
import SecondNav from "../components/SecondNav";
import {ThirdNav} from "../components/ThirdNav";


export const FirstDashboard = () => {

    return (
        <>
            <div>
                {/*<Navigation/>*/}
                {/*<HomepageNavbar updateDate={this.updateDate}/>*/}
                {/*<Nav/>*/}
                <SecondNav/>
                <ThirdNav/>
                <div className="page">
                    <div className="main">
                        <Calendar/></div>
                </div>
            </div>
        </>
    )
}

export default FirstDashboard;

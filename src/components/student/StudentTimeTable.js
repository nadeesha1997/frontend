import React, { Component } from 'react'
import Calendar from "../Calendar";
import ThirdNav from "../ThirdNav";

class StudentTimeTable extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
<div><ThirdNav/>

            <div className="page">

                <Calendar/>
                <br/>
                <table className = "table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> Time Period</th>
                        <th> Module Code</th>
                        <th> Module Name</th>
                        <th> Venue</th>

                    </tr>
                    </thead>
                </table>
            </div>
</div>
        )
    }
}

export default StudentTimeTable

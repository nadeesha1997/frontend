import React, { Component } from 'react'

class StudentTimeTable extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (


            <div>
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

        )
    }
}

export default StudentTimeTable

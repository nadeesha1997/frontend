
import React, { Component } from 'react'
import UserService from '../services/UserService'
import {ThirdNav} from "../ThirdNav";

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],

        }
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }


    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    render() {
        return (
            <div>
                <ThirdNav/>
                <h2 className="text-center">Users List</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered" style={{marginLeft:50,marginRight:50}}>

                        <thead>
                        <tr>
                            <th> User Name</th>
                            {/*<th> Department</th>*/}
                            <th> User Role</th>
                            <th> Registration Number</th>
                            <th> Semester</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key = {user.id}>
                                        <td> { user.fullName} </td>
                                        <td> { user.role} </td>
                                        <td> { user.regNo} </td>
                                        <td> { user.semester} </td>
                                        <td>
                                             <button style={{marginLeft: "10px",width:"50%"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                            {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewHall(hall.id)} className="btn btn-success">View </button>*/}

                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListUserComponent

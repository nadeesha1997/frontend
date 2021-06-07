
import React, { Component } from 'react'
import ThirdNav from "../ThirdNav";
import SessionService from "../services/SessionService";

class ListSessionComponent extends Component {
    isPermitted;
    constructor(props) {
        super(props)

        this.state = {

            sessions: [],

        }
        this.deleteSession = this.deleteSession.bind(this);
    }

    deleteSession(id){
        SessionService.deleteSession(id).then( res => {
            this.setState({sessions: this.state.sessions.filter(session => session.id !== id)});
        });
    }


    componentDidMount(){
        SessionService.getSessions().then((res) => {
            this.setState({ sessions: res.data});
        });
    }

    render() {
        return (
            <div>
                <ThirdNav/>
                <h2 className="text-center"> Approval Pending Sessions</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered" style={{marginLeft:50,marginRight:50}}>

                        <thead>
                        <tr>
                            <th> Hall</th>
                            <th> Subject code</th>
                            <th> Subject</th>
                            <th> startDateTime</th>
                            <th> endDateTime</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                          this.state.sessions.map(session =>

                                    <tr key = {session.id}  >
                                        <td> { session.hall.name} </td>
                                        <td> { session.subject.code} </td>
                                        <td align="left"> { session.subject.name} </td>
                                        <td> { session.startDateTime} </td>
                                        <td> { session.endDateTime} </td>
                                        <td>
                                            <button style={{marginLeft: "10px",width:"50%"}} onClick={ () => this.deleteSession(session.id)} className="btn btn-danger">Delete </button>
                                            {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewHall(hall.id)} className="btn btn-success">View </button>*/}
                                            <button style={{marginLeft: "10px",width:"50%"}}
                                                    // onClick={ () => this.isPermitted(true)}
                                                    className="btn btn-secondary">

                                                Pending
                                            </button>
                                        {/*    if(module.permitted){*/}
                                        {/*    return(<div style={{backgroundColor: "yellow", marginTop:"-10px",marginBottom:"-90px",height: "20px"}}><p>{module.subject.code}</p></div>)*/}
                                        {/*}*/}
                                        {/*    else{*/}
                                        {/*    return (<div style={{backgroundColor: "red", marginTop:"-10px",marginBottom:"-90px",height: "20px"}}><p>{module.subject.code}</p></div>)*/}
                                        {/*}*/}

                                        </td>
                                    </tr>

                            )
                        }
                        </tbody>

                    </table>
                    {this.state.sessions.permitted===true}

                </div>

            </div>
        )
    }
}

export default ListSessionComponent

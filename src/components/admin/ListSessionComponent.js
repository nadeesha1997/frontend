//
// import React, { Component } from 'react'
// import ThirdNav from "../ThirdNav";
// import SessionService from "../services/SessionService";
//
// class ListSessionComponent extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             sessions: [],
//
//         }
//         this.deleteSession = this.deleteSession.bind(this);
//     }
//
//     deleteSession(id){
//         SessionService.deleteSession(id).then( res => {
//             this.setState({sessions: this.state.sessions.filter(session => session.id !== id)});
//         });
//     }
//
//
//     componentDidMount(){
//         SessionService.getSessions().then((res) => {
//             this.setState({ sessions: res.data});
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <ThirdNav/>
//                 <h2 className="text-center">Session List</h2>
//                 <div className = "row">
//                     <table className = "table table-striped table-bordered" style={{marginLeft:50,marginRight:50}}>
//
//                         <thead>
//                         <tr>
//                             <th> id</th>
//                             {/*<th> Department</th>*/}
//                             <th> startDateTime</th>
//                             <th> endDateTime</th>
//                             <th> hallId</th>
//                             <th> subjectId</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             this.state.users.map(
//                                 user =>
//                                     <tr key = {user.id}>
//                                         <td> { user.fullName} </td>
//                                         <td> { user.role} </td>
//                                         <td> { user.regNo} </td>
//                                         <td> { user.semester} </td>
//                                         <td>
//                                             <button style={{marginLeft: "10px",width:"50%"}} onClick={ () => this.deleteSession(session.id)} className="btn btn-danger">Delete </button>
//                                             {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewHall(hall.id)} className="btn btn-success">View </button>*/}
//
//                                         </td>
//                                     </tr>
//                             )
//                         }
//                         </tbody>
//                     </table>
//
//                 </div>
//
//             </div>
//         )
//     }
// }
//
// export default ListSessionComponent

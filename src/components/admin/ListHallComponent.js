// import React, { Component } from 'react'
// import HallService from '../services/HallService'
// import {ThirdNav} from "../ThirdNav";
//
// class ListHallComponent extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             halls: []
//         }
//         this.addHall = this.addHall.bind(this);
//         this.editHall = this.editHall.bind(this);
//         this.deleteHall = this.deleteHall.bind(this);
//     }
//
//     deleteHall(id){
//         HallService.deleteHall(id).then( res => {
//             this.setState({halls: this.state.halls.filter(hall => hall.id !== id)});
//         });
//     }
//     viewHall(id){
//         this.props.history.push(`/view-hall/${id}`);
//     }
//     editHall(id){
//         this.props.history.push(`/add-hall/${id}`);
//     }
//
//     componentDidMount(){
//         HallService.getHalls().then((res) => {
//             this.setState({ halls: res.data});
//         });
//     }
//
//     addHall(){
//         this.props.history.push('/add-hall/_add');
//     }
//
//     render() {
//         return (
//             <div>
//                 <ThirdNav/>
//                 <h2 className="text-center">Halls List</h2>
//                 <div className = "row">
//                     <button className="btn btn-primary"
//                             style={{marginLeft:50}}
//                             onClick={this.addHall}> Add Hall</button>
//                 </div>
//                 <br></br>
//                 <div className = "row">
//                     <table className = "table table-striped table-bordered">
//
//                         <thead>
//                         <tr>
//                             <th> Hall Name</th>
//                             <th> Department</th>
//                             <th> Department Id</th>
//                             <th> Status</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             this.state.halls.map(
//                                 hall =>
//                                     <tr key = {hall.id}>
//                                         <td> { hall.Name} </td>
//                                         <td> {hall.Building}</td>
//                                         <td> {hall.BuildingId}</td>
//                                         <td>
//                                             <button onClick={ () => this.editHall(hall.id)} className="btn btn-info">Update </button>
//                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteHall(hall.id)} className="btn btn-danger">Delete </button>
//                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewHall(hall.id)} className="btn btn-info">View </button>
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
// export default ListHallComponent
import React, { Component } from 'react'
import HallService from '../services/HallService'
import BuildingService from '../services/BuildingService'
import ThirdNav from "../ThirdNav";
import {Link} from "react-router-dom";

class ListHallComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            halls: [],
            buildings:[]
        }
        this.addHall = this.addHall.bind(this);
        this.editHall = this.editHall.bind(this);
        this.deleteHall = this.deleteHall.bind(this);
    }

    deleteHall(id){
        HallService.deleteHall(id).then( res => {
            this.setState({halls: this.state.halls.filter(hall => hall.id !== id)});
        });
    }
    viewHall(id){
        this.props.history.push(`/view-hall/${id}`);
    }
    editHall(id){
        this.props.history.push(`/add-hall/${id}`);
    }

    componentDidMount(){
        HallService.getHalls().then((res) => {
            this.setState({ halls: res.data});
        })
        BuildingService.getBuildings().then((res) => {
            this.setState({ buildings: res.data});
        });
    }

    addHall(){
        this.props.history.push('/add-hall/_add');
    }

    render() {
        return (
            <div>
                <ThirdNav/>
                <h2 className="text-center">Halls List</h2>
                <div className = "row">
                    <Link to="/add-hall/_add" className="btn btn-secondary" style={{marginLeft: "50px" }}>{"Add Hall"}</Link>
                        <Link to="/home"  className="btn btn-primary" style={{marginLeft: "10px"}}>{"View Hall details"}</Link>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered" style={{marginLeft:50,marginRight:50}}>

                        <thead>
                        <tr>
                            <th> Hall ID</th>
                            <th> Hall Name</th>
                            {/*<th> Department</th>*/}
                            <th> Department Id</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.halls.map(
                                hall =>
                                    <tr key = {hall.id}>
                                        <td> { hall.id} </td>
                                        <td> { hall.name} </td>
                                        {/*<td> {hall.building}</td>*/}
                                        <td> {hall.buildingId}</td>
                                        <td>
                                            <button style={{marginLeft: "10px",width:"45%"}}onClick={ () => this.editHall(hall.id)} className="btn btn-secondary">Update </button>
                                            <button style={{marginLeft: "10px",width:"45%"}} onClick={ () => this.deleteHall(hall.id)} className="btn btn-danger">Delete </button>
                                            {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewHall(hall.id)} className="btn btn-success">View </button>*/}

                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                    <h2 className="text-center" style={{marginLeft:50}} >Building List</h2>

                    <table className = "table table-striped table-bordered" style={{marginLeft:50,marginRight:50}}>

                        <thead>
                        <tr>
                            <th> Department Id</th>
                            <th> Building Name</th>
                            {/*<th> Department</th>*/}


                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.buildings.map(
                                building =>
                                    <tr key = {building.id}>

                                        <td> {building.departmentId}</td>
                                        <td align="left"> { building.name} </td>
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

export default ListHallComponent

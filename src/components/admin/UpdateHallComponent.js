// import React, { Component } from 'react'
// import HallService from '../services/HallService';
// import {ThirdNav} from "../ThirdNav";
//
// class UpdateHallComponent extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             id: this.props.match.params.id,
//             Name: '',
//             Building: '',
//             BuildingId: ''
//         }
//         this.changeNameHandler = this.changeNameHandler.bind(this);
//         this.changeBuildingHandler = this.changeBuildingHandler.bind(this);
//         this.updateHall = this.updateHall.bind(this);
//     }
//
//     componentDidMount(){
//         HallService.getHallById(this.state.id).then( (res) =>{
//             let hall = res.data;
//             this.setState({Name: hall.Name,
//                 Building: hall.Building,
//                 BuildingId : hall.BuildingId
//             });
//         });
//     }
//
//     updateHall = (e) => {
//         e.preventDefault();
//         let hall = {Name: this.state.Name, Building: this.state.Building, BuildingId: this.state.BuildingId};
//         console.log('hall => ' + JSON.stringify(hall));
//         console.log('id => ' + JSON.stringify(this.state.id));
//         HallService.updateHall(hall, this.state.id).then( res => {
//             this.props.history.push('/halls');
//         });
//     }
//
//     changeNameHandler= (event) => {
//         this.setState({Name: event.target.value});
//     }
//
//     changeBuildingHandler= (event) => {
//         this.setState({Building: event.target.value});
//     }
//
//     changeBuildingIdHandler= (event) => {
//         this.setState({BuildingId: event.target.value});
//     }
//
//     cancel(){
//         this.props.history.push('/halls');
//     }
//
//     render() {
//         return (
//             <div>
//                 <br>
//                     <ThirdNav/>
//                 </br>
//                 <div className = "container">
//                     <div className = "row">
//                         <div className = "card col-md-6 offset-md-3 offset-md-3">
//                             <h3 className="text-center">Update Hall</h3>
//                             <div className = "card-body">
//                                 <form>
//                                     <div className = "form-group">
//                                         <label> Name: </label>
//                                         <input placeholder="Name" name="Name" className="form-control"
//                                                value={this.state.Name} onChange={this.changeNameHandler}/>
//                                     </div>
//                                     <div className = "form-group">
//                                         <label> Building: </label>
//                                         <input placeholder="Building" name="Building" className="form-control"
//                                                value={this.state.Building} onChange={this.changeBuildingHandler}/>
//                                     </div>
//                                     <div className = "form-group">
//                                         <label> Building Id: </label>
//                                         <input placeholder="BuildingId" name="BuildingId" className="form-control"
//                                                value={this.state.BuildingId} onChange={this.changeBuildingIdHandler}/>
//                                     </div>
//
//                                     <button className="btn btn-success" onClick={this.updateHall}>Save</button>
//                                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default UpdateHallComponent
import React, { Component } from 'react'
import HallService from '../services/HallService';
import {ThirdNav} from "../ThirdNav";

class UpdateHallComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            building: '',
            buildingId: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeBuildingHandler = this.changeBuildingHandler.bind(this);
        this.updateHall = this.updateHall.bind(this);
    }

    componentDidMount(){
        HallService.getHallById(this.state.id).then( (res) =>{
            let hall = res.data;
            this.setState({name: hall.name,
                building: hall.building,
                buildingId : hall.buildingId
            });
        });
    }

    updateHall = (e) => {
        e.preventDefault();
        let hall = {name: this.state.name, building: this.state.building, buildingId: this.state.buildingId};
        console.log('hall => ' + JSON.stringify(hall));
        console.log('id => ' + JSON.stringify(this.state.id));
        HallService.updateHall(hall, this.state.id).then( res => {
            this.props.history.push('/halls');
        });
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeBuildingHandler= (event) => {
        this.setState({building: event.target.value});
    }

    changeBuildingIdHandler= (event) => {
        this.setState({buildingId: event.target.value});
    }

    cancel(){
        this.props.history.push('/halls');
    }

    render() {
        return (
            <div>
                <br>
                    <ThirdNav/>
                </br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Hall</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    {/*<div className = "form-group">*/}
                                    {/*    <label> Building: </label>*/}
                                    {/*    <input placeholder="building" name="building" className="form-control"*/}
                                    {/*           value={this.state.building} onChange={this.changeBuildingHandler}/>*/}
                                    {/*</div>*/}
                                    <div className = "form-group">
                                        <label> Building Id: </label>
                                        <input placeholder="buildingId" name="buildingId" className="form-control"
                                               value={this.state.buildingId} onChange={this.changeBuildingIdHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateHall}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateHallComponent

import React, { Component } from 'react'
import HallService from '../services/HallService';
import {ThirdNav} from "../ThirdNav";

class CreateHallComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            Name: '',
            Building: '',
            BuildingId: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeBuildingHandler = this.changeBuildingHandler.bind(this);
        this.saveOrUpdateHall = this.saveOrUpdateHall.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            HallService.getHallById(this.state.id).then( (res) =>{
                let hall = res.data;
                this.setState({Name: hall.Name,
                    Building: hall.Building,
                    BuildingId : hall.BuildingId
                });
            });
        }
    }
    saveOrUpdateHall = (e) => {
        e.preventDefault();
        let hall = {Name: this.state.Name, Building: this.state.Building, BuildingId: this.state.BuildingId};
        console.log('hall => ' + JSON.stringify(hall));

        // step 5
        if(this.state.id === '_add'){
            HallService.createHall(hall).then(res =>{
                this.props.history.push('/halls');
            });
        }else{
            HallService.updateHall(hall, this.state.id).then( res => {
                this.props.history.push('/halls');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({Name: event.target.value});
    }

    changeBuildingHandler= (event) => {
        this.setState({Building: event.target.value});
    }

    changeBuildingIdHandler= (event) => {
        this.setState({BuildingId: event.target.value});
    }

    cancel(){
        this.props.history.push('/halls');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Hall</h3>
        }else{
            return <h3 className="text-center">Update Hall</h3>
        }
    }
    render() {
        return (
            <div>
                <ThirdNav/>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="Name" className="form-control"
                                               value={this.state.Name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Building: </label>
                                        <input placeholder="Building" name="Building" className="form-control"
                                               value={this.state.Building} onChange={this.changeBuildingHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Building Id: </label>
                                        <input placeholder="BuildingId" name="BuildingId" className="form-control"
                                               value={this.state.BuildingId} onChange={this.changeBuildingIdHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateHall}>Save</button>
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

export default CreateHallComponent

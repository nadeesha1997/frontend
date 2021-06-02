// import React, { Component } from 'react'
// import HallService from '../services/HallService'
// import {ThirdNav} from "../ThirdNav";
//
// class ViewHallComponent extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             id: this.props.match.params.id,
//             hall: {}
//         }
//     }
//
//     componentDidMount(){
//         HallService.getHallById(this.state.id).then( res => {
//             this.setState({hall: res.data});
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <ThirdNav/>
//                 <br></br>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className = "text-center"> View Hall Details</h3>
//                     <div className = "card-body">
//                         <div className = "row">
//                             <label> Hall Name: </label>
//                             <div> { this.state.hall.Name }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Building: </label>
//                             <div> { this.state.hall.Building }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Building Id: </label>
//                             <div> { this.state.hall.BuildingId }</div>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default ViewHallComponent
import React, { Component } from 'react'
import HallService from '../services/HallService'
import {ThirdNav} from "../ThirdNav";

class ViewHallComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            hall: {}
        }
    }

    componentDidMount(){
        HallService.getHallById(this.state.id).then( res => {
            this.setState({hall: res.data});
        })
    }

    render() {
        return (
            <div>
                <ThirdNav/>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Hall Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Hall Name: </label>
                            <div> { this.state.hall.name }</div>
                        </div>
                        {/*<div className = "row">*/}
                        {/*    <label> Building: </label>*/}
                        {/*    <div> { this.state.hall.building }</div>*/}
                        {/*</div>*/}
                        <div className = "row">
                            <label> Building Id: </label>
                            <div> { this.state.hall.buildingId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewHallComponent

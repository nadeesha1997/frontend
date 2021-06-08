
import React, { Component } from 'react'
import ThirdNav from "../ThirdNav";
import SubjectService from "../services/SubjectService";

class ListModuleComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

            subjects: [],

        }
        this.deleteSubject = this.deleteSubject.bind(this);
    }

    deleteSubject(id){
        SubjectService.deleteSubject(id).then( res => {
            this.setState({subjects: this.state.subjects.filter(subject => subject.id !== id)});
        });
    }


    componentDidMount(){
        SubjectService.getSubjects().then((res) => {
            this.setState({ subjects: res.data});
        });
    }

    render() {
        return (
            <div>
                <ThirdNav/>
                <br/>
                <h2 className="text-center"> Available Modules</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered" style={{marginLeft:50,marginRight:50}}>

                        <thead>
                        <tr>
                            <th> Subject code</th>
                            <th> Subject</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            this.state.subjects.map(subject =>

                                <tr key = {subject.id}  >
                                    <td> { subject.code} </td>
                                    <td align="left"> { subject.name} </td>
                                    <td>
                                        <button style={{marginLeft: "10px",width:"50%"}} onClick={ () => this.deleteSubject(subject.id)} className="btn btn-danger">Delete </button>


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

export default ListModuleComponent
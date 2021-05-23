import React from "react";
import {connect} from "react-redux";
import {GetModuleAction, SetDepartmentAction, SetSemesterAction} from "../../store/actions/SubjectListAction";
import "../../css/SubjectList.css"

function SubjectList(props) {
    let {subjectList,setSemester,setDepartment,getModules}=props;

    const OnSubmit=()=> {
        getModules(subjectList);
    }
    const onDragStart=(ev,id)=>{
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id",id);
    }
    let modules = subjectList.subjects&&subjectList.subjects.map((mod) => {
        return (
            <ul>
                <div key={mod.id}
                     onDragStart={(e) => onDragStart(e, mod.id)}
                     draggable
                     className="draggable">
                    {mod.code} - {mod.name}
                </div>
            </ul>
        );
    });
    return(<>
        <div style={{margin: '50px'}}>
            <table>
                <div style={{width: '100%'}}>
                    <td>
                        <div className="bottom_right">
                            <div className="custom-select">
                                <select
                                    // ref="selectOption"
                                    onChange={(e) =>setSemester(e.target.value)}>
                                    <option value="0">select the semester:</option>
                                    <option value="1">semester 01</option>
                                    <option value="2">semester 02</option>
                                    <option value="3">semester 03</option>
                                    <option value="4">semester 04</option>
                                    <option value="5">semester 05</option>
                                    <option value="6">semester 06</option>
                                    <option value="7">semester 07</option>
                                    <option value="8">semester 08</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="bottom_corner">
                            <div className="custom-select">
                                <select
                                    // ref="selectTime"
                                    onChange={(e) => setDepartment(e.target.value)}>
                                    <option value="all">select the Department:</option>
                                    <option value="EE">DEIE</option>
                                    <option value="CE">CEE</option>
                                    <option value="ME">MME</option>
                                    <option value="IS">IS</option>
                                </select>
                            </div>
                        </div>
                    </td>
                </div>
                <td>
                    <div>
                        <div className="container">
                            <div className="row" style={{margin: '10px'}}>
                                <button onClick={() => getModules(subjectList)}
                                        style={{backgroundColor: '#9b82c3'}}>
                                    <b>SELECT</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </td>
            </table>
            <div className="row">
                <div>
                    {modules}
                </div>
            </div>
        </div>
    </>);

}
const mapStateToProps=(listState)=>{
    return {
        subjectList:listState.subjectList
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        setSemester:(semester)=>{dispatch(SetSemesterAction(semester));},
        setDepartment:(department)=>{dispatch(SetDepartmentAction(department));},
        getModules:(subjectlistState)=>{dispatch(GetModuleAction(subjectlistState));}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SubjectList);
import React, {useEffect} from "react";
import {useParams} from "react-router";
import {GetSessionAction, PermissionCansellingAction, SessionApproveAction} from "../store/actions/MailAction";
import {connect} from "react-redux";
import {Form} from "react-bootstrap";
import {Button, Input} from "reactstrap";
import moment from "moment";
import {useHistory} from "react-router";
function ReserveApproval(props) {
    let {getSession,session,sessionState,approve,denyApproval,loading}=props;
    const history=useHistory();
    let {id}=useParams();
    useEffect(()=>{
        getSession(id);
        if(session){
            approve(sessionState,history);
        }
    },[session]);
    // useEffect(()=>{
    //     renderSession(session)
    // },[session])
    // const renderSession=(sess)=>{
    //     if(sess){
    //         return(
    //             <>
    //                 <div className="page1">
    //                     <div>
    //                         <Form>
    //                             <div className="sub">
    //                                 <label htmlFor="module">Module:</label>
    //                                 <Input
    //                                     style={{width:390}}
    //                                     type="text"
    //                                     className="form-control"
    //                                     name="module"
    //                                     value={sess.subject?session.Subject.name:""}
    //                                     readOnly
    //                                 />
    //                             </div>
    //                             <div className="sub">
    //                                 <label htmlFor="hall">Hall:</label>
    //                                 <Input
    //                                     style={{width:390}}
    //                                     type="text"
    //                                     className="form-control"
    //                                     name="module"
    //                                     value={sess.hall?session.hall.name:""}
    //                                     readOnly
    //                                 />
    //                             </div>
    //                             <div className="sub">
    //                                 <label htmlFor="date">Date:</label>
    //                                 <Input
    //                                     style={{width:390}}
    //                                     type="text"
    //                                     className="form-control"
    //                                     name="date"
    //                                     value={sess.startDateTime?moment(session.StartDateTime).format("YYYY-MM-DD"):""}
    //                                     readOnly
    //                                 />
    //                             </div>
    //                             <div className="sub">
    //                                 <label htmlFor="starttime">Start Time:</label>
    //                                 <Input
    //                                     style={{width:390}}
    //                                     type="text"
    //                                     className="form-control"
    //                                     name="starttime"
    //                                     value={sess.endDateTime?moment(session.StartDateTime).format("HH:mm"):""}
    //                                     readOnly
    //                                 />
    //                             </div>
    //                             <div className="sub">
    //                                 <label htmlFor="endtime">End Time:</label>
    //                                 <Input
    //                                     style={{width:390}}
    //                                     type="text"
    //                                     className="form-control"
    //                                     name="endtime"
    //                                     value={sess.EndDateTime?moment(session.EndDateTime).format("HH:mm"):""}
    //                                     readOnly
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <Button
    //                                     // type="submit"
    //                                     style={{width:100,height:40,backgroundColor:'#2d0b34',marginBottom:15,marginLeft:130,marginTop:15}}
    //                                     className="btn btn-primary btn-block"
    //                                     name="submit"
    //                                     onClick={()=>{
    //                                         approve(sessionState,history);
    //                                     }}
    //                                 >APPROVE</Button>
    //                                 <Button
    //                                     // type="submit"
    //                                     style={{width:100,height:40,backgroundColor:'#2d0b34'}}
    //                                     className="btn btn-primary btn-block"
    //                                     name="submit"
    //                                     onClick={()=>{
    //                                         denyApproval(history);
    //                                     }}
    //                                 >CANSAL</Button>
    //                             </div>
    //                         </Form>
    //                     </div>
    //                 </div>
    //             </>
    //         )
    //     }else {
    //         return (<div></div>)
    //     }
    // }
    return(
        <>
            {/*{!loading&&*/}
            {/*<div className="page1">*/}
            {/*    <div>*/}
            {/*        <Form>*/}
            {/*            <div className="sub">*/}
            {/*                <label htmlFor="module">Module:</label>*/}
            {/*                <Input*/}
            {/*                    style={{width:390}}*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    name="module"*/}
            {/*                    value={session.subject?session.Subject.name:""}*/}
            {/*                    readOnly*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="sub">*/}
            {/*                <label htmlFor="hall">Hall:</label>*/}
            {/*                <Input*/}
            {/*                    style={{width:390}}*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    name="module"*/}
            {/*                    value={session.hall?session.hall.name:""}*/}
            {/*                    readOnly*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="sub">*/}
            {/*                <label htmlFor="date">Date:</label>*/}
            {/*                <Input*/}
            {/*                    style={{width:390}}*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    name="date"*/}
            {/*                    value={session.startDateTime?moment(session.StartDateTime).format("YYYY-MM-DD"):""}*/}
            {/*                    readOnly*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="sub">*/}
            {/*                <label htmlFor="starttime">Start Time:</label>*/}
            {/*                <Input*/}
            {/*                    style={{width:390}}*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    name="starttime"*/}
            {/*                    value={session.endDateTime?moment(session.StartDateTime).format("HH:mm"):""}*/}
            {/*                    readOnly*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="sub">*/}
            {/*                <label htmlFor="endtime">End Time:</label>*/}
            {/*                <Input*/}
            {/*                    style={{width:390}}*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    name="endtime"*/}
            {/*                    value={session.EndDateTime?moment(session.EndDateTime).format("HH:mm"):""}*/}
            {/*                    readOnly*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="form-group">*/}
            {/*                <Button*/}
            {/*                    // type="submit"*/}
            {/*                    style={{width:100,height:40,backgroundColor:'#2d0b34',marginBottom:15,marginLeft:130,marginTop:15}}*/}
            {/*                    className="btn btn-primary btn-block"*/}
            {/*                    name="submit"*/}
            {/*                    onClick={()=>{*/}
            {/*                        approve(sessionState,history);*/}
            {/*                    }}*/}
            {/*                >APPROVE</Button>*/}
            {/*                <Button*/}
            {/*                    // type="submit"*/}
            {/*                    style={{width:100,height:40,backgroundColor:'#2d0b34'}}*/}
            {/*                    className="btn btn-primary btn-block"*/}
            {/*                    name="submit"*/}
            {/*                    onClick={()=>{*/}
            {/*                        denyApproval(history);*/}
            {/*                    }}*/}
            {/*                >CANSAL</Button>*/}
            {/*            </div>*/}
            {/*        </Form>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*}*/}
            {/*{renderSession(session)}*/}
        </>
    )
}
const mapStateToProps=(mailState)=>{
    return {
        session:mailState.mail.session,
        sessionState:mailState.mail,
        loading:mailState.mail.loading
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        getSession:(id)=>{
            dispatch(GetSessionAction(id));
        },
        approve:(state,history)=>{
            dispatch(SessionApproveAction(state,history))
        },
        denyApproval:(history)=>{
            dispatch(PermissionCansellingAction(history))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReserveApproval);
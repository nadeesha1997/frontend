import React from "react";
import {connect} from "react-redux";
import {DeleteSessionAction, openDeleteModalAction, openSubmitModalAction} from "../../store/actions/ModuleDropAction";
import {Modal, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import '../../css/modal.css';

function DeleteSessionModal(props) {
    let {id,openMod,deleteSession,closeMod}=props;
    return(<>
        <Modal show={openMod}
               onHide={()=>closeMod(false)}>
            <ModalHeader closeButton>
                <ModalTitle><div className="title">LSMS-Delete a Session</div></ModalTitle>
            </ModalHeader>

            <ModalBody>
                <div className="page1">
                <div>
                    <div className="sub">
                        <h4>Do you want to Delete the scheduled session?</h4>
                    </div>
                    <div className="row">
                        <button style={{width:150,height:40,backgroundColor:'#2d0b34',marginRight:15,marginLeft:100,marginTop:80,marginBottom:20}}
                                className="btn btn-primary btn-block"
                            onClick={()=>{
                            console.log(id);
                            deleteSession(id);
                            closeMod(false);
                        }}>Delete</button>
                        <button
                            style={{width:150,height:40,backgroundColor:'#2d0b34',marginRight:15,marginTop:80,paddingBottom:5,marginBottom:20}}
                            className="btn btn-primary btn-block"
                        >OK</button>
                    </div>
                </div></div>
            </ModalBody>
        </Modal>
    </>)
}

const mapStateToProps=(moduleDropstate)=>{
    return {
        id:moduleDropstate.moduleDrop.sessionId,
        openMod:moduleDropstate.moduleDrop.openDeleteModal
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteSession:(session)=>{
            dispatch(DeleteSessionAction(session));
        },
        closeMod:(open)=>{
            dispatch(openDeleteModalAction(open));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(DeleteSessionModal);
import React from "react";
import {connect} from "react-redux";
import {DeleteSessionAction, openDeleteModalAction, openSubmitModalAction} from "../../store/actions/ModuleDropAction";
import {Modal, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
function DeleteSessionModal(props) {
    let {id,openMod,deleteSession,closeMod}=props;
    return(<>
        <Modal show={openMod}
               onHide={()=>closeMod(false)}>
            <ModalHeader closeButton>
                <ModalTitle>Delete Session</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div>
                    <div className="row">
                        <h3>Are you sure?</h3>
                    </div>
                    <div className="row">
                        <button onClick={()=>{
                            console.log(id);
                            deleteSession(id);
                            closeMod(false);
                        }}>Delete</button>
                        <button>OK</button>
                    </div>
                </div>
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
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";


const RemoveModal = (props) => {
    return <Modal 
            isOpen={props.handleOpenModalRemove}
            onRequestClose={props.handleCancelRemoveModal}
            contentLabel="Modal Example"
            className="modal"
            >
            
        <h3 className="modal__body">Are you sure? </h3>
        
        <butto onClick={props.handleOpenModalRemove} className="button">Yes</butto>
        <button className="button" onClick={props.handleCancelRemoveModal} > Cancel</button>
      </Modal>
}

export default RemoveModal
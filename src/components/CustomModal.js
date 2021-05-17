import React from "react"
import { Container } from "react-bootstrap"
import {FaTimes} from "react-icons/fa"
import "../styles/CustomModal.css"

function CustomModal(props){
    return(
        <div className={props.show.modalState === true ? "custom-modal-wrapper" : "hide"}>
            <div className="custom-modal-header">
                <b>{props.title}</b>
                <span onClick={() => props.onHide()}><FaTimes /></span>
            </div>
            <Container>
                <div className="custom-modal-content">
                    {props.content}
                </div>
            </Container>
        </div>
    )
}

export default CustomModal
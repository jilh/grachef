import React from "react"
import { Col, Container, Row } from "react-bootstrap"
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
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className="custom-modal-content">
                            {props.content}
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomModal
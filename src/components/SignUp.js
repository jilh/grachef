import React from 'react'
import Navigation from "./Navigation"
import Footer from "./Footer"
import Registration from './Registration'
import { Col, Container, Row } from 'react-bootstrap'

function SignUp(){
    return(
        <div>
            <Navigation />
                <div style={{paddingTop: '120px', background: 'rgba(255, 255, 255, 1)', paddingBottom: '80px'}}>
                    <Container>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={6}>
                                <Registration />
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                    </Container>
                </div>
            <Footer />
        </div>
    )
}

export default SignUp;
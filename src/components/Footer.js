import {Container, Col, Row} from 'react-bootstrap'
import '../styles/Footer.css'

function Footer(){
    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h6>Quick Links</h6>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                    </Col>
                    <Col md={4}>
                        <h6>Quick Links</h6>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                    </Col>
                    <Col md={4}>
                        <h6>Quick Links</h6>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                        <a href="/">Quick Link</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
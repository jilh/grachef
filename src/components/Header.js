import Navigation from "./Navigation"
import "../styles/Header.css"
import {Container, Row, Col, Button} from "react-bootstrap"
import playstoreIcon from "../design-files/playstore.png"
import appstoreIcon from "../design-files/appstore.png"
import heroImage from "../design-files/hero-image.png"
import {FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'

function Header(){
    return(
        <div className={"header"}>
            <div className={"header-wrapper"}>
                <Navigation />

                <Container>
                    <Row>
                        <Col md={6}>
                            <h1>Delicious Treats</h1>
                            <p>We believe everyone deserves a treat that not only satisfy hunger, but gives nutritional value to the body.</p>
                            <p>We give our best to keep you healthy and strong.</p>

                            <img src={playstoreIcon} alt="Playstore icon" className={"app-icon"}/>
                            <img src={appstoreIcon} alt="Appstore icon" className={"app-icon"}/>

                            <Button size="lg" className={"header-btn shadow"}>Goto Menu</Button>
                        </Col>

                        <Col md={6}>
                            
                        </Col>

                        <img src={heroImage} alt="Food Recipe" className={"hero-image"}/>

                        <div style={{position: 'relative'}}>
                            <ul className={'social-icons'}>
                                <li><FaFacebookSquare /></li>
                                <li><FaLinkedin /></li>
                                <li><FaTwitterSquare /></li>
                                <li><FaInstagramSquare /></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Header
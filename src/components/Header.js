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

                <Container style={{paddingTop: "85px"}}>
                    <Row>
                    <img src={heroImage} alt="Food Recipe" className={"hero-image-mobile"}/>
                        <Col md={6}>
                            <h1>Delicious Treats</h1>
                            <p>We believe everyone deserves a treat that not only satisfy hunger, but gives nutritional value to the body.</p>
                            <p>We give our best to keep you healthy and strong.</p>

                            <img src={playstoreIcon} alt="Playstore icon" className={"app-icon"}/>
                            <img src={appstoreIcon} alt="Appstore icon" className={"app-icon"}/>

                            <Button size="lg" className={"header-btn shadow"}>Goto Menu</Button>
                        </Col>

                        <Col md={6}>
                            <img src={heroImage} alt="Food Recipe" className={"hero-image"}/>
                        </Col>

                        

                        <div style={{position: 'relative'}}>
                            <ul className={'social-icons'}>
                                <li><a href="https://www.facebook.com/grachefofficial" target="__blank"><FaFacebookSquare /></a></li>
                                <li><a href="#linkedin"><FaLinkedin /></a></li>
                                <li><a href="#twitter"><FaTwitterSquare /></a></li>
                                <li><a href="#instagram"><FaInstagramSquare /></a></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Header
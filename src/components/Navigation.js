import React, { useState } from "react"
import {Navbar, Container, Nav, Badge} from 'react-bootstrap'
import {FaShoppingCart, FaBars} from 'react-icons/fa';
import "../styles/Navigation.css"
import Checkout from './Checkout';


function Navigation(){

    const [showCheckout, setShowCheckout] = useState(false);
    const toggleCheckout = () => {
        if ( showCheckout ){
            setShowCheckout(false);
        } else {
            setShowCheckout(true);
        }
    }

    return(
        <Navbar fixed="top" bg="transparent" expand="lg" style={{paddingTop: '35px', zIndex: 1000}}>
            <Container>
                <Navbar.Brand href="#home" className={"brand-text"} style={{zIndex: -1}}>
                <img
                    alt="Grachef Logo"
                    src="/images/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Grachef
                </Navbar.Brand>
                
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="ml-auto nav-hack">
                    <Nav.Link href="#cart" onClick={toggleCheckout}><FaShoppingCart className="navigation-link" /><sup><Badge pill className={'pill-style'}>276</Badge></sup></Nav.Link>
                        <Nav.Link href="#menu"><FaBars className="navigation-link" /></Nav.Link>
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
            { showCheckout ? <Checkout /> : null }
        </Navbar>
    )
}

export default Navigation;

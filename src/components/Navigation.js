import React, { useState } from "react"
import {Navbar, Container, Nav, Badge} from 'react-bootstrap'
import {FaShoppingCart, FaBars, FaHome} from 'react-icons/fa';
import "../styles/Navigation.css"
import Checkout from './Checkout';
import {Link } from "react-router-dom";



function Navigation(){

    const [showCheckout, setShowCheckout] = useState(false);
    const toggleCheckout = () => {
        if ( showCheckout ){
            setShowCheckout(false);
        } else {
            setShowCheckout(true);
        }
    }

    const [navbarChanged, setNavbarChanged] = useState(false);
    const changeNavbarBackground = () => {
        if(window.scrollY >= 60){
            setNavbarChanged(true);
        }else{
            setNavbarChanged(false);
        }
    }

    window.addEventListener('scroll', changeNavbarBackground);

    return(
        
            <Navbar fixed="top" bg={navbarChanged ? "customized": "transparent"} expand="lg" style={{paddingTop: '10px', zIndex: 1000}}>
                <Container>
                    <Navbar.Brand href="#home" className={"brand-text"} style={{zIndex: -1}}>
                    <img
                        alt="Grachef Logo"
                        src="/images/logo.svg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    Grachef
                    </Navbar.Brand>
                    
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Nav className="ml-auto nav-hack">
                            <Nav.Link as={Link} to="/"><FaHome className={navbarChanged ? "navigation-link-customized" : "navigation-link"} /></Nav.Link>
                            <Nav.Link as={Link} to="/cart"><FaShoppingCart className={navbarChanged ? "navigation-link-customized" : "navigation-link"} /><sup><Badge pill className={'pill-style'}>276</Badge></sup></Nav.Link>
                        </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
                { showCheckout ? <Checkout /> : null }
            </Navbar>

            

        
    )
}

export default Navigation;

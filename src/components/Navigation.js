import React, { useState, useEffect, useRef } from "react"
import {Navbar, Container, Nav, Badge} from 'react-bootstrap'
import {FaShoppingCart, FaHome} from 'react-icons/fa';
import "../styles/Navigation.css"
// import Checkout from './Checkout';
import {Link, useLocation } from "react-router-dom";
import AppContext from "../contexts/AppContext";



function Navigation(){

    const [navbarChanged, setNavbarChanged] = useState(false);
    const {pathname} = useLocation()
    const mountedRef = useRef(true);

    const changeNavbarBackground = () => {
        if(window.scrollY >= 60){
            setNavbarChanged(true);
        }else{
            setNavbarChanged(false);
        }
    }

    // Event fires up on scroll (to change navbar background)
    useEffect(() => {
        if(mountedRef.current){
            window.addEventListener('scroll', changeNavbarBackground);
        }
        return () => {
            window.removeEventListener('scroll', changeNavbarBackground)
            //mountedRef.current = false;
        }
    });

    // Automatically scroll to page top 

    useEffect(() => {
        window.scrollTo(0, 0);
        if(!mountedRef.current) return null;     
    }, [pathname]);

    return(
        <AppContext.Consumer>
            {
                value => {
                    return(
                        <Navbar fixed="top" bg={navbarChanged || pathname !== "/" ? "customized": "transparent"} expand="lg" style={{paddingTop: '10px', zIndex: 1000}}>
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
                                        <Nav.Link as={Link} to="/"><FaHome className={navbarChanged || pathname !== "/" ? "navigation-link-customized" : "navigation-link"} /></Nav.Link>
                                        <Nav.Link as={Link} to="/cart"><FaShoppingCart className={navbarChanged || pathname !== "/" ? "navigation-link-customized" : "navigation-link"} />{ value.getCartItemQuantity() > 0 ? <sup><Badge pill className={'pill-style'}>{value.getCartItemQuantity()}</Badge></sup> : ''}</Nav.Link>
                                    </Nav>
                                {/* </Navbar.Collapse> */}
                            </Container>
                            {/* { showCheckout ? <Checkout /> : null } */}
                        </Navbar>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default Navigation;

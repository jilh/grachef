import {Navbar, Container, Nav, Badge} from 'react-bootstrap'
import {FaShoppingCart, FaBars} from 'react-icons/fa';
import "../styles/Navigation.css"

function Navigation(){
    return(
        <Navbar bg="transparent" expand="lg" style={{paddingTop: '35px'}}>
            <Container>
                <Navbar.Brand href="#home" className={"brand-text"}>
                <img
                    alt="Grachef Logo"
                    src="/images/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Grachef
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home"><FaShoppingCart className="navigation-link" /><sup><Badge pill className={'pill-style'}>276</Badge></sup></Nav.Link>
                        <Nav.Link href="#home"><FaBars className="navigation-link" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;

import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">                   
                    <img src={require("./../../assests/images/logo.png")} alt="logo" className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavLink href="#features">Features</NavLink> */}
                    </Nav>
                    <Nav>
                        <NavLink to="#pricing">HOME</NavLink>
                        <NavDropdown title="PAGE" id="collasible-nav-dropdown">
                            <NavDropdown.Item to="#action/3.1">ABOUT</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2">TESTIMONIAL</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="#deets">PRODUCTS</NavLink>
                        <NavLink to="#deets">BLOG</NavLink>
                        <NavLink to="#deets">CONTACT</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
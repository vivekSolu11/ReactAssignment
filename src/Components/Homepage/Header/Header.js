import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
                <Navbar.Brand >
                    <Link to="/">
                        <img src={require("./../../../assests/images/logo.png")} alt="logo" className='logo' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavLink href="#features">Features</NavLink> */}
                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="/">HOME</Link>
                        <NavDropdown title="PAGE" id="collasible-nav-dropdown">
                            <NavDropdown.Item ><Link className="nav-link" to="/about">ABOUT</Link></NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2"><Link to="/testimonial">TESTIMONIAL</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Link className="nav-link" to="/product">PRODUCTS</Link>
                        <Link className="nav-link" to="/blog">BLOG</Link>
                        <Link className="nav-link" to="/contact">CONTACT</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'




function Header() {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand as={Link} to='/' >Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to='/cart'><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    <Nav.Link as={Link} to='/'><i className="fas fa-user"></i>Login</Nav.Link>

                </Nav>

                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header

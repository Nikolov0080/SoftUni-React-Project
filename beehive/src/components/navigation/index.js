import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


const Navigation = () => {
    return (

        <Navbar style={{ position: 'fixed' }} className="navbar-expand-sm" fixed="top" expand="lg">
            <Navbar.Brand href="#home">Beehive</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link href="#link">Order</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#login">Register</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}


export default Navigation
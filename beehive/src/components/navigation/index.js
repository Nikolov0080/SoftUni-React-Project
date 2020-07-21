import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


const Navigation = () => {
    return (
        <div className="col-lg">
            <Navbar style={{ maxWidth:'960px',margin:"0 auto"}} fixed="top" >
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
        </div>
    )


}


export default Navigation
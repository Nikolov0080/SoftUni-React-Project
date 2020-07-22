import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


const Navigation = () => {
    return (
    
            <Navbar style={{ maxWidth:'1270px',margin:"0 auto"}} variant="light" fixed="top" bg="light" >
                <Navbar.Brand href="#home">Beehive</Navbar.Brand>
                <Navbar.Brand href="#home">Beehive</Navbar.Brand>
                <Navbar.Brand href="#home">Beehive</Navbar.Brand>
                <Navbar.Brand href="#home">Beehive</Navbar.Brand>

                    <Nav className="mr-auto">
                        <Nav.Link href="#link">Order</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#login">Register</Nav.Link>
                    </Nav>

              
            </Navbar>
      
    )


}


export default Navigation
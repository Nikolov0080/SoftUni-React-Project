import React from 'react'
import { Nav, Navbar, Row } from 'react-bootstrap'


const Navigation = () => {
    return (

        <Navbar style={{ maxWidth: '1270px', margin: "0 auto" }} variant="light" fixed="top" bg="light" >

            <Nav className="m-auto">
                <Row className="">

                    <Nav.Link href="/">Beehive</Nav.Link>

                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/order">Order</Nav.Link>

                </Row>

            </Nav>


        </Navbar>

    )


}


export default Navigation
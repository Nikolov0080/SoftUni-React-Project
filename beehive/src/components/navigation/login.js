import React from 'react'
import { Nav } from 'react-bootstrap'

const Login = (props) => {
    if (props.loggedIn) {
        return (
            <Nav.Link href="#login">user logged in</Nav.Link>
        )
    }

    return(
    <Nav.Link href="#login">user {props.isLogged}</Nav.Link>
    )

}

export default Login
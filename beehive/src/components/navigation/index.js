import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './index.module.css';

const Navigation = () => {
    return (

        <Navbar bsStyle="default" className={style.navBar} variant="light" fixed="top" bg="light" >

            <Nav className="m-auto">

                <Nav.Link>
                    <Link bsStyle="default" className={style.navItem} to='/'>Beehive</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link bsStyle="default" className={style.navItem} to='/login'>Login</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link bsStyle="default" className={style.navItem} to='/register'>Register</Link>
                </Nav.Link>
                <NavDropdown bsStyle="default" className={style.navMenu} title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item bsStyle="default" className={style.dropItem} >
                        <Nav.Link>
                            <Link bsStyle="default" className={style.navItem} to='/order'>Place order</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item bsStyle="default" className={style.dropItem}>
                        <Nav.Link>
                            <Link bsStyle="default" className={style.navItem} to='/products'>Our products</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                </NavDropdown>


            </Nav>


        </Navbar>

    )


}


export default Navigation
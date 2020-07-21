import React, { Component } from 'react';
import style from './sidebar.module.css';
import { Nav, NavDropdown } from 'react-bootstrap';

class Sidebar extends Component {


    render() {
        return (
            <div className={style.sidebar_container}>

                <Nav className="navbar-expand-lg"               >
                    <div className={style.splitter1}>
                        <NavDropdown title="Dropdown">
                            <NavDropdown.Item href="#action/3.1">Honey-1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Honey-1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Honey-1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Honey-1</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div className={style.splitter2}>
                        <NavDropdown title="Select honey">
                            <NavDropdown.Item href="#action/3.1">Honey-1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Honey-1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Honey-1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Honey-1</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                   
                </Nav>
 <h1 className={style.helloMessage}>Hello there, lets take a look at the best honey</h1>
            </div>

        )
    }

}

export default Sidebar;
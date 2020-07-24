import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './navItem.module.css'

const NaviItem = ({ link, path }) => {
    return (
        <Nav.Item>
            <Nav.Link >
                <Link to={path}>
                    <h5 className={style.link}>{link}</h5>
                </Link>
            </Nav.Link>
        </Nav.Item>
    )
}

export default NaviItem;
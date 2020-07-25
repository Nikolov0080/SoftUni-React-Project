import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import style from './navItem.module.css'

const NaviItem = ({ link, path }) => {
    return (
        <Nav.Item>
            <NavLink id="RouterNavLink" to={path}  >

                <h5 className={style.link}>{link}</h5>

            </NavLink>
        </Nav.Item>
    )
}

export default NaviItem;
import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from "./Pages";

function Header() {

    const [status, setStatus] = useState(false);
    const [active, setActive] = useState('');

    return (
        <div>
            <div className={`${s.menuBlock} ${status ? s.menuBlockActive : ''}`}>
                <div className={s.menuList}>
                    <NavLink onClick={() => setActive('pre')}
                             className={`${s.menuItem} ${active === 'pre' ? s.menuItemActive : ''}`}
                             to={PATH.PRE_JUNIOR}>Pre Junior</NavLink>
                    <NavLink onClick={() => setActive('jun')}
                             className={`${s.menuItem} ${active === 'jun' ? s.menuItemActive : ''}`}
                             to={PATH.JUNIOR}>Junior</NavLink>
                    <NavLink onClick={() => setActive('plus')}
                             className={`${s.menuItem} ${active === 'plus' ? s.menuItemActive : ''}`}
                             to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink>
                </div>
                <button onMouseEnter={() => setStatus(!status)} className={s.menuButton}></button>
            </div>
        </div>
    )
}

export default Header

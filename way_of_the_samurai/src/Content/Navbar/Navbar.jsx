import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div className={s.Navbar_item}><NavLink to="/profile" className={({isActive}) =>
                isActive ? s.active : undefined}>Profile</NavLink></div>
            <div className={s.Navbar_item}><NavLink to="/dialogs" className={({isActive}) =>
                isActive ? s.active : undefined}>Message</NavLink></div>
            <div className={s.Navbar_item}><NavLink to="/news" className={({isActive}) =>
                isActive ? s.active : undefined}>News</NavLink></div>
            <div className={s.Navbar_item}><NavLink to="/music" className={({isActive}) =>
                isActive ? s.active : undefined}>Music</NavLink></div>
            <div className={s.Navbar_item}><NavLink to="/setting" className={({isActive}) =>
                isActive ? s.active : undefined}>Settings</NavLink></div>
        </div>
    )
}

export default Navbar;

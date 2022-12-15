import React from "react";
import s from './Navbar.module.css'
import NavbarFriends from "./NavbarFriends/NavbarFriends";
import NavbarLinks from "./NavbarLinks/NavbarLinks";

const Navbar = (props) => {

    return (
        <div className={s.wrapper}>
            <div>
                <NavbarLinks/>
            </div>
            <div>
                <NavbarFriends store={props.store}/>
            </div>

        </div>
    )
}

export default Navbar;

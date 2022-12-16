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
                <NavbarFriends state={props.state}/>
            </div>

        </div>
    )

}

export default Navbar;

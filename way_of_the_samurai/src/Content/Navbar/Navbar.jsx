import React from "react";
import s from './Navbar.module.css'
import NavbarFriends from "./NavbarFriends/NavbarFriends";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import StoreContext from "../../redux/StoreContext";

const Navbar = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                return (
                    <div className={s.wrapper}>
                        <div>
                            <NavbarLinks/>
                        </div>
                        <div>
                            <NavbarFriends store={store}/>
                        </div>

                    </div>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default Navbar;

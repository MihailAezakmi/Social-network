import React from "react";
import s from "./NavbarFriends.module.css"
import NavbarFriend from "./NavbarFriend/NavbarFriend";

const NavbarFriends = (props) => {
    let friendElement = props.state.sidebar.friendsData.map(state => <NavbarFriend name={state.name} />)
    return (
        <div className={s.wrapper}>
            <div className={s.friends}>Friends</div>
            <div className={s.friend}>{friendElement}</div>
        </div>



    )
}

export default NavbarFriends
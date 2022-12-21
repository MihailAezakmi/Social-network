import React from "react";
import User from "./User/User";
import style from "./Users.module.css"


const Users = (props) => {

    let user = props.users.map(u => (<User u={u} follow={props.follow} unfollow={props.unfollow}/>))

    return <div className={style.wrapper}>
        <div className={style.text}>Users</div>
        <div className={style.users}>{user}</div>

    </div>


}

export default Users
import React from "react";
import User from "./User/User";
import style from "./Users.module.css"

import axios from "axios";


const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0)
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => props.setUsers(response.data.items))
    }


    let user = props.users.map(u => (<User u={u} follow={props.follow} unfollow={props.unfollow}/>))

    return <div className={style.wrapper}>
        <div className={style.text}>Users</div>
        <div className={style.users}>{user}</div>
        <button onClick={getUsers}>Get users</button>

    </div>


}

export default Users
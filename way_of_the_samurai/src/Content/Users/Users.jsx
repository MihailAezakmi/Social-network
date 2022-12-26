import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => this.props.setUsers(response.data.items))
    }
    user = this.props.users.map(u => (<User u={u} follow={this.props.follow} unfollow={this.props.unfollow}/>))


    render() {

        return <div className={style.wrapper}>
            <div className={style.text}>Users</div>
            <div className={style.users}>{this.user}</div>
        </div>
    }
}

export default Users
import React from "react";
import s from './User.module.css'

const User = (props) => {
    let state = props.u

    return (
        <div className={s.wrapper}>
            <div className={s.AvaButton}>
                <div className={s.Ava}><img src={state.userAva}/></div>
                <div>
                    {
                        state.following ?
                            <button className={s.buttonUnfollow} onClick={() => {props.follow(state.id)}}>Unfollow</button> :
                            <button className={s.buttonFollow}  onClick={() => {props.unfollow(state.id)}}>Follow</button>
                    }
                </div>
            </div>
            <div className={s.data}>
                <div>
                    <div className={s.fullName}>{state.fullName}</div>
                    <div className={s.status}>{state.status}</div>
                </div>
                <div>
                    <div className={s.locCity}>{state.location.city}</div>
                    <div className={s.locCountry}>{state.location.country}</div>
                </div>

            </div>
        </div>
    )
}

export default User
import React from "react";
import s from './User.module.css'
import PhotoUser from "../../photo/photoUser.jpg"

const User = (props) => {
    let state = props.u
debugger
    return (
        <div className={s.wrapper}>
            <div className={s.AvaButton}>
                <div className={s.ava}>{state.photos.small != null ? <img src={state.photos.small} alt=""/> : <img src={PhotoUser} alt=""/>}</div>


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
                    <div className={s.fullName}>{state.name}</div>
                    <div className={s.status}>{state.status}</div>
                </div>
                <div>
                    <div className={s.locCity}>"state.location.city"</div>
                    <div className={s.locCountry}>"state.location.country"</div>
                </div>

            </div>
        </div>
    )
}

export default User
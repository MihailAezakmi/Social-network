import React from "react";
import s from "./ProfileUser.module.css"

const ProfileUser = () => {
    return (
            <div className={s.ProfileUser}>
                <div className={s.Ava}><img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt=""/></div>
                <div className={s.UserInfo}>
                    <div className={s.UserName}>Melnuchyk M</div>
                    <div className={s.UserBirth}>Date in Birth: 02 February</div>
                    <div className={s.UserCity}>City: Hnivan</div>
                    <div className={s.UserGender}>Gender: Man</div>
                </div>
            </div>
    )
}

export default ProfileUser;

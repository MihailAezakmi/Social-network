import React from "react";
import s from "./ProfileUser.module.css"

const ProfileUser = () => {

    return (
            <div className={s.ProfileUser}>
                <div className={s.ProfileUser__Ava}><img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt=""/></div>
                <div className={s.ProfileUser__UserInfo}>
                    <div className={s.ProfileUser_UserName}>Melnuchyk M</div>
                    <div className={s.ProfileUser_UserBirth}>Date in Birth: 02 February</div>
                    <div className={s.ProfileUser_UserCity}>City: Hnivan</div>
                    <div className={s.ProfileUser_UserGender}>Gender: Man</div>
                </div>
            </div>
    )
}

export default ProfileUser;

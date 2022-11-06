import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = () => {
    return (
        <div className={s.ProfileWrapper}>
            <div className={s.HeaderImg}><img
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Fuerteventura_berge1_900px.jpg" alt=""/></div>
            <div >
                <ProfileUser />
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;

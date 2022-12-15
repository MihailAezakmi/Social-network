import React from "react";
import s from "./Profile.module.css"
import ProfileUser from "./ProfileUser/ProfileUser";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {

    return (
        <div className={s.Content}>
            <div className={s.Content__HeaderImg}><img
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Fuerteventura_berge1_900px.jpg" alt=""/></div>
            <div >
                <ProfileUser />
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile;

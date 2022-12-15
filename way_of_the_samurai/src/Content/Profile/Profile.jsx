import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileUser from "./ProfileUser/ProfileUser";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={s.Content}>
            <div className={s.Content__HeaderImg}><img
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Fuerteventura_berge1_900px.jpg" alt=""/></div>
            <div >
                <ProfileUser />
            </div>
            <div>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Profile;

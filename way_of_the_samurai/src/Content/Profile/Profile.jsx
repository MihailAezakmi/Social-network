import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
  return (
      <div className={s.ProfileWrapper}>
        <div className={s.HeaderImg}><img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Fuerteventura_berge1_900px.jpg" /></div>
        <div className={s.ProfileUser}>
            <div className={s.Ava}><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt=""/></div>
            <div className={s.UserInfo}>
                <div className={s.UserName}>Melnuchyk M</div>
                <div className={s.UserBirth}>Date in Birth: 02 February</div>
                <div className={s.UserCity}>City: Hnivan</div>
                <div className={s.UserGender}>Gender: Man</div>
            </div>
        </div>
        <div className={s.UserPosts}>
            <div className={s.MyPost}>My posts</div>
            <div className={s.Posts}>
                <div className={s.Post}>post</div>
                <div className={s.Post}>post</div>
                <div className={s.Post}>post</div>
            </div>
        </div>
      </div>
  )
}

export default Profile;

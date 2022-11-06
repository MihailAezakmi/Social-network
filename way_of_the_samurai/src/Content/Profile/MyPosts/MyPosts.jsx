import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.UserPosts}>
            <div className={s.MyPost}>
                <div>My posts</div>
                <div className={s.TextareaButton}>
                    <div><textarea cols="20" rows="2"/></div>
                    <div>
                        <button>Post</button>
                    </div>
                </div>
            </div>
            <div>
                <Post/>
                <Post/>

            </div>
        </div>
    )
}

export default MyPosts;

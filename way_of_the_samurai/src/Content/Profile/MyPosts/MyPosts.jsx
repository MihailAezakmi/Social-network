import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <div className={s.MyPosts__MyPost}>
                <div>My posts</div>
                <div className={s.MyPosts_TextareaButton}>
                    <div><textarea cols="20" rows="2"/></div>
                    <div>
                        <button>Post</button>
                    </div>
                </div>
            </div>
            <div>
                <Post message={'Hi. it\'s my first projects'} like={26}/>
                <Post message={"Hi, Good game"} like={115}/>

            </div>
        </div>
    )
}

export default MyPosts;

import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData = [
        {id: "1", post: "Hi. its my first projects", like: "20"},
        {id: "2", post: "Hi, Good game", like: "15"},
        {id: "3", post: "хи-хи", like: "1"},
        {id: "4", post: "просто да", like: "100"}
    ]

    let postElements = postData
        .map(post => <Post message={post.post} like={post.like} id={post.id}/>)


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
            {postElements}
            <div>

            </div>
        </div>
    )
}

export default MyPosts;

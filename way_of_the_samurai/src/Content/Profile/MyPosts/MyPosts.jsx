import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData = [
        {id:"1", post:"Hi. its my first projects", like:"20"},
        {id:"2", post:"Hi, Good game", like:"15"}
    ]
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
                <Post message={postData[0].post} like={postData[0].like}
                      id={postData[0].id}/>
                      <Post message={postData[1].post} like={postData[1].like}
                      id={postData[1].id}/>
            </div>
        </div>
    )
}

export default MyPosts;

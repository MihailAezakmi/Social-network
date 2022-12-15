import React from "react";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.postChange(text)
    }

    return (
        <div className={s.MyPosts}>
            <div className={s.MyPosts__MyPost}>
                <div>My posts</div>
                <div className={s.MyPosts_TextareaButton}>
                    <div><textarea onChange={onPostChange} value={props.onNewPostText}/></div>
                    <div>
                        <button onClick={onAddPost}>Post</button>
                    </div>
                </div>
            </div>
            {props.postElements}
            <div>
            </div>
        </div>
    )
}

export default MyPosts;

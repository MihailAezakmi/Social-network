import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/ProfileReducer";

const MyPosts = (props) => {

    let onNewPostText = props.posts.newPostText
    let postElements = props.posts.postData
        .map(post => <Post message={post.post} like={post.like} id={post.id}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <div className={s.MyPosts}>
            <div className={s.MyPosts__MyPost}>
                <div>My posts</div>
                <div className={s.MyPosts_TextareaButton}>
                    <div><textarea onChange={onPostChange} value={onNewPostText}/></div>
                    <div>
                        <button onClick={addPost}>Post</button>
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

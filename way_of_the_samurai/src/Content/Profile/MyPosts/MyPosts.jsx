import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.posts.postData
        .map(post => <Post message={post.post} like={post.like} id={post.id}/>)

    let newPostElement =  React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }


    return (
        <div className={s.MyPosts}>
            <div className={s.MyPosts__MyPost}>
                <div>My posts</div>
                <div className={s.MyPosts_TextareaButton}>
                    <div><textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newPostText} cols="20" rows="2"/></div>
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

import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
debugger
    let postElements = props.posts
        .map(post => <Post message={post.post} like={post.like} id={post.id}/>)

    let newPostElement =  React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }


    return (
        <div className={s.MyPosts}>
            <div className={s.MyPosts__MyPost}>
                <div>My posts</div>
                <div className={s.MyPosts_TextareaButton}>
                    <div><textarea ref={newPostElement} cols="20" rows="2"/></div>
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

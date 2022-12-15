import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let store = props.store.getState();
    let onNewPostText = store.profilePage.newPostText
    let postElements = store.profilePage.postData
        .map(post => <Post message={post.post} like={post.like} id={post.id}/>)

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let postChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    }

    return (
      <MyPosts addPost={addPost} postChange={postChange} onNewPostText={onNewPostText} postElements={postElements}/>
    )
}

export default MyPostsContainer;

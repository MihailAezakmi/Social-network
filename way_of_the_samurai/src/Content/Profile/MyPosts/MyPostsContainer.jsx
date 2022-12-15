import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../redux/StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let onNewPostText = state.profilePage.newPostText
                    let postElements = state.profilePage.postData
                        .map(post => <Post message={post.post} like={post.like} id={post.id}/>)

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let postChange = (text) => {
                        store.dispatch(onPostChangeActionCreator(text))
                    }
                    return (
                        <MyPosts addPost={addPost} postChange={postChange} onNewPostText={onNewPostText}
                                 postElements={postElements}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";

const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText;
            state.newPostText = ""
            state.postData.push({id: "", post: newPost, like: "15"});
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default ProfileReducer;
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";

let initialState = {
    postData: [
        {id: "1", post: "Hi. its my first projects", like: "20"},
        {id: "2", post: "Hi, Good game", like: "15"},
        {id: "3", post: "хи-хи", like: "1"},
        {id: "4", post: "просто да", like: "100"}
    ],
    newPostText: ""
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            let newPost = stateCopy.newPostText;
            stateCopy.postData = [...state.postData]
            stateCopy.newPostText = ""
            stateCopy.postData.push({id: "", post: newPost, like: "15"});
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default ProfileReducer;
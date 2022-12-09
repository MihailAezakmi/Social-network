const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: "1", post: "Hi. its my first projects", like: "20"},
                {id: "2", post: "Hi, Good game", like: "15"},
                {id: "3", post: "хи-хи", like: "1"},
                {id: "4", post: "просто да", like: "100"}
            ],
            newPostText: ""

        },
        dialogsPage: {
            DialogsUserData: [
                {id: "1", name: 'Andrey'},
                {id: "2", name: 'Roman'},
                {id: "3", name: 'Misha'},
                {id: "4", name: 'Ivan'},
                {id: "5", name: 'Sveta'},
            ],
            MessageUserData: [
                {id: "1", message: 'Hello',},
                {id: "2", message: 'GG WP'},
                {id: "3", message: 'Work please'},
                {id: "4", message: 'Like'},
                {id: "5", message: 'Yo'},

            ],
            newMessageBody: ""
        },
        sidebar: {
            friendsData: [
                {id: "1", name: "Andrey"},
                {id: "2", name: "Sveta"},
                {id: "3", name: "Roman"}
            ]
        }
    },
    _callSubscribe() {
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },
    getState() {
        return this._state;
    },
    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = this._state.profilePage.newPostText;
            this._state.profilePage.newPostText = ""
            this._state.profilePage.postData.push({id:"", post: newPost, like:"15"});
            this._callSubscribe(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe(this._state)
        }else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.MessageUserData.push({id:"5", message: body});
            this._callSubscribe(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscribe(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const onMessageChangeCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text})

export default store;
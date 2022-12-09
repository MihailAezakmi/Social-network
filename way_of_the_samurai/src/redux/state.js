import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";

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
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._callSubscribe(this._state)
    }
}

export default store;
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
                {id: "1", message: ['Hello', 'Yoo'], messageMe: 'Hey,bro'},
                {id: "2", message: ['GG WP', 'No'], messageMe: 'WP,GG'},
                {id: "3", message: ['Work please', "Okey"], messageMe: 'Okey,bro'},
                {id: "4", message: ['Like', "Yes"], messageMe: 'No'},
                {id: "5", message: ['Yo', 'Yooooo Yoooooo Yooooo'], messageMe: 'Yoo Yoo Yoo'},

            ]
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
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: "",
            post: this._state.profilePage.newPostText,
            like: "15"
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscribe(this._state)

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscribe(this._state)
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },
    dispatch(action) {
        if (action.type === "ADD_POST") {
            let newPost = {
                id: "",
                post: this._state.profilePage.newPostText,
                like: "15"
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscribe(this._state)
        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe(this._state)
        }


    }

}


export default store;
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    dialogsUserData: [
        {id: "1", name: 'Andrey'},
        {id: "2", name: 'Roman'},
        {id: "3", name: 'Misha'},
        {id: "4", name: 'Ivan'},
        {id: "5", name: 'Sveta'},
    ],
    messageUserData: [
        {id: "1", message: 'Hello',},
        {id: "2", message: 'GG WP'},
        {id: "3", message: 'Work please'},
        {id: "4", message: 'Like'},
        {id: "5", message: 'Yo'},

    ],
    newMessageBody: ""
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                messageUserData: [...state.messageUserData,{id: "5", message: body}],
                newMessageBody: ""
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const onMessageChangeCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text})

export default DialogsReducer;
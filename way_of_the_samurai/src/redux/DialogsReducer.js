const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
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
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.MessageUserData = [...state.MessageUserData]
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ""
            stateCopy.MessageUserData.push({id: "5", message: body});
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const onMessageChangeCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text})

export default DialogsReducer;
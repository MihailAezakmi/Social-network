const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const DialogsReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newMessageBody = ""
        state.MessageUserData.push({id: "5", message: body});
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageBody = action.body
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const onMessageChangeCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text})

export default DialogsReducer;
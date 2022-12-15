import React from "react";
import MessageUser from "./MessageUser/MessageUser";
import {sendMessageCreator, onMessageChangeCreator} from "../../../redux/DialogsReducer";
import Message from "./Message";
import StoreContext from "../../../redux/StoreContext";

const MessageContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let sendMessageBodyClick = () => {
                        store.dispatch(sendMessageCreator())
                    }


                    let messageBodyChange = (text) => {
                        store.dispatch(onMessageChangeCreator(text))
                    }

                    let onNewMessageText = state.dialogsPage.newMessageBody
                    let messageElements = state.dialogsPage.MessageUserData.map(messages => <MessageUser
                        message={messages.message} id={messages.id}/>)

                    return (
                        <Message messageElements={messageElements} onNewMessageText={onNewMessageText}
                                 sendMessageBodyClick={sendMessageBodyClick} messageBodyChange={messageBodyChange}/>

                    )
                }
            }
        </StoreContext.Consumer>
    )

}

export default MessageContainer
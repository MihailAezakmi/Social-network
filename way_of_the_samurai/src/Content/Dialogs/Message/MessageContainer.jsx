import {Route, Routes} from "react-router-dom";
import React from "react";
import s from "./Message.module.css"
import MessageUser from "./MessageUser/MessageUser";
import {sendMessageCreator, onMessageChangeCreator} from "../../../redux/DialogsReducer";
import Message from "./Message";

const MessageContainer = (props) => {
    let store = props.store.getState()

    let sendMessageBodyClick = () => {
        props.store.dispatch(sendMessageCreator())
    }


    let messageBodyChange = (text) => {
        props.store.dispatch(onMessageChangeCreator(text))
    }

    let onNewMessageText = store.dialogsPage.newMessageBody
    let messageElements = store.dialogsPage.MessageUserData.map(messages => <MessageUser message={messages.message} id={messages.id}/>)

    return <Message messageElements={messageElements} onNewMessageText={onNewMessageText} sendMessageBodyClick={sendMessageBodyClick} messageBodyChange={messageBodyChange}/>

}

export default MessageContainer
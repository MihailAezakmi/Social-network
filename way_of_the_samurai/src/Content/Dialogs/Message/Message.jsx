import {Route, Routes} from "react-router-dom";
import React from "react";
import s from "./Message.module.css"
import MessageUser from "./MessageUser/MessageUser";
import {sendMessageCreator, onMessageChangeCreator} from "../../../redux/state";

const Message = (props) => {
    let sendMessageBodyClick = () => {
        props.dispatch(sendMessageCreator())
    }


    let onMessageBodyChange = (e) => {
        let text = e.target.value
        props.dispatch(onMessageChangeCreator(text))
    }

    let onNewMessageText = props.messageUser.newMessageBody
    let MessageElements = props.messageUser.MessageUserData.map(messages => <MessageUser message={messages.message} id={messages.id}/>)
    return (
        <div className={s.message}>
            {MessageElements}
            <div className={s.addMessage}>
                <div className={s.textarea}>
                    <textarea  onChange={onMessageBodyChange} value={onNewMessageText} cols="30" rows="3"></textarea>
                </div>
                <div className={s.button}>
                    <button onClick={sendMessageBodyClick}>Add Message</button>
                </div>
            </div>

        </div>
    )
}

export default Message
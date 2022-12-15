import {Route, Routes} from "react-router-dom";
import React from "react";
import s from "./Message.module.css"
import MessageUser from "./MessageUser/MessageUser";
import {sendMessageCreator, onMessageChangeCreator} from "../../../redux/DialogsReducer";

const Message = (props) => {
    let onSendMessageBodyClick = () => {
        props.sendMessageBodyClick()
    }


    let onMessageBodyChange = (e) => {
        let text = e.target.value
        props.messageBodyChange(text)
    }

    return (
        <div className={s.message}>
            {props.messageElements}
            <div className={s.addMessage}>
                <div className={s.textarea}>
                    <textarea  onChange={onMessageBodyChange} value={props.onNewMessageText} cols="30" rows="3"></textarea>
                </div>
                <div className={s.button}>
                    <button onClick={onSendMessageBodyClick}>Add Message</button>
                </div>
            </div>

        </div>
    )
}

export default Message
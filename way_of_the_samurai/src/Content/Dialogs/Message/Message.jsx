import {Route, Routes} from "react-router-dom";
import React from "react";
import s from "./Message.module.css"
import MessageUser from "./MessageUser/MessageUser";

const Message = (props) => {
    let MessageElements = props.MessageData.map(messages => <MessageUser message={messages.message} id={messages.id}/>)
    return (
        <div className={s.message}>
            {MessageElements}
        </div>
    )
}

export default Message
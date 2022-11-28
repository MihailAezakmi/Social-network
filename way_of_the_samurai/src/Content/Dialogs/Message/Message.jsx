import {Route, Routes} from "react-router-dom";
import React from "react";
import s from "./Message.module.css"
import MessageUser from "./MessageUser/MessageUser";

const Message = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () =>{
        let text = newMessageElement.current.value;
        alert(text)
    }
    let MessageElements = props.messageUser.map(messages => <MessageUser message={messages.message} id={messages.id}/>)
    return (
        <div className={s.message}>
            {MessageElements}
            <textarea ref={newMessageElement} id="" cols="30" rows="3"></textarea>
            <button onClick={addMessage}>Add Message</button>
        </div>
    )
}

export default Message
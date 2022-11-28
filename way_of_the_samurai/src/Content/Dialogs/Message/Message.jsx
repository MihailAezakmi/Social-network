import {Route, Routes} from "react-router-dom";
import React from "react";
import s from "./Message.module.css"
import MessageUser from "./MessageUser/MessageUser";

const Message = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }
    let MessageElements = props.messageUser.map(messages => <MessageUser message={messages.message} id={messages.id}
                                                                         messageMe={messages.messageMe}/>)
    return (
        <div className={s.message}>
            {MessageElements}
            <div className={s.addMessage}>
                <div className={s.textarea}><textarea ref={newMessageElement} id="" cols="30" rows="3"></textarea></div>
                <div className={s.button}>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>

        </div>
    )
}

export default Message
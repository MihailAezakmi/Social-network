import {Route, Routes} from "react-router-dom";
import React from "react";
import s from "./Message.module.css"

const MessageUser = (props) => {
    return <div>
        <Routes>
            <Route path={props.id} element={props.message}/>
        </Routes>
    </div>
}

const Message = (props) => {
    return (
        <div className={s.message}>
            <MessageUser message={props.MessageData[0].message} id={props.MessageData[0].id}/>
            <MessageUser message={props.MessageData[1].message} id={props.MessageData[1].id}/>
            <MessageUser message={props.MessageData[2].message} id={props.MessageData[2].id}/>
            <MessageUser message={props.MessageData[3].message} id={props.MessageData[3].id}/>
            <MessageUser message={props.MessageData[4].message} id={props.MessageData[4].id}/>
        </div>
    )
}

export default Message
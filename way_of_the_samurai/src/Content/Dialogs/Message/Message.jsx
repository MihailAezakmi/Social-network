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
            <MessageUser message={"Hi"} id={"1"}/>
            <MessageUser message={"Yoo"} id={"2"}/>
            <MessageUser message={"GG,WP"} id={"3"}/>
            <MessageUser message={"Hello"} id={"4"}/>
            <MessageUser message={"Good day"} id={"5"}/>
        </div>
    )
}

export default Message
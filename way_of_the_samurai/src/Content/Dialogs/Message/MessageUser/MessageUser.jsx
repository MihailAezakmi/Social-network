import {Route, Routes} from "react-router-dom";
import React from "react";
import MessageUserText from "./MessageUserText";

const MessageUser = (props) => {

    return <div>
        <Routes>
            <Route path={props.id} element={<MessageUserText message={props.message} />}/>

        </Routes>

    </div>
}

export default MessageUser
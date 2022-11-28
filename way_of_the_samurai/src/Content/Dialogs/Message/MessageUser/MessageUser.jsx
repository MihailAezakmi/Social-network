import {Route, Routes} from "react-router-dom";
import React from "react";

const MessageUser = (props) => {

    return <div>
        <Routes>
            <Route path={props.id} element={props.message}/>

        </Routes>

    </div>
}

export default MessageUser
import React from "react";
import s from "./Dialogs.module.css"
import MessageContainer from "./Message/MessageContainer";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsElements}
            </div>
            <div>
                <MessageContainer/>
            </div>

        </div>
    )
}


export default Dialogs







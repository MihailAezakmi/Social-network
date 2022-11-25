import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogsUser from "./DialigsUser/DialogsUser";

const Dialogs = (props) => {



    let DialogsElements = props.state.DialogsUserData.map(name => <DialogsUser user={name.name} id={name.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}
            </div>
            <div>
                <Message messageUser={props.state.MessageUserData}/>
            </div>

        </div>
    )
}


export default Dialogs







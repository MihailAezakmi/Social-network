import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogsUser from "./DialigsUser/DialogsUser";
import MessageContainer from "./Message/MessageContainer";

const Dialogs = (props) => {


    let store = props.store.getState()
    let DialogsElements = store.dialogsPage.DialogsUserData.map(name => <DialogsUser user={name.name} id={name.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}
            </div>
            <div>
                <MessageContainer store={props.store} messageUser={props.state} dispatch={props.dispatch}/>
            </div>

        </div>
    )
}


export default Dialogs







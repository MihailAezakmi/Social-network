import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogsUser from "./DialigsUser/DialogsUser";

const Dialogs = () => {

    let DialogsData = [
        {id: "1", name: 'Andrey'},
        {id: "2", name: 'Roman'},
        {id: "3", name: 'Misha'},
        {id: "4", name: 'Ivan'},
        {id: "5", name: 'Sveta'},

    ]

    let MessageData = [
        {id: "1", message: 'Hello'},
        {id: "2", message: 'GG WP'},
        {id: "3", message: 'Work please'},
        {id: "4", message: 'Like'},
        {id: "5", message: 'Yo'},

    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsUser user={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogsUser user={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogsUser user={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogsUser user={DialogsData[3].name} id={DialogsData[3].id}/>
                <DialogsUser user={DialogsData[4].name} id={DialogsData[4].id}/>
            </div>
            <div>
                <Message MessageData={MessageData}/>
            </div>

        </div>
    )
}


export default Dialogs







import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialigsUser from "./DialigsUser/DialigsUser";

const Dialogs = () => {

return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialigsUser user={"Andrey"} id={"1"}/>
                <DialigsUser user={"Roman"} id={"2"}/>
                <DialigsUser user={"Misha"} id={"3"}/>
                <DialigsUser user={"Ivan"} id={"4"}/>
                <DialigsUser user={"Sveta"} id={"5"}/>
            </div>
            <div>
                <Message />
            </div>

        </div>
    )
}


export default Dialogs







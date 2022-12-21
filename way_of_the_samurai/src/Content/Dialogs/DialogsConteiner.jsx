import React from "react";
import DialogsUser from "./DialigsUser/DialogsUser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogsUserData.map(name => <DialogsUser user={name.name} id={name.id}/>)
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer







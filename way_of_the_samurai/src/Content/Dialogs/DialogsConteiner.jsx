import React from "react";
import DialogsUser from "./DialigsUser/DialogsUser";
import Dialogs from "./Dialogs";
import StoreContext from "../../redux/StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let dialogsElements = state.dialogsPage.DialogsUserData.map(name => <DialogsUser user={name.name}
                                                                                                     id={name.id}/>)

                    return (
                        <Dialogs dialogsElements={dialogsElements}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer







import React from "react";
import MessageUser from "./MessageUser/MessageUser";
import {sendMessageCreator, onMessageChangeCreator} from "../../../redux/dialogs-reducer";
import Message from "./Message";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        onNewMessageText:state.dialogsPage.newMessageBody,
        messageElements:state.dialogsPage.messageUserData.map(messages => <MessageUser
            message={messages.message} key={messages.id} id={messages.id}/>)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageBodyClick: () => {dispatch(sendMessageCreator())},
        messageBodyChange:(text) => {dispatch(onMessageChangeCreator(text))}
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)


export default MessageContainer
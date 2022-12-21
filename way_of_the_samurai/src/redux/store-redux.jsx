import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer"

const reducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    sidebar:sidebarReducer
})

const store = createStore(reducer)

export default store
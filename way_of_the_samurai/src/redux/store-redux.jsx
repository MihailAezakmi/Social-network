import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer"
import UsersReducer from "./users-reducer";

const reducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    sidebar:sidebarReducer,
    usersPage:UsersReducer
})

const store = createStore(reducer)

export default store
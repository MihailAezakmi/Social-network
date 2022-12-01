import React from "react";
import s from './App.module.css';
import Header from "./Content/Header/Header";
import Navbar from "./Content/Navbar/Navbar";
import Profile from "./Content/Profile/Profile";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./Content/News/News";
import Music from "./Content/Music/Music";
import Setting from "./Content/Setting/Setting";
import {updateNewPostText} from "./redux/state";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <div className={s.Header}><Header/></div>
                <div className={s.Navbar}><Navbar state={props.state.sidebar}/></div>
                <Routes className={s.Profile}>
                    <Route path='/profile' element={<Profile updateNewPostText={props.updateNewPostText} addPost={props.addPost} state={props.state.profilePage}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                </Routes>


            </div>
        </BrowserRouter>
    )
}

export default App;

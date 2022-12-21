import React from "react";
import s from './App.module.css';
import Header from "./Content/Header/Header";
import Profile from "./Content/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./Content/News/News";
import Music from "./Content/Music/Music";
import DialogsContainer from "./Content/Dialogs/DialogsConteiner";
import NavbarContainer from "./Content/Navbar/NavbarContainer";
import UsersContainer from "./Content/Users/UsersContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <div className={s.Header}><Header/></div>
                <div className={s.Navbar}><NavbarContainer/></div>
                <Routes className={s.Profile}>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;

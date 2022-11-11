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

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <div className={s.Header}><Header/></div>
                <div className={s.Navbar}><Navbar/></div>
                <Routes className={s.Profile}>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Dialogs' element={<Dialogs/>}/>
                    <Route path='/News' element={<News/>}/>
                    <Route path='/Music' element={<Music/>}/>
                    <Route path='/Setting' element={<Setting/>}/>
                </Routes>


            </div>
        </BrowserRouter>
    )
}

export default App;

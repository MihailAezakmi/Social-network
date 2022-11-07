import React from "react";
import s from './App.module.css';
import Header from "./Content/Header/Header";
import Navbar from "./Content/Navbar/Navbar";
import Profile from "./Content/Profile/Profile";
import Dialogs from "./Content/Dialogs/Dialogs";


const App = () => {
    return (
        <div className={s.AppWrapper}>
            <div className={s.Header}><Header/></div>
            <div className={s.Navbar}><Navbar/></div>
            <div className={s.Profile}>
                {/*<Profile/>*/}
                <Dialogs />

            </div>


        </div>
    )
}

export default App;

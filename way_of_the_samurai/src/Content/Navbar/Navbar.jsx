import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
      <div className={s.Navbar}>
         <div className={s.Navbar_item}><a href="/Profile">Profile</a></div>
         <div className={s.Navbar_item}><a href="/Dialogs">Message</a></div>
         <div className={s.Navbar_item}><a href="/News">News</a></div>
         <div className={s.Navbar_item}><a href="/Music">Music</a></div>
         <div className={s.Navbar_item}><a href="/Setting">Settings</a></div>
      </div>
  )
}

export default Navbar;

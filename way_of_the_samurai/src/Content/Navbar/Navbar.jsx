import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
      <div className={s.Navbar}>
         <div className={s.Navbar_item}>Profile</div>
         <div className={s.Navbar_item}>Messages</div>
         <div className={s.Navbar_item}>News</div>
         <div className={s.Navbar_item}>Music</div>
         <div className={s.Navbar_item}>Settings</div>
      </div>
  )
}

export default Navbar;

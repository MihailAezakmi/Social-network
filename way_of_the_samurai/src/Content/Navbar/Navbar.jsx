import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
      <div className={s.NavbarWrapper}>
         <div className={s.item}>Profile</div>
         <div className={s.item}>Messages</div>
         <div className={s.item}>News</div>
         <div className={s.item}>Music</div>
         <div className={s.item}>Settings</div>
      </div>
  )
}

export default Navbar;

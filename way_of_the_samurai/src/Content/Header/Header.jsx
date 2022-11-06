import React from "react";
import s from './Header.module.css'

const Header = () => {
  return (
      <div className={s.HeaderWrapper}>
        <div className={s.HeaderImg}> <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" alt=""/></div>
        <div className={s.HeaderName}><p>Social network</p></div>
      </div>
  )
}

export default Header;

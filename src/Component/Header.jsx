import React, { useState } from "react";
import ap from './../App.module.css';
import Burger from "./Burger/Burger";
import Language from "./Language";

const Header = ({ state, chengeState }) => {
  const [isActiveLanguage, setIsActiveLanguage] = useState(false);

  return (
    <div onClick={() => setIsActiveLanguage(false)} className={ap.wrapper}>
      <header className={ap.header}>
        <div className={ap.container}>
          <div className={ap.language} onClick={(e) => e.stopPropagation()} >
            <Language state={state} chengeState={chengeState} isActiveLanguage={isActiveLanguage} setIsActiveLanguage={setIsActiveLanguage} />
          </div>
          <div className={ap.container_header_burger}>
            <Burger />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
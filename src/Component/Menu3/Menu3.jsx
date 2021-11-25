import React from "react";
import men from './Menu3.module.css';

const Menu3 = ({ headerText, text }) => {

    return (<div className={men.wrapper}>
        <div className={men.container}>
            <p className={men.header_menu3}>
                {headerText}
            </p>
            <p className={men.text}>
                {text}
            </p>
        </div>
    </div>
    )
};

export default Menu3;
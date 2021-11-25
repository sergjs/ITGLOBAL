import React, { useState } from "react";
import bu from '../Burger/Burger.module.css';
import Spoiler from "../Spoiler/Spoiler";

const ElemLi = ({ name, fonstSizePer, lineHeightPer }) => {
    const [isActive, setIsActive] = useState(true);

    const changeActivity = (bool) => {
        setIsActive(bool)
    }

    return (
        <li onClick={() => changeActivity(!isActive)} className={bu.elem_li} key=''>
            <div className={bu.header_link} style={{ lineHeight: lineHeightPer + 'px', fontSize: fonstSizePer + 'px' }} >
                {name}
            </div>
            <div className={bu.spoiler}><Spoiler /></div>
        </li>

    )
}
export default ElemLi;
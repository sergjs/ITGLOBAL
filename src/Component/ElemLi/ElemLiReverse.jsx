import React from "react";
import elr from './ElemLiReverse.module.css';
import Spoiler from "../Spoiler/Spoiler";

const ElemLiReverse = ({ name, fonstSizePer, lineHeightPer, deg }) => {


    return (
        <li className={elr.elem_li}>
            <div className={elr.spoiler}><Spoiler deg={deg} /></div>
            <div className={elr.header_link} style={{ lineHeight: lineHeightPer + 'px', fontSize: fonstSizePer + 'px' }} >
                {name}
            </div>
        </li>
    )
}
export default ElemLiReverse;
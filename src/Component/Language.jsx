import React, { useState } from "react";
import la from './Language.module.css';
import RU from './../img/Icon_RU.png';
import Spoiler from "./Spoiler/Spoiler";


const Language = ({ state, chengeState, isActiveLanguage, setIsActiveLanguage }) => {
    const [nameCountry, setNameCountry] = useState('RU');
    const [flag, setFlag] = useState(RU);


    const getSelection = (e) => {
        for (let i = 0; i < state.length; i++) {
            if (state[i].country.replace(/\s/g, '') == e.target.innerText.replace(/\s/g, '')) {
                setNameCountry(state[i].shortName)
                setFlag(state[i].icon)
                chengeState(i, true)
            } else {
                chengeState(i, false)
            }
        }
    };

    return (
        <div onClick={() => setIsActiveLanguage(!isActiveLanguage)}>
            <div className={!isActiveLanguage ? la.wrapper : la.wrapper + ' ' + la.active} >
                <img src={flag} className={la.country} />
                <div className={la.name_country}> {nameCountry} </div>
                <div className={!isActiveLanguage ? la.arrow : la.arrow + " " + la.active}> </div>
            </div>
            <div onClick={(e) => e.stopPropagation()} className={!isActiveLanguage ? la.container : la.container + " " + la.active}>
                <div className={la.country_head_box} >
                    <div className={la.country_head}> Страна </div>
                </div>
                <div onClick={(e) => getSelection(e)}>
                    {state.map((elem) =>
                        <div className={la.country_head_box}>
                            <img src={elem.icon} className={la.icon} />
                            <div className={elem.active ? la.area_name_country + ' ' + la.active_country : la.area_name_country}>
                                {elem.country}
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}


export default Language;
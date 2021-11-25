import React from "react";
import sp from './Spoiler.module.css'

const Spoiler = ({ isActive = true, deg = -90, color = '#1D7DED' }) => {

    return <div style={{ transform: 'rotate(' + deg + 'deg)', backgroundColor: { color }, borderColor: { color } }}
        className={isActive ? sp.arrow : sp.arrow + " " + sp.active}> </div>
}

export default (Spoiler);
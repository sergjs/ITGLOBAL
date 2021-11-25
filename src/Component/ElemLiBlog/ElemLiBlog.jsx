import React from "react";
import ElemLi from "../ElemLi/ElemLi";


const ElemLiBlog = ({name1, name2, name3,name4, lineHeightPer, fonstSizePer}) => {


    return (<>
        <ElemLi fonstSizePer={fonstSizePer} lineHeightPer={lineHeightPer} name={name1} /> 
        <ElemLi fonstSizePer={fonstSizePer} lineHeightPer={lineHeightPer} name={name2} />
        <ElemLi fonstSizePer={fonstSizePer} lineHeightPer={lineHeightPer} name={name3} />
        <ElemLi fonstSizePer={fonstSizePer} lineHeightPer={lineHeightPer} name={name4} />
    </>
    )
}

export default ElemLiBlog;
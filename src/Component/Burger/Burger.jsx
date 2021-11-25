import React, { useState } from "react";
import ElemLiReverse from "../ElemLi/ElemLiReverse";
import ElemLiBlog from "../ElemLiBlog/ElemLiBlog";
import bu from './Burger.module.css';
import Menu3 from "../Menu3/Menu3";

const Burger = () => {
    const [isActive, setIsActive] = useState(true);
    const [marginLeft, setMarginLeft] = useState(0);
    const [nameHeader, setNameHeader] = useState('');
    const [nameHeader2, setNameHeader2] = useState('');

    const changeMarginLeft = () => {
    if(!isActive) {
        setMarginLeft(0)
    }
    }

    return (<>
        <div onClick={() => {setIsActive(!isActive); changeMarginLeft()}} className={bu.header_burger}><span></span>
            <div className={isActive ? bu.header_b_1 : bu.header_b_1 + ' ' + bu.active}></div>
            <div className={isActive ? bu.header_b_2 : bu.header_b_2 + ' ' + bu.active}></div>
            <div className={isActive ? bu.header_b_3 : bu.header_b_3 + ' ' + bu.active}></div>
        </div>

        <nav className={isActive ? bu.header_menu : bu.header_menu + ' ' + bu.active}>
            <div className={bu.wrapper_elem_li} >
                <div className={bu.container} style={{ marginLeft: marginLeft + 'px' }} >
                    <div onClick={(e) => { setNameHeader(e.target.innerHTML); setMarginLeft(-320) }}
                        className={bu.header_list}>
                        <ElemLiBlog name1={'Services'} name2={'Managed IT'}
                            name3={'Telecom Solutions'} name4={'About Us'}
                            fonstSizePer='22'
                            lineHeightPer='32' />
                        <div onClick={(e) =>  e.stopPropagation()} className={bu.contacts} >
                            <p>Контакты</p>
                            <p>Поиск</p>
                        </div>
                    </div>

                    <div className={bu.header_list}>
                        <div className={bu.title_menu} onClick={() => setMarginLeft(0)} > <ElemLiReverse fonstSizePer='22'
                            lineHeightPer='32' name={nameHeader} deg='90' /> </div>
                        <div onClick={(e) => { setNameHeader2(e.target.innerHTML); setMarginLeft(-660) }} >
                            <ElemLiBlog name1={'Облачные вычисления'} name2={'Выделенные серверы'}
                                name3={'Платформенные сервисы'} name4={'Информационная \n безопасность'}
                                fonstSizePer='18'
                                lineHeightPer='30' />
                        </div>
                    </div>
                    <div className={bu.header_list}>
                        <div className={bu.title_menu3} onClick={() => setMarginLeft(-320)}  > <ElemLiReverse fonstSizePer='22'
                            lineHeightPer='32' name={nameHeader2} deg='90' /> </div>
                        <div className={bu.separator}></div>
                        <div className={bu.container_menu3}>
                            <Menu3 headerText={'Cloud consulting'}
                                text={'Relational database services for MySQL, PostgreSQL, and SQL server.'} />
                            <Menu3 headerText={'Cloud consulting'}
                                text={'Relational database services for MySQL, PostgreSQL, and SQL server.Relational database services for MySQL, PostgreSQL, and SQL server.' +
                                    'Relational database.base services for MySQL, PostgreSQL, and SQL server.Relational database services for MySQL'} />
                            <Menu3 headerText={'Cloud consulting'}
                                text={'Relational database services for MySQL, PostgreSQL, and SQL server.'} />
                            <Menu3 headerText={'Cloud consulting'}
                                text={'Relational database services for MySQL, PostgreSQL, and SQL server.'} />
                            <Menu3 headerText={'Cloud consulting'}
                                text={'Relational database services for MySQL, PostgreSQL, and SQL server.'} />
                            <Menu3 headerText={'Cloud consulting'}
                                text={'Relational database services for MySQL, PostgreSQL, and SQL server.'} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Burger;
import React, {useEffect, useState} from 'react';
import styles from './cardStyled.module.css';



const Card = (props) => {

    const disable = props.disable;
    const active = props.active;
    const onClick = props.onClick;
    const style = props.style;



    return <div className= {style}
        onClick={onClick}>
        <img className={`grid-img`} src={props.imgSource}></img>
    </div>
}


export default Card;
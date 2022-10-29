import React, { useState, useEffect } from 'react';
//import './card.css'
import styles from './cardStyled.module.css';
import CardsBoard from './cardBoard'



const Card = (props) => {

    const disable = props.disable;
    const active = props.active;

      const onClick=props.onClick;

    return <div className={`${styles['card']} ${props.disable && styles.finished} ${!props.disable && props.active && styles.revealed}`} 
            onClick={onClick}>
            <img src={props.imgSource}></img>
            </div>
}


export default Card;
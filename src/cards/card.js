import React, { useState, useEffect } from 'react';
import './card.css'
import CardImg from './cardImage';
import CardsBoard from './cardBoard'


import hogward from './img/hogwards.jpg'
import harry from './img/harry.jpg'
import ron from './img/ron.jpg'
import hermione from './img/hermione.jpg'
import dumpledore from './img/dumbledore.jpg'
import voldemort from './img/voldemort.jpg'
import dobby from './img/dobby.jpg'



const Card = (props) => {

    let activeCharacter = props.character;
    const [wasClicked, setCardClickedState] = useState(true);
    const [disable, setCardAsDisable] = useState(false);
    const id = props.id;
    if(props.disable)
        console.log(props.disable);


        
        
    useEffect(() => {
        if(props.disable)
        console.log(props.disable);
      }, [props.disable]);

    
      const onClick=props.onClick;

    return <div className={wasClicked ? 'card' : 'cardRevealed'} onClick={onClick}>
       {/*  <CardImg id={id} activeCard={activeCharacter} isActive={wasClicked ? true : false} /> */}
       <img src={props.imgSource}></img>
        </div>
}


export default Card;
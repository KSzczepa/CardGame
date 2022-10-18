import React, { useState } from 'react';
import './card.css'
import CardImg from './cardImage';

const Card = (props) => {
    
    let activeCharacter = props.character;
    const [wasClicked, setCardClickedState] = useState(true);
    //const [disable, setCardAsDisable] = useState(props.disable);

    const clickCardHandler = () => {        
        setCardClickedState(!wasClicked);        
        props.clickedCard(wasClicked);
    }

    

    return <div className={wasClicked ? 'card' : 'cardRevealed'} onClick={clickCardHandler}><CardImg activeCard={activeCharacter} isActive={wasClicked ? false : true}/></div>
    //return <div className={wasClicked ? 'card' : 'cardRevealed'} onClick={clickCardHandler} style={{backgroundImage : {revealCard}}}></div>
    //return <div className={wasClicked ? 'card' : 'cardRevealed'} onClick={clickCardHandler} style={{backgroundImage : `url(${visibleCardSide})`}}></div>
   
}

export default Card;
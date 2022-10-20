import React, { useState, useEffect } from 'react';
import './card.css'
import CardImg from './cardImage';
import CardsBoard from './cardBoard'

const Card = (props) => {

    let activeCharacter = props.character;
    const [wasClicked, setCardClickedState] = useState(true);
    const [disable, setCardAsDisable] = useState(false);
    const id = props.id;
    if(props.disable)
        console.log(props.disable);


    const clickCardHandler = () => {
        if (!disable) {
            setCardClickedState(!wasClicked);
            props.clickedCard({ id: id, hero: activeCharacter, status: wasClicked });
            setCardAsDisable(true);
        }
    }
        
    useEffect(() => {
        if(props.disable)
        console.log(props.disable);
      }, [props.disable]);

    


    return <div className={wasClicked ? 'card' : 'cardRevealed'} onClick={clickCardHandler}><CardImg id={id} activeCard={activeCharacter} isActive={wasClicked ? true : false} /></div>
}


export default Card;
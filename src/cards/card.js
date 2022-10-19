import React, { useState } from 'react';
import './card.css'
import CardImg from './cardImage';

const Card = (props) => {
    
    let activeCharacter = props.character;
    const [wasClicked, setCardClickedState] = useState(true);
    const [disable, setCardAsDisable] = useState(false);
    const id = props.id;
    

    const clickCardHandler = () => {   
        if (!disable){    
            setCardClickedState(!wasClicked);        
            props.clickedCard({id: id, hero: activeCharacter, status: wasClicked});
            setCardAsDisable(true);
            //props.disable({id: id, status: disable});
        }

    }

    const activationCardHandler = () => {
        /* props.disable({id: id, status: disable}); */
    }

    return <div className={wasClicked ? 'card' : 'cardRevealed'} onClick={clickCardHandler}><CardImg id={id} activeCard={activeCharacter} isActive={wasClicked ? true : false}/></div>
    
}

export default Card;
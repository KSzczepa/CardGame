import React, { useState } from 'react';
import './cardBoard.css';
import Card from './card.js';
import getRandomCardsOrder from './RandomCardsNum';


const CardsBoard = (props) => {

     const clickedCardHandler = (reveivedData) => {
        const clicked = reveivedData;
        console.log('clicked!', clicked);
     };

    
     
    const characters = props.items;

    const charactersSorted = getRandomCardsOrder(characters, 12);
    for (let i=0; i<12; i++){
        charactersSorted.splice(i, 1, {id: i, character: charactersSorted[i]});
    }

    return (<div className='board'>

            {charactersSorted.map((element) => (
            <Card 
                key={element.id} 
                character={element.character} 
                disable={true}
                clickedCard={clickedCardHandler}>                
            </Card>))}

        <div className='score'>Turn counter: 0</div>
    </div>)
}


export default CardsBoard;
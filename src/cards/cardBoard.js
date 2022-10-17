import React, { useState } from 'react';
import './cardBoard.css';
import Card from './card.js';
import getRandomCardsOrder from './RandomCardsNum';


const CardsBoard = (props) => {
    const numberOfCards = props.items.length*2;
    const characters = props.items;
    let board = <p>There is not enough cards to display.</p>;
    /* const defaulfImage = 'img/hogwards.jpg';
    let image = 'img/' + props.character + '.jpg';
    let visibleCardSide = defaulfImage; */
    

     const clickedCardHandler = (reveivedData) => {
        const clicked = reveivedData;
        console.log('clicked!', clicked);
     };

    /*  const revealCard = (isActive) => {
        isActive ? (visibleCardSide = image) : (visibleCardSide = defaulfImage);
        console.log(visibleCardSide);
    } */

    if (numberOfCards != 0) {
        const charactersSorted = getRandomCardsOrder(characters, numberOfCards);

        for (let i=0; i<numberOfCards; i++){
            charactersSorted.splice(i, 1, {id: i, character: charactersSorted[i]});
        }
        
        board = charactersSorted.map((element) => (
            <Card 
                key={element.id} 
                character={element.character} 
                disable={true}
                clickedCard={clickedCardHandler}          
            />))
    }

    return (<div className='board'>
                {board}          
                <div className='score'>Turn counter: 0</div>
            </div>)
}


export default CardsBoard;
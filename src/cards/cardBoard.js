import React, { useState } from 'react';
import './cardBoard.css';
import Card from './card.js';
import getRandomCardsOrder from './RandomCardsNum';

/* const [name, setCardName] = useState(

);
 */
const CardsBoard = (props) => {

    
    const characters = props.items;
    //console.log(characters);

    const charactersSorted = getRandomCardsOrder(characters, 12);
    //console.log('cards22222');
    //console.log(charactersSorted);

    return (<div className='board'>
        <Card id={0} character={charactersSorted[0]}></Card>
        <Card id={1} character={charactersSorted[1]}></Card>
        <Card id={2} character={charactersSorted[2]}></Card>
        <Card id={3} character={charactersSorted[3]}></Card>
        <Card id={4} character={charactersSorted[4]}></Card>
        <Card id={5} character={charactersSorted[5]}></Card>
        <Card id={6} character={charactersSorted[6]}></Card>
        <Card id={7} character={charactersSorted[7]}></Card>
        <Card id={8} character={charactersSorted[8]}></Card>
        <Card id={9} character={charactersSorted[9]}></Card>
        <Card id={10} character={charactersSorted[10]}></Card>
        <Card id={11} character={charactersSorted[11]}></Card>
        <div className='score'>Turn counter: 0</div>
    </div>)
}


export default CardsBoard;
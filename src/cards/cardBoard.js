import React, { useState } from 'react';
import './cardBoard.css';
import Card from './card.js';
import getRandomCardsOrder from './RandomCardsNum';
import Counter from '../counter.js';
import SortCards from './sortCards.js'

const SetBoard = () => {

}


const CardsBoard = (props) => {

    //const [counter, setScore] = useState(0);
    const [disableState, setState] = useState(false);

    const numberOfCards = props.items.length * 2;
    const characters = props.items;
    let board = <p>There is not enough cards to display.</p>;
    let firstHero = null;
    let counter = 0;
    let score = <div className='score'>Turn counter: 0</div>;

    const clickedCardHandler = (reveivedData) => {
        const clicked = reveivedData.status;
        let secondHero = board[reveivedData.id];
        console.log('clicked!', reveivedData);
        //console.log('b****', board[reveivedData.id]);
        
        if (firstHero == null){
            firstHero = secondHero;
            setState(true);
            console.log(board[reveivedData.id].props.disable);
        }
        else {
            console.log('first:', firstHero.props.character, 'second:', secondHero.props.character);
            if (firstHero.props.character == secondHero.props.character){
                counter++;
                console.log(counter);
                //setScore(counter+1);
            }
            else {
                firstHero = null;
                secondHero = null;
                
            }

        }
        
        
    };


    if (numberOfCards != 0) {
                     
        const charactersSorted = SortCards(characters, numberOfCards);
        console.log(charactersSorted[0]);

        board = charactersSorted.map((element) => (
            <Card
                key={element.id}
                id={element.id}
                character={element.character}
                disable={element.disable}
                clickedCard={clickedCardHandler}
            />))
    }


    

    return (<div className='board'>
        {board}
        <Counter score={counter}></Counter>
    </div>)
}


export default CardsBoard;
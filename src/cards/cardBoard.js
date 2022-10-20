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

    const [boardSorted, setArrayVal] = useState(SortCards(characters, numberOfCards));
    let boardSorted2 = boardSorted;
    console.log('boardSorted', boardSorted);

    const clickedCardHandler = (reveivedData) => {
        const clicked = reveivedData.status;
        let secondHero = board[reveivedData.id];
        
        if (firstHero == null){
            firstHero = secondHero;
            setState(true);
            console.log(board[reveivedData.id].props.disable);
        }
        else {
            console.log('first:', firstHero.props.character, 'second:', secondHero.props.character);
            if (firstHero.props.character == secondHero.props.character){
                counter++;
                //setScore(counter+1);
                boardSorted2[firstHero.props.id].disable = true;
                console.log('boardSorted2', boardSorted2);
                boardSorted2[secondHero.props.id].disable = true;
                setArrayVal(boardSorted2);
                console.log('boardSorted', boardSorted);
            }
            else {
                firstHero = null;
                secondHero = null;
                
            }

        }
        
        
    };


    if (numberOfCards != 0) {
                     
        /* const charactersSorted = SortCards(characters, numberOfCards);

        board = charactersSorted.map((element) => (
            <Card
                key={element.id}
                id={element.id}
                character={element.character}
                disable={element.disable}
                clickedCard={clickedCardHandler}
            />)) */

            

        board = boardSorted.map((element) => (
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
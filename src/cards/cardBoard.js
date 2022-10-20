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

    const aaa = () => {
        console.log('clickeddddd');
    }
    

    const numberOfCards = props.items.length * 2;
    const characters = props.items;
    let board = <p>There is not enough cards to display.</p>;
    let firstHero = null;
    let counter = 0;
    let score = <div className='score'>Turn counter: 0</div>;
    let contCards = 0;

    const [boardSorted, setArrayVal] = useState(SortCards(characters, numberOfCards));
    const [visibleItems, setVisibleItem] = useState([]);
    
    console.log('boardSorted', boardSorted);

    

    const compareCards = (card1, card2) => {
        //console.log(boardSorted[card1].character);
        if (boardSorted[card1].character == boardSorted[card2].character) {

        }
    
    }
    
        
   


    if (numberOfCards != 0) {
            

      /*   board = boardSorted.map((element) => (
            <Card
                key={element.id}
                id={element.id}
                character={element.character}
                disable={element.disable}
                clickedCard={clickedCardHandler}
                onClick={aaa}
            />)) */
    }


    

    return (<div className='board'>
        {boardSorted.map((element) => (
            <Card
                key={element.id}
                id={element.id}
                character={element.character}
                disable={element.disable}
                onClick={()=>{
                    switch (visibleItems.length){
                        case 0: 
                        {
                            setVisibleItem([element.id]);
                        }
                            break;
                        case 1:
                        {
                            if (visibleItems[0] != element.id) {
                                setVisibleItem(visibleItems.concat(element.id));
                                compareCards(visibleItems[0], element.id);
                            }
                            
                        }
                            break;
                        case 2:
                        {
                            setVisibleItem([element.id]);
                        }
                            break;
                        default:
                            setVisibleItem(([]));
                    }
                    
                }}
            />))}
        <Counter score={counter}></Counter>
    </div>)
}


export default CardsBoard;
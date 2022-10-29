import React, { useState } from 'react';
import './cardBoard.css';
import Card from './card.js';
import Counter from '../counter.js';
import SortCards from './sortCards.js'

import hogward from './img/hogwards.jpg'
import harry from './img/harry.jpg'
import ron from './img/ron.jpg'
import hermione from './img/hermione.jpg'
import dumbledore from './img/dumbledore.jpg'
import voldemort from './img/voldemort.jpg'
import dobby from './img/dobby.jpg'



const CardsBoard = (props) => {

    const visibleItems = props.visibleItems;
    const setVisibleItem = props.setVisibleItem;
    const compareCards = props.compareCards;
    const boardSorted = props.boardSorted;
    const finishedItems = props.finishedItems;

    const numberOfCards = props.items.length * 2;
    const characters = props.items;
    
    const [score, setScore] = useState(0);
    const [pairsleft, setPairsLeft] = useState(props.items.length);
    //const [boardSorted, setArrayVal] = useState(SortCards(characters, numberOfCards));
    //const [visibleItems, setVisibleItem] = useState([]);
    
    console.log('boardSorted', boardSorted);

    

    /* const compareCards = (card1, card2) => {
        setScore(score+ 1);

        if (boardSorted[card1].character == boardSorted[card2].character) {
            console.log('point!');
            
            if (pairsleft > 0)
                setPairsLeft(pairsleft-1);
            return true;
        }        
        return false;
    } */
    
        
    const SetSrc = (image) => {
        switch (image){
            case 'harry':
                image = harry;             
                break;
            case 'ron':
                image = ron; 
                break;
            case 'hermione':
                image = hermione; 
                break;
            case 'dumbledore':
                image = dumbledore; 
                break;
            case 'voldemort':
                image = voldemort; 
                break;
            case 'dobby':
                image = dobby; 
                break;
            default:
                image = hogward;
        }
        return image;
    }




    return (<div className='board'>
        {boardSorted.map((element) => (
            <Card
                key={element.id}
                id={element.id}
                character={element.character}
                active={element.active}
                disable={(finishedItems.includes(element.id)) ? true : false}
                onClick={()=>{
                    element.active = true;
                    if (!element.disable) {
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
                                    if (compareCards(visibleItems[0], element.id)) {
                                        element.disable = true;
                                        boardSorted[visibleItems[0]].disable = true;
                                    }
                                    else {
                                        element.active = false;
                                        boardSorted[visibleItems[0]].active = false;
                                    }
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
                    }
                    
                }}
                imgSource = {((visibleItems.includes(element.id) || element.disable) && element.active) ? SetSrc(element.character) : SetSrc()}
            />))}
        {/* <Counter score={score} pairsleft={pairsleft}></Counter> */}
    </div>)
}


export default CardsBoard;
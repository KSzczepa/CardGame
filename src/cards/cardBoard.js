import React, { useState } from 'react';
import './cardBoard.css';
import Card from './card.js';
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
    const blockFlag = props.blockFlag;


    const SetSrc = (image) => {
        switch (image) {
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
                active={visibleItems.includes(element.id) ? true : false}
                disable={finishedItems.includes(element.id) ? true : false}
                onClick={() => {
                    if (!element.disable && !blockFlag) {
                        switch (visibleItems.length) {
                            case 0:
                                setVisibleItem([element.id]);
                                break;
                            case 1:
                                {
                                    if (visibleItems[0] != element.id) {
                                        setVisibleItem(visibleItems.concat(element.id));
                                        compareCards(visibleItems[0], element.id)
                                    }
                                }
                                break;
                            case 2:
                                setVisibleItem([element.id]);
                                break;
                            default:
                                setVisibleItem(([]));
                        }
                    }
                }}
                imgSource={((visibleItems.includes(element.id) || finishedItems.includes(element.id))) ? SetSrc(element.character) : SetSrc()}
            />))}
    </div>)
}


export default CardsBoard;
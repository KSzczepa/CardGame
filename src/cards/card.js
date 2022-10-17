import React, { useState } from 'react';
import './card.css'
import hogward from './img/hogwards.jpg'
import harry from './img/harry.jpg'
import ron from './img/ron.jpg'
import hermione from './img/hermione.jpg'
import dumpledore from './img/dumbledore.jpg'
import voldemort from './img/voldemort.jpg'
import dobby from './img/dobby.jpg'

const Card = (props) => {
    /* const IMG ={
        school: require.context('./img/hogwards.jpg').default,
    } */
    const defaulfImage = './img/hogwards.jpg';
    let image = props.character.split('.jpg');
    //let visibleCardSide = defaulfImage;
    let visibleCardSide = hogward;

    const [wasClicked, setCardClickedState] = useState(true);
    //const [disable, setCardAsDisable] = useState(props.disable);

    const clickCardHandler = () => {
        console.log(image[0]);
        setCardClickedState(!wasClicked);
        console.log('Updated!', wasClicked);
        props.clickedCard(wasClicked);
        revealCard(wasClicked);
    }

    const revealCard = (isActive) => {
        isActive ? (visibleCardSide = image[0]) : (visibleCardSide = defaulfImage);
        let styleee = {}
    }

    return <div className='card' onClick={clickCardHandler} style={{backgroundImage : `url(${visibleCardSide})`}}></div>
    //return <div className='card' onClick={clickCardHandler} style={{backgroundImage : `url(${IMG.school})`}}></div>
}

export default Card;
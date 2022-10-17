import React, { useState } from 'react';
import './card.css'

const Card = (props) => {

    var image = "url(img/" + props.character +")";

    const [wasClicked, setCardClickedState] = useState(false);
    //const [disable, setCardAsDisable] = useState(props.disable);

    const clickCardHandler = () => {
        setCardClickedState(!wasClicked);
        console.log('Updated!', wasClicked);
        props.clickedCard(wasClicked);
    }


    return <div className='card' onClick={clickCardHandler}></div>
}

export default Card;
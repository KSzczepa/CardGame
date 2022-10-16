import React, { useState } from 'react';
import './card.css'

const Card = (props) => {

    var image = "url(img/" + props.character +")";

    const revealClassHandler = () => {
        console.log(props.character);
        const newImg={'background-image' : image}

        //return <div className='card' style={newImg} onClick={revealClassHandler}></div>
    }

    return <div className='card' onClick={revealClassHandler}></div>
}

export default Card;
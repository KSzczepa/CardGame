import React, { useState } from 'react';
import hogward from './img/hogwards.jpg'
import harry from './img/harry.jpg'
import ron from './img/ron.jpg'
import hermione from './img/hermione.jpg'
import dumpledore from './img/dumbledore.jpg'
import voldemort from './img/voldemort.jpg'
import dobby from './img/dobby.jpg'

const CardImg = (props) => {

    let image = props.activeCard.split('.').filter(word => word != 'jpg').join();
    console.log(image);

    

    
    const changeStateHangler = () => {
        if (props.isActive){
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
                case 'dumpledore':
                    image = dumpledore; 
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
        }
        else
            image = hogward;
    }
    changeStateHangler();

    return (<img src={image}></img>)
}

export default CardImg;
import './counter.css';
import React, { useState } from 'react';

const Counter = (props) => {
    return (<div className='score'>
        {props.pairsleft==0 ? 
        <div><p>You are the winner!</p><p>You won in {props.score} rounds.</p></div> : 
        <div><p>Turn counter: {props.score}</p><p>Pairs left: {props.pairsleft}</p></div>}
        </div>)
    /* return (<div className='score'><p>Turn counter: {props.score}</p><p>Pairs left: {props.pairsleft}</p></div>) */
}

export default Counter;
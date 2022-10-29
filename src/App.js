import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import CardsBoard from './cards/cardBoard';
import Counter from '../counter.js';


function App() {
  <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"></link>

  const names = ['harry', 'voldemort', 'ron', 'hermione', 'dumbledore', 'dobby'];
  
  const [visibleItems, setVisibleItem] = useState([]);
  const [finishedItems, setFinishedItem] = useState([]);
  const [score, setScore] = useState(0);
  const [pairsleft, setPairsLeft] = useState(props.items.length);

  const compareCards = (card1, card2) => {
    setScore(score+ 1);

    if (boardSorted[card1].character == boardSorted[card2].character) {
        console.log('point!');
        
        if (pairsleft > 0)
            setPairsLeft(pairsleft-1);
        return true;
    }        
    return false;
}
  

  return (
    <div className="App">
            
      <h1>Harry Potter Test</h1>
      <article>
        <CardsBoard items={names} visibleItems={visibleItems} setVisibleItem={setVisibleItem} compareCards={compareCards}></CardsBoard>
        <Counter score={score} pairsleft={pairsleft}></Counter>
      </article>
    
      
     
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import CardsBoard from './cards/cardBoard'

function App() {
  <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"></link>

  const names = ['harry', 'voldemort', 'ron', 'hermione', 'dumpledore', 'dobby'];

  

  return (
    <div className="App">
            
      <h1>Harry Potter Test</h1>
      <article>
        <CardsBoard items={names}></CardsBoard>
      </article>
    
      
     
    </div>
  );
}

export default App;

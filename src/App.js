import './App.css';
import CardsBoard from './cards/cardBoard'

function App() {
  <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"></link>

  const names = ['harry.jpg', 'voldemort.jpg', 'ron.jpg', 'hermione.jpg', 'dumpledore.jpg', 'dobby.jpg'];

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

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import CardsBoard from './cards/cardBoard';
import Counter from './counter.js';
import SortCards from './cards/sortCards.js'


function App() {
	<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"></link>

	const names = ['harry', 'voldemort', 'ron', 'hermione', 'dumbledore', 'dobby'];
	const numberOfCards = names.length * 2;

	const [visibleItems, setVisibleItem] = useState([]);
	const [finishedItems, setFinishedItem] = useState([]);
	const [score, setScore] = useState(0);
	const [pairsleft, setPairsLeft] = useState(names.length);
	const [boardSorted, setArrayVal] = useState(SortCards(names, numberOfCards));
	const [winner, setWinner] = useState(false);


	const startNewGameHandler = () => {
		setVisibleItem([]);
		setFinishedItem([]);
		setScore(0);
		setPairsLeft(names.length);
		setArrayVal(SortCards(names, numberOfCards));
		setWinner(false);
	}

	const compareCards = (card1, card2) => {
		setScore(score + 1);

		if (boardSorted[card1].character == boardSorted[card2].character) {
			
			setTimeout(() => {
				setFinishedItem([...finishedItems, card1, card2]);
			}, 300);

			if (pairsleft > 0)
				setPairsLeft(pairsleft - 1);
			if (pairsleft == 0)
			{
				
					setWinner(true);
					console.log(winner);
				
			}
				

			boardSorted[card1].disable = true;
			boardSorted[card2].disable = true;
		}

		else {
			setTimeout(() => {
				setVisibleItem([]);
			}, 600);

			boardSorted[card1].disable = false;
			boardSorted[card2].disable = false;
		}
	}


	return (
		<div className="App">

			<h1>Harry Potter Memory Test</h1>
			<button className='newGame' onClick={startNewGameHandler}>New game</button>
			<article>
				<CardsBoard
					visibleItems={visibleItems}
					setVisibleItem={setVisibleItem}
					compareCards={compareCards}
					boardSorted={boardSorted}
					finishedItems={finishedItems}
					setFinishedItem={setFinishedItem}>
				</CardsBoard>
				<Counter score={score} pairsleft={pairsleft} winner={winner}></Counter>
				
			</article>

		</div>
	);
}

export default App;

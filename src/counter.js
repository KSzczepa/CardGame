import './counter.css';

const Counter = (props) => {

    return (<div className='score'>
        <p>Turn counter: {props.score}</p>
        <p>Pairs left: {props.pairsleft}</p>
        </div>)
}

export default Counter;
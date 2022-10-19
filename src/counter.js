
const Counter = (props) => {

    const score= props.score;

    return (<div className='score'>Turn counter: {score}</div>)
}

export default Counter;
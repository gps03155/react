import React from 'react';


const Counter = ({number, onInCrease, onDecrease}) => {
    return(
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onInCrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;
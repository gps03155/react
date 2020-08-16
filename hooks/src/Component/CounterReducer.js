import React, {useReducer, Fragment} from 'react';


const reducer = (state, action) => {

    console.log(state, action);

    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1}
        case 'DECREMENT':
            return {value: state.value - 1}
        default:
            return state;
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return(
        <Fragment>
            <hr/>
            <h3>useReducer</h3>
            <p>현재 카운터 값은 <b>{state.value}</b> 입니다.</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </Fragment>
    );
}

export default  CounterReducer;
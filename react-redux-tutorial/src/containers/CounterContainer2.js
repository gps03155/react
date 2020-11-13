import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Counter from '../components/Counter';
import {increase, decrease} from "../modules/counter";


const CounterContainer2 = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return(<Counter number={number} onInCrease={onIncrease} onDecrease={onDecrease}/>);
}

export default CounterContainer2;
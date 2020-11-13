import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';


const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onInCrease={increase} onDecrease={decrease}/>
}

// const mapStateToProps = state => ({
//     number: state.counter.number
// });
//
// const mapDiapatchToProps = dispatch => ({
//     increase: () => {dispatch(increase())},
//     decrease: () => {dispatch(decrease())}
// });
//
// export default connect(mapStateToProps, mapDiapatchToProps)(CounterContainer);

export default connect(state => ({
    number: state.counter.number
    }),
    // dispatch => bindActionCreators({increase, decrease}, dispatch)
    {increase, decrease}
)(CounterContainer)
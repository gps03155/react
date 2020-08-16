import React, {useState, Fragment} from 'react';
import Counter from './Counter';
import Info from './Info';
import ContextSamepl from './ContextSample';
import CounterReducer from './CounterReducer'
import InfoReducer from './InfoReducer';
import Average from './Average';
import UseRefSample from './UseRefSample';
import InfoCustomHook from './InfoCustomHook';
import UsePromiseSample from './UsePromiseSample';

const Tutorial = () => {

    const [visible, setVisible] = useState(false);

    return(
        <Fragment>
            <Counter/>
            <hr/>
            <button onClick={() => setVisible(!visible)}>{visible? '숨기기' : '보이기'}</button>
            {visible && <Info/>}
            <ContextSamepl/>
            <CounterReducer/>
            <InfoReducer/>
            <Average/>
            <UseRefSample/>
            <InfoCustomHook/>
            <UsePromiseSample/>
        </Fragment>
    );
};

export default Tutorial;
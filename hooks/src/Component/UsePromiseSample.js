import React from 'react';
import UsePromise from './UsePromise';

const wait = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Hello Hooks'), 3000);
    })
}

const UsePromiseSample = () => {
    const [resolved, loading, error] = UsePromise(wait, []);

    if(loading) return <div>loading...</div>
    if(error) return <div>error...</div>
    if(!resolved) return null;

    return(
        <div>
            {resolved}
        </div>
    );
}

export default UsePromiseSample;
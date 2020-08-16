import React, {useRef} from 'react';

const UseRefSample = () => {
    const id = useRef(1);

    const setId = n => {
        id.current = n;
    }

    const printId = () => {
        console.log(id.current);
    }

    return(
        <div>useRef</div>
    );
}

export default UseRefSample;
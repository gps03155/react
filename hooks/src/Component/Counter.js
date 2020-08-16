import React, {useState, Fragment} from 'react';


const Counter = () => {
    const [value, setValue] = useState(0);

    return(
        <Fragment>
            <p>현재 카운트 값은 <b>{value}</b>입니다.</p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </Fragment>
    );
};

export default Counter;
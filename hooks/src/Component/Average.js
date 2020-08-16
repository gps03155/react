import React, {useMemo, useState, useCallback, useRef, Fragment} from 'react';

const getAverage = numbers => {
    console.log('calculate average');

    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);

    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEle = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));

        setList(nextList);
        setNumber('');
        inputEle.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return(
        <Fragment>
            <hr/>
            <h3>useMemo</h3>
            <input value={number} onChange={onChange} ref={inputEle}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값 : </b> {avg}
            </div>
        </Fragment>
    );
}

export default Average
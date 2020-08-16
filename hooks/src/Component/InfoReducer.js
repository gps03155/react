import React, {useReducer, Fragment} from 'react';

const reducer = (state, action) => {

    console.log(state, action);

    return{
        ...state,
        [action.name] : action.value
    }
}

const InfoReducer = () => {
    const [state, dispatch] = useReducer(reducer, {name: '', nickName: ''});
    const {name, nickName} = state;

    const onChange = e => {
        dispatch(e.target);
    }

    return(
        <Fragment>
            <hr/>
            <h3>useReducer2</h3>
            <input name='name' value={name} onChange={onChange}/>
            <input name='nickName' value={nickName} onChange={onChange}/>
            <div>
                <b>이름 : </b> {name}
            </div>
            <div>
                <b>닉네임 : </b> {nickName}
            </div>
        </Fragment>
    );
}

export default InfoReducer;
import React, {Fragment} from 'react';
import UseInputs from './UseInputs';

const InfoCustomHook = () => {
    const [state, onChange] = UseInputs({name: '', nickName: ''});
    const {name, nickName} = state;

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

export default InfoCustomHook;
import React, {useState, useEffect, Fragment} from 'react';


const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        console.log('render complete');
        console.log(name, nickName);

        return() => {
            console.log('yet update');
        }
    }, [name, nickName]);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    }

    return(
        <Fragment>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickName} onChange={onChangeNickName}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickName}
                </div>
            </div>
        </Fragment>
    );
};

export default Info;
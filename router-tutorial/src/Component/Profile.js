import React from 'react';


const profileData = {
    velopert: {
        name: 'velopert',
        description: '재밌는 것만 골라서 하는 개발자'
    },
    gildong: {
        name: 'gildong',
        description: '테스트 설명'
    }
}

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = profileData[username];

    if(!profile){
        return <div>존재하지 않는 유저입니다.</div>
    }

    return(
        <div>
            <h3>{username}{profile.name}</h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;
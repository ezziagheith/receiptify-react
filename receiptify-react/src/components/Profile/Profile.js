import React from 'react';

import './Profile.css'

const Profile = (props) => {

    console.log(props);

    if (!props.editProfile) {
        return (
            <div style={{paddingTop:50}}>
                <h1 className="profile-name-last"> {props.firstName} {props.lastName}'s Profile</h1>
            </div>
        )
    }

}

export default Profile;

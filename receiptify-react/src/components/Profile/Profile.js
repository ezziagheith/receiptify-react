import React from 'react';

import './Profile.css'
// import barcode from './barcode.png'


const Profile = (props) => {

    console.log(props);

    if (!props.editProfile) {
        return (
            <div style={{paddingTop:50}}>
                <h1 className="profile-name-last"> {props.firstName} {props.lastName}'s Profile</h1>
            {/* <img className="barcode" src={barcode} width="600" height="600"/> */}
            </div>
        )
    }

}

export default Profile;

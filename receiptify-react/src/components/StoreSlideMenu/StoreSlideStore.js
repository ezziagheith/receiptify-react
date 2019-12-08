import React from 'react';

import './StoreSlideStore.css'

const StoreSlideStore = (props) => {
    return(
        <>
        <a href = {`/stores/${props.urlName}`} className={window.location.pathname.split('/')[2]===`${props.urlName}`?'active':'none'}>
        <img id="logo-image" src={`${props.logoImage}`} alt="store" />
        {' '}
        <span>{props.store}</span>
        </a>
        </>
    )
}

export default StoreSlideStore;

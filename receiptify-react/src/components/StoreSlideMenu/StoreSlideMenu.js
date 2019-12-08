import React from 'react';
import StoreSlideStore from './StoreSlideStore';


const StoreSlideMenu = (props) => {

  const store = props.storeList.map((store) => {
    return (
        <StoreSlideStore 
            key={store._id}
            store={store.name}
            urlName={store.urlName}
            logoImage={store.logoImage}
        />
    );
});
    return (
      <div className="slideContainer"> 
        <h1 className="cities-word" id="the-word-cities">Stores</h1>
        <div className="vertical-menu" id="slide">     
          {store}
        </div>
      </div>
    );
};

export default StoreSlideMenu;


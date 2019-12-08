import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import ProfileContainer from '../components/containers/ProfileContainer/ProfileContainer';
import StoreContainer from '../components/containers/StoreContainer/StoreContainer';
// import EmptyTest from '../components/containers/EmptyTest/EmptyTest';


export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={ProfileContainer} />
        
        <Route exact path='/stores/id/:id' component={StoreContainer} />
        <Route path='/stores' component={StoreContainer} />
    </Switch>
)
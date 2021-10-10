import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/home';
import DetailsUser from '../pages/detailsUser';
import Finances from '../pages/finances';
import Users from '../pages/users';

export default (props) => (
    <Switch>
        <Route exact path="/"><Home user={props.user}/></Route>
        <Route exact path="/detailsUser"><DetailsUser user={props.user}/></Route>
        <Route exact path="/users"><Users/></Route>
        <Route exact path="/finances"><Finances/></Route>
    </Switch>
);
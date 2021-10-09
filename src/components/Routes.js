import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../pages/home';
import Login from '../pages/login';
import DetailsUser from '../pages/detailsUser';
import Finances from '../pages/finances';
import Users from '../pages/users';

export default () => (
    <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/register"><Login /></Route>
        <Route exact path="/detailsUser"><DetailsUser/></Route>
        <Route exact path="/users"><Users/></Route>
        <Route exact path="/finances"><Finances/></Route>
        <Route exact path="/logout">Logout do sistema!</Route>
    </Switch>
);
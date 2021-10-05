import React from 'react';
import Key from './Keys';
import { Route, Redirect } from 'react-router';

const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem(Key.jsonkey);
    return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
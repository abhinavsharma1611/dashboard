import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../login/login';

const PrivateRoutes = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Login} />
        </React.Fragment>
    )
}

export default PrivateRoutes;
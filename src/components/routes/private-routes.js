import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import ManageRecords from '../manage-records/manage-records';
import Login from '../login/login';

const PrivateRoutes = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/manage-records" component={ManageRecords} />
        </React.Fragment>
    )
}

export default PrivateRoutes;

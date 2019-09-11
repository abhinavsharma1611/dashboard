import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../dashboard/dashboard';
import ManageRecords from './../manage-records/manage-records';

const Routes = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Dashboard} />
            <Route path="/manage-records" component={ManageRecords} />
        </React.Fragment>
    )
}

export default Routes;

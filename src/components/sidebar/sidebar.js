import React from 'react';
import userIcon from './../../images/user.jpg';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './../dashboard/dashboard';
import ManageRecords from './../manage-records/manage-records';

class Sidebar extends React.Component {
    componentDidMount() {
        $(document).ready(function () {

            // Sidebar

            $("#menu1").slideDown();
            $("#menu3").slideDown();

            $("#link1").click(function () {
                $("#menu1").slideToggle('fast');
            });

            $("#link2").click(function () {
                $("#menu2").slideToggle(500);
            });

            $("#link3").click(function () {
                $("#menu3").slideToggle('fast');
            });

        });

    }

    render() {
        return (

            <React.Fragment>
                <Router>
                    <div className="sidebar">
                        <div className="user-icon">
                            <img src={userIcon} alt="userIcon" />
                        </div>
                        <ul className="sidebar-nav ml-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/" ><i className="fas fa-th"></i>Dashboard</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/manage-records" className="nav-link" id="link1"><i className="fas fa-th"></i>Manage Records</Link>
                            </li>

                        </ul>
                    </div>

                    <Route path="/" component={Dashboard} />
                    <Route path="/manage-records" component={ManageRecords} />

                </Router>
            </React.Fragment>
        )
    }
}

export default Sidebar;
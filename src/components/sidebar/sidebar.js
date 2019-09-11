import React from 'react';
import userIcon from './../../images/user.jpg';
import $ from 'jquery';


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
                <div className="sidebar">
                    <div className="user-icon">
                        <img src={userIcon} alt="userIcon" />
                    </div>
                    <ul className="sidebar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.php"><i className="fas fa-th"></i>Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="# " id="link1"><i className="fas fa-th"></i>Manage Records</a>

                            <ul className="submenu" id="menu1">
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Manage Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Lead Source</a>
                                </li>

                            </ul>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="# " id="link2"><i className="fas fa-th"></i>Enquiries</a>

                            <ul className="submenu" id="menu2">

                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Submitted</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Ringing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Call back</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Meeting Propose/Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Meeting Done</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Meeting Pospond</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Meeting Cancel</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Followup</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Not Reponding</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Not Interested</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Closed</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Import Enquiry</a>
                                </li>

                            </ul>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="# " id="link3"><i className="fas fa-th"></i>User Management</a>

                            <ul className="submenu" id="menu3">
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Unit Head</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Team Leader</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# "><i className="fas fa-th"></i>Team Members</a>
                                </li>

                            </ul>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="# "><i className="fas fa-th"></i>Change Password</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="# "><i className="fas fa-th"></i>Logout</a>
                        </li>
                    </ul>
                </div>

            </React.Fragment>
        )
    }
}

export default Sidebar;
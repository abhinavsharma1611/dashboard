import React from 'react';

class Topbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="topbar">
                    <nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="# ">Dashboard</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="# navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarsExample04">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="# ">Add Enquiry</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="# ">Pending Enquiry</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="# ">Settings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="# ">My Profile</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </React.Fragment>
        )
    }
}

export default Topbar;
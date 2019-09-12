import React from 'react';
import { Link } from 'react-router-dom';

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

                                    <li className="nav-item">
                                        <a href="# " className="nav-link disabled">Welcome Guest</a>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" id="link1">Login</Link>
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
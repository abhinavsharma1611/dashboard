import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Topbar from './../topbar/topbar';
import Sidebar from './../sidebar/sidebar';
import Routes from './../routes/routes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: true }
    }

    render() {

        if (!this.state.loggedIn) {
            return (
                <Router>
                    <React.Fragment>
                        <Topbar />
                        <div className="wrapper">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 login-section">
                                        <Routes />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </Router>
            )

        }

        else {
            return (
                <Router>
                    <React.Fragment>
                        <Topbar />

                        <div className="wrapper">
                            <div className="container-fluid">
                                <div className="row">

                                    <div className="col-md-2">
                                        <Sidebar />
                                    </div>

                                    <div className="col-md-10 dashboard-section">
                                        <Routes />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </Router>
            )
        }


    }
}

export default App;
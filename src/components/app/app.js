import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Topbar from './../topbar/topbar';
import Routes from './../routes/routes';

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Topbar />

                    <div className="wrapper">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-2 dashboard-section">

                                </div>

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
}

export default App;
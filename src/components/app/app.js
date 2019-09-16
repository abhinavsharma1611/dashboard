import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Topbar from './../topbar/topbar';
import Sidebar from './../sidebar/sidebar';
import PrivateRoutes from './../routes/private-routes';
import PublicRoutes from './../routes/public-routes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { islogged: this.props.islogged }
    }

    render() {
        console.log(this.state.islogged);

        if (this.state.loggedIn) {
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
                                        <PrivateRoutes />
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
                                    <div className="col-md-12 login-section">
                                        <PublicRoutes />
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

const mapStateToProps = (state) => {
    return {
        islogged: state.islogged
    }
}

const mapDispatchToProps = (dispatch) => ({
    islogged: dispatch.islogged
});

export default connect(mapStateToProps)(App);
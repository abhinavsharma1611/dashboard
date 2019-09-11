import React from 'react';
import Topbar from './../topbar/topbar';
import Sidebar from './../sidebar/sidebar';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Topbar />

                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-2">
                                <Sidebar />
                            </div>

                            <div className="col-md-10 dashboard-section">
                                <div className="title">
                                    <h5>Manage Team</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
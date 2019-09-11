import React from 'react';
import Topbar from './../topbar/topbar';
import Sidebar from './../sidebar/sidebar';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Topbar />

                <div class="wrapper">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col-md-2">
                                <Sidebar />
                            </div>

                            <div class="col-md-10 dashboard-section">
                                <div class="title">
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
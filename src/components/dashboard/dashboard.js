import React from 'react';
import Sidebar from './../sidebar/sidebar';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';


const doughnutData = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [20, 25, 55],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userData: 'No data' }
    }

    componentWillMount() {
        // const { userData } = this.props.location.state;
        // this.setState({ userData: userData.user.name });
    }

    componentDidMount() {
        console.log(this.state.userData)
    }

    render() {
        return (
            <React.Fragment>
                <section>

                    <div className="title">
                        <h5>Dashboard</h5>
                    </div>


                    <div className="row">
                        <div className="col-md-12">

                            <div className="box">
                                <h1>Welcome {this.state.userData}</h1>
                            </div>
                        </div>


                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="box">
                                <Doughnut data={doughnutData} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="box">
                                <Bar data={doughnutData} />
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <Line data={doughnutData} />
                            </div>
                        </div>
                    </div>




                </section>
            </React.Fragment>
        )
    }
}
export default Dashboard;
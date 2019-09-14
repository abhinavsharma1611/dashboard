import React from 'react';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';

const Context = React.createContext();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userEmail: '', userPassword: '', loggedIn: false };
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.postData = this.postData.bind(this);
    }

    componentDidMount() {
        console.log('Hey');
    }

    getEmail(e) {
        this.setState({ userEmail: e.target.value });
    }

    getPassword(e) {
        this.setState({ userPassword: e.target.value });
    }

    postData(e) {
        e.preventDefault();
        const url = 'http://lara-api.advertindia.in/api/auth/login';
        const user = 'yash@eminent';

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userEmail: this.state.userEmail, userPassword: this.state.userPassword }),
        })
            .then(res => res.json())
            .then((data) => {
                if (data.hasOwnProperty('access_token')) {
                    this.setState({ loggedIn: true })
                    console.log(data);
                    console.log(this.state.loggedIn)
                }
                else {
                    swal('Not a user')
                    console.log(data);
                }
            })

    }


    render() {

        if (this.state.loggedIn === true) {
            return <Redirect to={{
                pathname: '/dashboard',
                state: {
                    loggedIn: this.state.loggedIn,
                    userData: this.state.userData,
                }
            }} />
        }

        return (
            <React.Fragment>
                <form className="box inputform" onSubmit={this.postData}>
                    <h3>Please login here</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={this.getEmail} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={this.getPassword} />
                    </div>


                    <button type="submit" className="btn btn-primary btn-block btn1">
                        Submit
                    </button>

                </form>
            </React.Fragment>
        )
    }
}

export default Login;
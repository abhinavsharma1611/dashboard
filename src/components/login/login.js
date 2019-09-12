import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Routes from './../routes/routes'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userEmail: '', userPassword: '', };
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

    async postData(e) {
        e.preventDefault();
        const url = 'https://hungry-shrimp-58.localtunnel.me/api/auth/login';

        await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userEmail: this.state.userEmail, userPassword: this.state.userPassword }),
        })
            .then(res => res.json())
            .then(function (data) {
                if (data.hasOwnProperty('access_token')) {
                    window.location.href = "/dashboard"
                }
                else {
                    alert('Not a user')
                }


            })

    }

    render() {
        return (
            <React.Fragment>
                <form className="inputform" onSubmit={this.postData}>
                    <h1>Please login</h1>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={this.getEmail} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={this.getPassword} />
                    </div>

                    <button type="submit" className="btn btn-primary btn1">
                        Submit
                    </button>

                </form>
            </React.Fragment>
        )
    }
}

export default Login;
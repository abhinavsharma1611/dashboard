import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userEmail: '', userPassword: '' };
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.postData = this.postData.bind(this);
    }

    componentWillMount() {
        console.log('Compponent Mounted');
    }

    getEmail(e) {
        this.setState({ userEmail: e.target.value });
    }

    getPassword(e) {
        this.setState({ userPassword: e.target.value });
    }

    postData(e) {
        e.preventDefault();
        const url = 'https://hungry-shrimp-58.localtunnel.me/api/auth/login';

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userEmail: this.state.userEmail, userPassword: this.state.userPassword }),
        }).then(res => res.json())
            .then(data => console.log(data));
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

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </React.Fragment>
        )
    }
}

export default Login;
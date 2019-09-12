import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form className="inputform">
                    <h1>Please login</h1>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Login;
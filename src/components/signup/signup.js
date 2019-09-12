import React from 'react';

class Signup extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form className="inputform">
                    <h1>Please Signup</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
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

export default Signup;
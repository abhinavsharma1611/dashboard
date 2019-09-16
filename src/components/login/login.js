import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '', userPassword: '',
            isLogged: this.props.isLogged
        }
        this.getEmail = this.getEmail.bind(this)
        this.getPassword = this.getPassword.bind(this)
        this.postData = this.postData.bind(this)
    }

    componentDidMount() {
        console.log(this.props.isLogged);
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
        // const user = 'yash@eminent';

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
                    return null;
                }
                else {
                    swal('Not a user')
                    console.log(data);
                }
            })

    }


    render() {
        if (this.props.isLogged) {
            return <Redirect to={{
                pathname: '/dashboard'
            }} />
        }
        return (
            <React.Fragment>
                <form className="box inputform" autoComplete="on" onSubmit={this.postData}>
                    <h3>Please login here</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={this.getEmail} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" autoComplete="on" className="form-control" placeholder="Password" onChange={this.getPassword} />
                    </div>


                    <button type="submit" className="btn btn-primary btn-block btn1" >
                        Submit
                    </button>

                </form>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        islogged: state.islogged
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         islogged: () => dispatch({ type: 'loggedin' })
//     }
// }


export default connect(mapStateToProps)(Login);
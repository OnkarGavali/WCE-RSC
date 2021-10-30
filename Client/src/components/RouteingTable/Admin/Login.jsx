import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';


class Login extends Component {



    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            username: undefined,
            email: undefined,
            password: undefined,
            signUp: {
                success: undefined,
                message: undefined
            },
            logged: false,
            users: undefined,
            error: undefined
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            userData: {
                email: this.state.email,
                password: this.state.password
            }
        };
        console.log(JSON.stringify(dataToSend))
        let url = "http://localhost:5000/auth/login";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                if (responseJson.success) {
                    localStorage.setItem('DD101_TOKEN', responseJson.token);
                    this.setState({
                        logged: true,
                        error: undefined
                    })
                    this.loadUsers()
                }
            }).catch(err => this.setState({ error: err }));

        e.target.reset()
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }





    render() {
        return (
            <div>
                <PageBanner name="Login" head='Admin' />
                <div id="content">
                    <div className="container">
                        <div className="page-content">
                            <div className="col-md-5">

                                <br />
                                <h4 className="classic-title"><span>Login for Admin Panel</span></h4>


                                <form id='login' accept-charset='UTF-8' onSubmit={this.handleSubmit}>
                                    <input type='hidden' name='submitted' id='submitted' value='1' />

                                    <div className="form-group">
                                        <div className="controls">
                                            <input type="email" placeholder="Registered Email ID" name="email" id="email" className="email"
                                                required="required" onChange={this.handleEmailChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="controls">
                                            <input type="password" className="email" placeholder="Password" name="password" id="password"
                                                required="required" onChange={this.handlePasswordChange} />
                                        </div>
                                    </div>

                                    <button type="submit" id="submit" className="btn-system btn-large">Login</button>
                                    <br />
                                    <br />
                                </form>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';


function Login() {
    return (
        <div>
            <PageBanner name="Login" head='Admin'/>
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-5">

                            <br/>
                            <h4 className="classic-title"><span>Login for Admin Panel</span></h4>

                            <form role="form" className="contact-form" id="contact-form2" method="post"
                                action="<?php echo $acm->GetSelfScript(); ?>">
                                <form id='login' method='post' accept-charset='UTF-8'>
                                    <input type='hidden' name='submitted' id='submitted' value='1' />

                                    <div className="form-group">
                                        <div className="controls">
                                            <input type="email" placeholder="Registered Email ID" name="email" id="email" className="email"
                                                required="required" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="controls">
                                            <input type="password" className="email" placeholder="Password" name="password" id="password"
                                                required="required" />
                                        </div>
                                    </div>

                                    <button type="submit" id="submit" className="btn-system btn-large">Login</button>
                                    <br/>
                                    <br/>
                                </form>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Login;

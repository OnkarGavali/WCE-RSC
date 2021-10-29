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
            <PageBanner name="Login" />
            <div id="content">
                <div class="container">
                    <div class="page-content">
                        <div class="col-md-5">

                            <br/>
                            <h4 class="classic-title"><span>Login for Admin Panel</span></h4>

                            <form role="form" class="contact-form" id="contact-form2" method="post"
                                action="<?php echo $acm->GetSelfScript(); ?>">
                                <form id='login' method='post' accept-charset='UTF-8'>
                                    <input type='hidden' name='submitted' id='submitted' value='1' />

                                    <div class="form-group">
                                        <div class="controls">
                                            <input type="email" placeholder="Registered Email ID" name="email" id="email" class="email"
                                                required="required" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="controls">
                                            <input type="password" class="email" placeholder="Password" name="password" id="password"
                                                required="required" />
                                        </div>
                                    </div>

                                    <button type="submit" id="submit" class="btn-system btn-large">Login</button>
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

import React, { Components, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import PageBanner from '../PageBanner';





function Register()
{
    return (
        <div>
            <PageBanner name="Register" head="Programs" subhead="Register" info="We Are WCE Research Symposium" />
        </div>
    );
}

export default Register;

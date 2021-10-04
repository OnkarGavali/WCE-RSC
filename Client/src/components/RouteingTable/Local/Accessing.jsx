import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';

function Accessing()
{
    return(
        <div>
    <PageBanner name="Accessing Sangli" head="Local Information" subhead="Accessing Sangli" info="We Are WCE Research Symposium" />
    </div>
    );
}

export default Accessing;

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';


function Location()
{
    return (
        <div>
            <PageBanner name="Conference Location" head="Local Information" subhead="Conference Location" info="We Are WCE Research Symposium" />
        </div>
    );

}

export default Location;

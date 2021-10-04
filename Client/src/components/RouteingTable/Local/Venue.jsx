import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';


function Venue() {
    return (
        <div>
            <PageBanner name="Conference Venue" head="Local Information" subhead="Conference Venue" info="We Are WCE Research Symposium" />
        </div>
    );

}

export default Venue;

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';

function Accessing() {
    return (
        <div>
            <PageBanner name="Accessing Sangli" head="Local Information" subhead="Accessing Sangli" info="We Are WCE Research Symposium" />
            <br />
            <br />
            <div id="content">
                <div class="container">
                    <div class="page-content">

                        <div class="col-md-9">

                            <h3>1. By Road:</h3>
                            <ul>
                                <li>Mumbai (Bombay) - 390 km.</li>
                                <li>Pune - 220 km.</li>
                                <li>Bangalore - 630 km.</li>
                                <li>Goa - 190 km.</li>
                                <li>Belgaum - 154 km.</li>
                            </ul>

                            <h3><br />2. By Train:</h3>
                            <p>Twin cities Sangli & Miraj are major Junction for central, northern, south-central,western, southern & Konkan railways. </p>

                            <h3>3. By Air:</h3>
                            <p><strong>Kolhapur Airport / Belgaum Airport are the nearest airports to Sangli.</strong> You can use either road or railway to reach from there to Sangli as mentioned above.</p>
                            <h3>4. Local Transportation</h3>
                            <p> MSRTC runs city bus service, Train, Auto rickshaws, and private touring options are also available.</p>
                            <br />
                            <br />
                        </div>
                        <div class="col-md-3 sidebar right-sidebar">

                            <div class="widget widget-categories">
                                <h4>Related Links <span class="head-line"></span></h4>
                                <ul>


                                    <li>
                                        <Link to="/venue">Conference Venue</Link>
                                    </li>

                                    <li>
                                        <Link to="/location">Conference Location</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accessing;

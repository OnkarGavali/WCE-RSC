import React from 'react'
import {Link } from "react-router-dom";
import PageBanner from '../PageBanner';

function Accessing() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Accessing Sangli" head="Local Information" subhead="Accessing Sangli" info="We Are WCE Research Symposium" />
            {/* PageBanner - end */}
            
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        {/* Main Content - start */}
                        <div className="col-md-9">
                            <h2 className="classic-title"><span>By Road:</span></h2>
                            <ul>
                                <li>Mumbai (Bombay) - 390 km.</li>
                                <li>Pune - 220 km.</li>
                                <li>Bangalore - 630 km.</li>
                                <li>Goa - 190 km.</li>
                                <li>Belgaum - 154 km.</li>
                            </ul>
                            <br/>
                            <h2 className="classic-title"><span>By Train</span></h2>
                            <p>Twin cities Sangli & Miraj are major Junction for central, northern, south-central,western, southern & Konkan railways. </p>

                            <h2 className="classic-title"><span>By Air</span></h2>
                            <p><strong>Kolhapur Airport / Belgaum Airport are the nearest airports to Sangli.</strong> You can use either road or railway to reach from there to Sangli as mentioned above.</p>
                            
                            <h2 className="classic-title"><span>Local Transportation</span></h2>
                            <p> MSRTC runs city bus service, Train, Auto rickshaws, and private touring options are also available.</p>
                            <br />
                            <br />
                        </div>
                        {/* Main Content - end */}
                        
                        {/* Related Links - start */}
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="venue">Conference Venue</Link>
                                    </li>
                                    <li>
                                        <Link to="location">Conference Location</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Related Links - end */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accessing;

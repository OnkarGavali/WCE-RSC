import React from 'react';
import AboutRSC from './AboutRSC';
import AboutWCE from './AboutWCE';
import AboutDept from './AboutDept';
import PageBanner from '../../RouteingTable/PageBanner';

function About() {
    return (
        <div >
            {/* PageBanner - start */}
            <PageBanner  name="About Us"  head ="About"  info="We Are WCE Research Symposium"/>
            {/* PageBanner - end */}
            <div className="contenti" >
                <div className="container">
                    <div className="page-content">
                        <div className="row" style={{ textAlign: 'justify' }}>
                            <div className="col-md-12">
                                <h4 className="classic-title"><span>Welcome To WCE Research Symposium on Computing 2022</span></h4>
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#tab1" data-toggle="tab"><i className="icon-award-1"></i>About Research Symposium</a></li>
                                    <li><a href="#tab2" data-toggle="tab"><i className="icon-beaker"></i>About Walchand College of Engineering, Sangli </a></li>
                                    <li><a href="#tab3" data-toggle="tab"><i className="icon-droplet"></i>About the Departments</a></li>
                                </ul>
                                
                                <div className="tab-content">
                                    <div className="tab-pane fade in active" id="tab1">
                                        <AboutRSC/>
                                    </div>
                                    <div className="tab-pane fade" id="tab2">
                                        <AboutWCE/>
                                    </div>
                                    <div className="tab-pane fade " id="tab3">
                                        <AboutDept/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hr1" style={{ marginBottom: '50px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

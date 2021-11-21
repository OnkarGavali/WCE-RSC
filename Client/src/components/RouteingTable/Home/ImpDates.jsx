import React from 'react';
import {
    Link
} from "react-router-dom";
import Chair from "../../../images/publication/chair.png";
import Notifications from './Notifications';
import Publications from './Publications';
import SponsorsOld from './SponsorsOld';
import imgsrc from '../../../JSON/Images.json';
import data from '../../../JSON/Home/HomeBody.json';
function ImpDates() {
    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="Programs/Register" style={{ marginLeft: '25%' }} className="btn btn-lg btn-system"> Register Now</Link>

                        <div className="tab-content">
                            <div className="latest-posts">
                                <br />
                                <br />
                                <Link to='/Important-Dates'><h3 className="classic-title" id="notifications"><span>Important Dates</span></h3></Link>

                                <div className="latest-posts-classic touch-carousel">


                                    <div className="post-row item">
                                        <div className="left-meta-post">
                                            <div className="post-date"><span className="day">10</span><span className="month">DEC</span>
                                            </div>

                                        </div>
                                        <h4 className="post-title"><Link to="/Paper-Submission">Last Date for Paper Submission</Link></h4>


                                    </div>
                                    <br />
                                    <div className="post-row item">
                                        <div className="left-meta-post">
                                            <div className="post-date"><span className="day">20</span><span className="month">JAN</span>
                                            </div>

                                        </div>
                                        <h4 className="post-title"><Link to="/Paper-Submission">Paper Acceptance Notification</Link></h4>

                                    </div>
                                    <br />
                                    <div className="post-row item">
                                        <div className="left-meta-post">
                                            <div className="post-date"><span className="day">25</span><span className="month">JAN</span>
                                            </div>

                                        </div>
                                        <h4 className="post-title"><Link to="#">Last Date for Submission of IPS</Link></h4>

                                    </div>
                                    <br />
                                    <div className="post-row item">
                                        <div className="left-meta-post">
                                            <div className="post-date"><span className="day">20</span><span className="month">FEB</span>
                                            </div>

                                        </div>
                                        <h4 className="post-title"><Link to="#">Last Date for Camera Ready Submission </Link></h4>

                                    </div>
                                    <br />
                                    <div className="post-row item">
                                        <div className="left-meta-post">
                                            <div className="post-date"><span className="day">28</span><span className="month">FEB</span>
                                            </div>

                                        </div>
                                        <h4 className="post-title"><Link to="/Register">Final Deadline for Registration</Link></h4>

                                    </div>
                                    <br />

                                    <br />



                                </div>
                            </div>
                        </div>
                        <br />

                        <br />
                        <br />
                        <SponsorsOld />
                        <br />

                        <br />
                        <Publications />
                        <br />
                        <div className="tab-content">
                            <div className="latest-posts" >
                                <h3 className="classic-title" id="notifications"><span>Paper Submission</span></h3>
                                <a href={data.data.links.paperSubmission} target="_blank">
                                   
                                        <img src={Chair}></img>
                                  
                                 
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>

    );
}

export default ImpDates;

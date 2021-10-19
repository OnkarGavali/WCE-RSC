import React, { Components, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Chair from '../../../images/publication/chair.png';
import Notifications from './Notifications';
import Publications from './Publications';
import SponsorsOld from './SponsorsOld';

function ImpDates() {
    return (
        <div>


            <div class="container">
                <div class="row">
                    <div className="col-md-4">
                    <Link to="/Register" style={{marginLeft:'25%'}} className="btn btn-lg btn-system"> Register Now</Link>
                   
                        <div class="tab-content">
                            <div class="latest-posts">
                            <br/>
                    <br/>
                            <Link to='/Important-Dates'><h3 class="classic-title" id="notifications"><span>Important Dates</span></h3></Link>

                                <div class="latest-posts-classic touch-carousel">


                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">10</span><span class="month">DEC</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><Link to="/Paper-Submission">Last Date for Paper Submission</Link></h4>
                                        

                                    </div>
                                    <br />
                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">20</span><span class="month">JAN</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><Link to="/Paper-Submission">Paper Acceptance Notification</Link></h4>

                                    </div>
                                    <br/>
                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">25</span><span class="month">JAN</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><Link to="#">Last Date for Submission of IPS</Link></h4>

                                    </div>
                                    <br />
                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">20</span><span class="month">FEB</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><Link to="#">Last Date for Camera Ready Submission </Link></h4>

                                    </div>
                                    <br />
                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">28</span><span class="month">FEB</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><Link to="/Register">Final Deadline for Registration</Link></h4>

                                    </div>
                                    <br />
                                    
                                    <br />
                                    


                                </div>
                            </div>
                        </div>
                        <br/>
                        <Notifications/>
                        <br/>
                        <br/>
                        <SponsorsOld/>
                        <br/>

                        <br/>
                        <Publications/>
                        <br/>
                        <div class="tab-content">
                            <div class="latest-posts" >
                                <h3 class="classic-title" id="notifications"><span>Paper Submission</span></h3>
                                <img src={Chair}></img>

                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>

    );
}

export default ImpDates;

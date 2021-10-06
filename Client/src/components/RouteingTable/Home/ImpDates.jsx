import React, { Components, useState } from 'react';

import Chair from '../../../images/publication/chair.png';
import Publications from './Publications';

function ImpDates() {
    return (
        <div>


            <div class="container">
                <div class="row">
                    <div className="col-md-4">
                        <div class="tab-content">
                            <div class="latest-posts">
                                <h3 class="classic-title" id="notifications"><span>Important Dates</span></h3>

                                <div class="latest-posts-classic touch-carousel">


                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">10</span><span class="month">Oct</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><a href="#">Paper Submission</a></h4>
                                        <p>Last Date is 20 Oct 2020</p>

                                    </div>
                                    <br />
                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">28</span><span class="month">Dec</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><a href="#">Last Date of Paper Submission</a></h4>

                                    </div>
                                    <br />
                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">28</span><span class="month">MAR</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><a href="#">Event Date</a></h4>

                                    </div>
                                    <br />
                                    <div class="post-row item">
                                        <div class="left-meta-post">
                                            <div class="post-date"><span class="day">10</span><span class="month">Oct</span>
                                            </div>

                                        </div>
                                        <h4 class="post-title"><a href="#">Paper Submission</a></h4>

                                    </div>
                                    <br />
                                    


                                </div>
                            </div>
                        </div>
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

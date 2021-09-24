import React, { Components, useState } from 'react';
import PageBanner from '../PageBanner';
import Header from '../../Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function PresentationInstructions() {
    return (
        <div>

            <PageBanner name="Presentation Instructions " head="Author" subhead="Presentation Instructions" info="Feel Free To Get In Touch" />
            <div id="content">



                <div class="container">



                    <div class="page-content">







                        <div class="col-md-9">



                            {/*<!-- <h4>A research student who wants to submit a paper for the WCE Research Symposium on Computing should prepare:</h4> -->*/}
                            <h4>Paper Submission Guidlines: </h4>
                            <br />



                            <ul style={{ listStyleType: 'disc' }}>
                                <li>Simultaneous submissions (papers already submitted to other conferences/journals) are not allowed.
                                </li>
                                <li>All papers must follow the conference template strictly for the submission.Violation of which leads
                                    to rejection of the paper.</li>
                                <li><b>Double Blind Review: </b> The author's identity such as name, affiliation and email address need to
                                    be provided in Easy Chair Account.No identity information shall be included in the initial paper.</li>
                                <li>Plagiarism Policy: A similarity upto 10% (Turn-It-In/ iThenticate verification) will be considered for
                                    the review process.</li>
                                <li>Maximum number of authors per paper shall not be more than four.</li>
                                <li>Paper Length: upto 8 pages including figures, tables and refrences.</li>
                                <li>File Size limitation: 5.0 MB.</li>
                                <li>No page numbering on the manuscript is allowed.</li>
                            </ul>



                            <br />










                            <h3><br />Note: </h3>
                            <p>All the three documents must be written in English.</p>



                        </div>



                        <div class="col-md-3 sidebar right-sidebar">




                            <div class="widget widget-categories">



                                <h4>Related Links <span class="head-line"></span></h4>



                                <ul>







                                    <li>



                                        <Link to="Call-for-contribution">Call for Contributions</Link>




                                    </li>











                                    <li>



                                        <Link to="Paper-Submission">Paper Submission</Link>



                                    </li>







                                    <li>

                                        <Link to="Important-Dates">Important Dates</Link>

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

export default PresentationInstructions;

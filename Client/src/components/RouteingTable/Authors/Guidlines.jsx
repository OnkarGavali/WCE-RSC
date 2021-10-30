import React, { Components, useState } from 'react';
import PageBanner from '../PageBanner';
import Header from '../../Header';
import {
    Link
} from "react-router-dom";


function Guidlines() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Submission Guidlines" head="Author" subhead="Submission Guidlines" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
           
            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-9">
                            {/*<!-- <h4>A research student who wants to submit a paper for the WCE Research Symposium on Computing should prepare:</h4> -->*/}
                            <h3 className="classic-title" id="notifications"><span>Paper Submission Guidlines </span></h3>

                            <ul style={{ listStyleType: 'disc', marginLeft: '3%' }}>
                                <li>Simultaneous submissions (papers already submitted to other conferences/journals) are not allowed.
                                </li>
                                <li>All papers must follow the conference template strictly for the submission.Violation of which leads
                                    to rejection of the paper.</li>
                                <li><b>Double Blind Review: </b> The author's identity such as name, affiliation and email address need to
                                    be provided in Easy Chair Account.No identity information shall be included in the initial paper.</li>
                                <li>Plagiarism Policy: Document content similarity upto 15% (Turn-It-In) will be considered acceptable for the review process.</li>
                                <li>Maximum number of authors per paper shall not be more than four.</li>
                                <li>Paper Length limited to 8 pages including figures, tables and references. A maximum of two additional pages are permitted with an additional charge of INR 1000/- per page and
                                    is to be paid during author registration</li>
                                <li>File Size limitation: 5.0 MB.</li>
                                <li>No page numbering on the manuscript is allowed.</li>
                            </ul>

                            <div className="hr5" style={{marginTop:'30px',marginBottom:'30px'}}></div>

                            <h3 className="classic-title" id="notifications"><span>Publication</span></h3>
                            <p>All the selected and presented papers in the conference except E-learning Track will be
                                published in Springer Book Series (in Process). The papers of E-learning track will be
                                published in RSC proceedings only. The Organizing Committee's decision will be final
                                on publications of paper in the journals.
                            </p>
                          
                            <div className="hr5" style={{marginTop:'30px',marginBottom:'30px'}}></div>

                            <h3 className="classic-title" id="notifications"><span>Note</span></h3>
                            <p>All the three documents must be written in English.</p>
                        </div>

                        {/* Related Links - start */}
                        {/* Related Links - end */}
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4>Related Links <span className="head-line"></span></h4>
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

export default Guidlines;

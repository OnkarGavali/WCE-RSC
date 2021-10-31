import React, { Components, useState } from 'react';

import PageBanner from '../PageBanner';
import ContributionTopics from './ContributionTopics';
import {Link} from "react-router-dom";


function CallForContriBution() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner  name="Call for Contribution" head="Author" subhead="Call for Contribution"/>
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-9">
                            <h2 className="classic-title" id="notifications"><span>Call for Papers</span></h2>
                            <p>
                                The WCE Research Symposium on Computing - RSC 2022 welcomes research paper submissions from faculty,
                                doctoral students, research scholars and industry experts who are actively working in the area of Computer
                                Science and Engineering and allied branches.
                                The selected papers will be forwarded for its publication in Springer book series (in process)
                            </p>
                            <p>
                                Topics covered include, but are not limited to:
                            </p>

                            <ContributionTopics/>

                        </div>
                        {/* Related Links - start */}
                        <div className ="col-md-3 sidebar right-sidebar">
                            <div className ="widget widget-categories">
                                <h4 className="accent-color">Related Links <span className ="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="Guidlines">Submission Guidlines</Link>
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
                        {/* Related Links - end */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CallForContriBution;

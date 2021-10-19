import React, { Components, useState } from 'react';
import Header from '../../Header';
import PageBanner from '../PageBanner';
import ContributionTopics from './ContributionTopics';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function CallForContriBution() {
    return (
        <div>


            <PageBanner  name="Call for Contribution" head="Author" subhead="Call for Contribution"/>
            <div id="content">

                <div class="container">

                    <div class="page-content">



                        <div class="col-md-9">



                            <h1 class="accent-color">WCE Research Symposium on Computing - RSC 2022</h1>

                            <p><strong>SIXTH RESEARCH SYMPOSIUM ON COMPUTING <br />National Level joint Event by WCE ACM
                                Student Chapter and Department of CSE and Department of IT (WCE,Sangli) and Jabalpur College of
                                Engineering, Jabalpur </strong></p>



                            <h1 class="accent-color">Call for papers</h1>



                            <p>The WCE Research Symposium on Computing - RSC 2021 welcomes research paper submissions from faculty,
                                doctoral students, research scholars and industry experts who are actively working in the area of Computer
                                Science and Engineering and allied branches.

                                The selected papers will be forwarded for its publication in IFERP <br />

                                Topics covered include, but are not limited to:</p>

                            <ContributionTopics/>
                            

                        </div>

                            <div class ="col-md-3 sidebar right-sidebar">

                            
                            <div class ="widget widget-categories">

                            <h4>Related Links <span class ="head-line"></span></h4>

                            <ul>

                            <li>

                            <Link to="Presentation-Instructions">Presentation Instructions</Link>

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

            export default CallForContriBution;

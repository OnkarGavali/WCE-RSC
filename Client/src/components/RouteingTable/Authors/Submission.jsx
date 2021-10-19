import React, { Components, useState } from 'react';
import Header from '../../Header';
import PageBanner from '../PageBanner';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Submission() {
    return (
        <div>
            
            <PageBanner name="Paper Submission" head="Author" subhead="Paper Submission" info="Feel Free To Get In Touch" />
            <div id="content">
                <div class="container">
                    <div class="page-content">

                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-sm-12">
                                    {/*<!-- <div class="alert alert-success alert-dismissible">
                                        <h3>The Submissions portal is yet to open. For further updates stay tuned !.!.! <br /></h3>
                                    </div> -->
                                    */}
                                </div>
                            </div>

                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-sm-12">

                                   {  /*   <!-- <div class="alert alert-danger">
                                            <h3>
                                                The paper submission for possible inclusion in Springer / e-proceedings and Innovative project showcasing have been closed.  The submissions for Innovative Project Showcasing is open till 18 November 2018
                                            </h3>
                                        </div> -->*/}

                                        <div>
                                            <h4>While submitting your paper through easy chair please mention your category of submission either A, B ,or C in the title section</h4>
                                            <br/>
                                            <div>
                                            <ul style={{listStyleType:'disc'}}>
                                            <li>Category A: for Paper Submission</li>
                                            <li>Category B: for Poster Submission</li>
                                            <li>Category C: IPS Submission</li>
                                            </ul>
                                            </div>
                                            <br/>
                                            <img src="/images/Sub.jpg" alt="Submission"/>
                                            </div>
                                            <div class ="alert alert-success alert-dismissible">
                                            <h3><a href="https://easychair.org/conferences/?conf=rsc2021" target="_blank">Click Here</a> for submission of papers, RSC 2022</h3>
                                            </div>
                                            </div>
                                        </div>


                                     { /*  <!--div class="row">
                                        <div class="col-sm-12">
                                            <div class="alert alert-success alert-dismissible">
                                                <h3><i class="fa fa-download"></i> Download Template for Paper<br />
                                                    <a href="IJCSE_Paper_Template.doc">IJCSE_Paper_Template.doc</a></h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="alert alert-success alert-dismissible">
                                                <h3><i class="fa fa-download"></i> Download Copyright Form <br />
                                                    <a href="IJCSE_Copyright_Form.pdf">IJCSE_Copyright_Form.pdf</a></h3>
                                            </div>
                                        </div>
                                    </div-->
                                     */}


                                </div>
                                <div class="col-md-3 sidebar right-sidebar">
                                    
                                    <div class="widget widget-categories">
                                        <h4>Related Links <span class="head-line"></span></h4>
                                        <ul>

                                            <li>
                                                <Link to="Call-for-contribution">Call for Contributions</Link>
                                            </li>

                                            <li>
                                            <Link to="Presentation-Instructions">Presentation Instructions</Link>
                                            </li>

                                            <li>
                                               <Link to="/Important-Dates">Important Dates</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                );
}

                export default Submission;

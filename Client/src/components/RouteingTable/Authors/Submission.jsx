import React from 'react';
import PageBanner from '../PageBanner';
import {
    Link
} from "react-router-dom";

function Submission() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Paper Submission" head="Author" subhead="Paper Submission" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
           
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-sm-12">
                                    {/*<!-- <div className="alert alert-success alert-dismissible">
                                        <h3>The Submissions portal is yet to open. For further updates stay tuned !.!.! <br /></h3>
                                    </div> -->
                                    */}
                                </div>
                            </div>

                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-sm-12">

                                   {  /*   <!-- <div className="alert alert-danger">
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
                                            <div className ="alert alert-success alert-dismissible">
                                            <h3><a href="https://easychair.org/conferences/?conf=rsc2021" target="_blank">Click Here</a> for submission of papers, RSC 2022</h3>
                                            </div>
                                            </div>
                                        </div>


                                     { /*  <!--div className="row">
                                        <div className="col-sm-12">
                                            <div className="alert alert-success alert-dismissible">
                                                <h3><i className="fa fa-download"></i> Download Template for Paper<br />
                                                    <a href="IJCSE_Paper_Template.doc">IJCSE_Paper_Template.doc</a></h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="alert alert-success alert-dismissible">
                                                <h3><i className="fa fa-download"></i> Download Copyright Form <br />
                                                    <a href="IJCSE_Copyright_Form.pdf">IJCSE_Copyright_Form.pdf</a></h3>
                                            </div>
                                        </div>
                                    </div-->
                                     */}


                                </div>
                               
                            </div>
                            {/* Related Links - start */}
                            <div className="col-md-3 sidebar right-sidebar"> 
                                <div className="widget widget-categories">
                                    <h4 className="accent-color">Related Links <span className="head-line"></span></h4>
                                    <ul>
                                        <li>
                                            <Link to="Call-for-contribution">Call for Contributions</Link>
                                        </li>
                                        <li>
                                            <Link to="Guidlines">Submission Guidlines</Link>
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

                export default Submission;

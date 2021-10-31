import React, { Components, useState } from 'react';
import PageBanner from '../PageBanner';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function PosterPresentation() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Poster Presentations" head="Programs" subhead="Poster Presentations" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9" style={{ textAlign: "justify" }}>
                            <div className="row">
                                <h4 className="title"> Size & Layout</h4>
                                <ul className="icons-list">
                                    <li><i className="fa fa-check-circle"></i> As indicated in the figure below, and for authors and audience comfort, the landscape (horizontal) format is privileged. Each poster is assigned a 121 cm (48 in.) by 76 cm (30 in.) space and your poster must fit in this space. However, it is suggested that your poster should not exceed <b>101 cm (40 in.) x 68 cm (27 in.).</b></li><br />
                                    <li><i className="fa fa-check-circle"></i> The boards in the Poster Area will boast tags, indicating which board is assigned to your paper. These will be updated as papers sessions unfold.</li><br />

                                    <li><img src="images/poster.png" alt="Poster" /></li>

                                    <li><i className="fa fa-check-circle"></i> Fixings (tack pins) will be available. The posters must be set up before the start of the poster session time, and at least one author must be present during the entire designated period for that session.</li><br />
                                </ul>
                                <h4 className="title"> Organization of Ideas</h4>
                                <ul className="icons-list"> </ul>
                                <li><i className="fa fa-check-circle"></i> Your poster should cover the key points of your work.It need not, and should not, attempt to include all the details; you can describe them in person to people who are interested.The ideal poster is designed to attract attention, provide a brief overview of your work, and initiate discussion.Carefully and completely prepare your poster well in advance of the conference.Try tacking up the poster before you leave for the conference to see what it will look like and to make sure that you have all of the necessary pieces.</li><br />

                                <li><i className="fa fa-check-circle"></i> Make your poster as self-explanatory as possible.This will save your efforts for technical discussions.There will not be any summaries given at the beginning of the poster sessions, so authors need not prepare any overhead slides for their poster presentations.You may bring additional battery-operated audio or visual aids to enhance your presentation.No electricity will be available for use by poster presenters.</li><br />

                                <h4 className="title"> Format</h4>
                                <ul className="icons-list"></ul>
                                <li><i className="fa fa-check-circle"></i> It is strongly recommended that the posters be formatted according to the following recommendations: </li>
                                <ul>
                                    <div className="pricing">
                                        <div className="well">
                                            <ul className="icons-list">
                                                <li><i className="fa fa-check-circle"></i> The heading should list the paper title, author(s) name(s) and affiliation(s).It should be in CAPITAL bold face type and readable from a distance of ~2 m (~6 ft).This translates in 25 mm (1 in) high or better letters; </li>
                                                <br />
                                                <li><i className="fa fa-check-circle"></i> The font size for the headings of the abstract , introduction, results, conclusions, references, and any other sections, and the text and the captions for figures and graphs should be readable from a distance of ~1 m (~3 ft); </li>
                                                <br />
                                                <li><i className="fa fa-check-circle"></i> The flow of your poster should be from the top left to the bottom right.Use arrows to lead your viewer through the poster.Use color for highlighting and to make your poster more attractive;
                                                </li><br />
                                                <li><i className="fa fa-check-circle"></i> Try to state your main result in 6 lines or less, in lettering about 15mm high so that people can read the poster from a distance; </li>
                                                <br />
                                                <li><i className="fa fa-check-circle"></i> The smallest text on your poster should be at least 9 mm high, and the important points should be in a larger type.Use a sans-serif font to make the print easier to read from a distance.</li>
                                                <br />  </ul></div></div>
                                </ul>

                                <h4 className="title"> Presentation</h4>
                                <ul className="icons-list">
                                <li><i className ="fa fa-check-circle"></i> Plan to arrive before the session scheduled start so that your poster is up at the beginning of the session.</li><br/>

                                <li><i className ="fa fa-check-circle"></i> Prepare a short presentation of about 5 or 10 minutes that you can periodically give to those assembled around your poster throughout the session.If possible, more than one author should attend the session to aid in presentations and discussions, and to provide the presenters with the chance to rest or briefly view other posters.</li><br />

                            
                                <li><i className ="fa fa-check-circle"></i> Authors are encouraged to check their posters' correctness via a trial run with their colleagues at their home institutions rather than seeing it for the first time at the conference.</li><br />
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 sidebar right-sidebar">

                            <div className="widget widget-categories">
                                <h4>Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="Keynotes">Keynotes & Award Presentation</Link>
                                    </li>
                                    <li>
                                        <Link to="Paper-Presentation">Paper Presentation</Link>
                                    </li>
                                    <li>
                                        <Link to="IPS">Innovative Project Showcase</Link>
                                    </li>
                                    <li>
                                        <Link to="Schedule">Event Schedule</Link>
                                    </li>
                                    <li>
                                        <Link to="Register">Registration</Link>
                                    </li>

                                </ul>
                            </div>


                        </div>
                    

                </div>
            </div>

        </div>



                                    </div >
                                    );
}

export default PosterPresentation;

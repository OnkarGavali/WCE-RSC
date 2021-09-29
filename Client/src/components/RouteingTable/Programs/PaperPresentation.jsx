import React, { Components, useState } from 'react';
import PageBanner from '../PageBanner';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function PaperPresentation() {
    return (
        <div>
            <PageBanner name="Paper Presentations" head="Programs" subhead="Paper Presentations" info="Feel Free To Get In Touch" />
            <div id="content">
                <div class="container">
                    <div class="page-content">

                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-sm-12">
                                <br/>
                                        <br/>
                                    <div class="alert alert-success alert-dismissible">
                                        
                                        <h3>More Information Will Be Displayed Soon! Stay Tuned For Updates.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 sidebar right-sidebar">
                         
                            <div class="widget widget-categories">
                                <h4>Related Links <span class="head-line"></span></h4>
                                <ul>

                                    <li>
                                        <Link to="/Keynotes">Keynotes &amp; Award Presentation</Link>
                                    </li>


                                    <li>
                                        <Link to="/Poster-Presentation">Poster Presentation</Link>
                                    </li>

                                    <li>
                                        <Link to="/Schedule">Event Schedule</Link>
                                    </li>
                                    <li>
                                        <Link to="/Register">Registration</Link>
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

            export default PaperPresentation;

import React from 'react';
import {
    Link
  } from "react-router-dom";
  import PageBanner from '../PageBanner';



function Schedule()
{
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Schedule" head="Programs" subhead="Schedule" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}

            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="alert alert-success alert-dismissible">
                                        <h3>More Information Will Be Displayed Soon! Stay Tuned For Updates.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Related Links <span className="head-line"></span></h4>
                                <ul>

                                    <li>
                                        <Link to="Keynotes">Keynotes & Award Presentation</Link>
                                    </li>

                                    <li>
                                        <Link to="Paper-Presentation">Paper Presentation</Link>
                                    </li>
                                    <li>
                                        <Link to="Poster-Presentation">Poster Presentation</Link>
                                    </li>
                                    <li>
                                        <Link to="IPS">Innovative Project Showcase</Link>
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
        </div>
    );
}

export default Schedule;

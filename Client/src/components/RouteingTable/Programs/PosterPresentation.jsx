import React, { useEffect, useState } from 'react';
import PageBanner from '../PageBanner';
import {
    Link
} from "react-router-dom";
import posterPresentation from "../../../JSON/Programs/posterPresentation.json"


function PosterPresentation() {

    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [toShow, setToShow] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setAllData(posterPresentation);
        if(allData.maintenanceBreakState){
            setToShow(false);
        }else{
            setToShow(true);
        }
        setIsLoading(false)
        
    }, [allData])

    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Poster Presentations" head="Programs" subhead="Poster Presentations" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        {/* Main Content - start */}
                        <div className="col-md-9" style={{ textAlign: "justify" }}>
                            {
                                isLoading ? (
                                        <div>Loading</div>
                                ) : (
                                    <>
                                        <h3 className="classic-title"><span>Size & Layout</span></h3>
                                        {
                                            allData.data.sizeAndLayout && <p style={{whiteSpace:'pre-line'}}>{allData.data.sizeAndLayout}</p>
                                        }
                                        <img src="/images/poster.png" alt="Poster" style={{margin:"10px"}}/>
                                        
                                        
                                        <h3 className="classic-title"><span>Organization of Ideas</span></h3>
                                        {
                                            allData.data.organisationOfIdeas && <p style={{whiteSpace:'pre-line'}}>{allData.data.organisationOfIdeas}</p>
                                        }

                                        <h3 className="classic-title"><span>Format</span></h3>
                                        {
                                            allData.data.format && <p style={{whiteSpace:'pre-line'}}>{allData.data.format}</p>
                                        }
                                        <h3 className="classic-title"><span>Presentation</span></h3>
                                        {
                                            allData.data.presentation && <p style={{whiteSpace:'pre-line'}}>{allData.data.presentation}</p>
                                        }                               
                                    </>
                                )
                            }
                        </div>
                        {/* Main Content - end */}

                        {/* Related Links - Start */}
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4 className="accent-color">Related Links <span className="head-line"></span></h4>
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
                        {/* Related Links - end */}


                    </div>
                </div>
            </div>
        </div >
    );
}

export default PosterPresentation;

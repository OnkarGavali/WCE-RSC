import React, { useEffect, useLayoutEffect, useState } from 'react';
import PageBanner from '../PageBanner';
import {
    Link
} from "react-router-dom";
import displayNotice from '../DisplayNotice'
import guidelines from '../../../JSON/Authors/guidelines.json'
import MaintenanceBreak from '../MaintenanceBreak';

function Guidlines() {

    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessage, setMaintenanceBreakMessage] = useState(null);
    const [displayNotice, setDisplayNotice] = useState(null);
    const [peperSubList, setPeperSubList] = useState([]);
    const [toShow, setToShow] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    


    useEffect(() => {
        //api call
        
        setAllData(guidelines)
        if(allData.maintenanceBreakState){
            setToShow(false);
        }else{
            setToShow(true);
            //setPeperSubList(guidelines.data.paperSubGuidelineList);
        }
        setIsLoading(false)

       
        
    }, [allData])


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
                            
                            {
                                isLoading ? (
                                    <div>Loading</div>
                                ) : (
                                    <>
                                    <h3 className="classic-title" id="notifications"><span>Paper Submission Guidlines</span></h3>
                                    { 
                                        toShow ? (
                                            <React.Fragment>
                                                <ul style={{ listStyleType: 'disc', marginLeft: '3%' }}>
                                                    {
                                                        allData.data.paperSubGuidelineList ? (
                                                                allData.data.paperSubGuidelineList.map((item)=><li key={item.id}>{item.listItem}</li>)
                                                            ) : null                                                       
                                                    }
                                                </ul>

                                                <div className="hr5" style={{marginTop:'30px',marginBottom:'30px'}}></div>

                                                <h3 className="classic-title" id="notifications"><span>Publication</span></h3>
                                                <p style={{whiteSpace:'pre-line'}}>{allData.data.publicationInfo }</p>

                                                <div className="hr5" style={{marginTop:'30px',marginBottom:'30px'}}></div>

                                                <h3 className="classic-title" id="notifications"><span>Note</span></h3>
                                                <p style={{whiteSpace:'pre-line'}}>{allData.data.noteInfo}</p>

                                            </React.Fragment>
                                        ) : (
                                            // <MaintenanceBreak heading={allData.maintenanceBreakHeading} message={allData.maintenanceBreakContent}/>
                                            null
                                            
                                        )
                                    }
                                        </>
                                )
                            }
                           
                      

                            

                            

                            
                          
                            
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

export default Guidlines;

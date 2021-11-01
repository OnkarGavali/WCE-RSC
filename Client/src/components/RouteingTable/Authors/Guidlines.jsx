import React, { useEffect, useState } from 'react';
import PageBanner from '../PageBanner';
import {
    Link
} from "react-router-dom";
import displayNotice from '../DisplayNotice'
import guidelines from '../../../JSON/Authors/guidelines.json'
import MaintenanceBreak from '../MaintenanceBreak';

function Guidlines() {

    const [allData, setAllData] = useState([]);
    const [titleOne, setTitleOne] = useState("Paper Submission Guidlines");//by Default
    const [titleTwo, setTitleTwo] = useState("Publication");//by Default
    const [titleThree, setTitleThree] = useState("Note");//by Default
    const [maintenanceBreakMessage, setMaintenanceBreakMessage] = useState(null);
    const [displayNotice, setDisplayNotice] = useState(null);
    const [peperSubList, setPeperSubList] = useState([]);
    const [toShow, setToShow] = useState(true);

    


    useEffect(() => {
        //api call
        console.log('a');
        setAllData(guidelines);

        console.log(guidelines)

        if(allData){
            console.log("empty")
        }
        //set all titles
        if(allData.title){
            setTitleOne(allData.title)
            console.log(titleOne)
        }
        if(allData.publicationInfoTitle){
            setTitleTwo(allData.publicationInfoTitle)
        }
        if(allData.noteInfoTitle){
            setTitleThree(allData.noteInfoTitle)
            console.log(titleThree)
        }


        if(allData.maintenanceBreakStatus){
            setToShow(false);

        } else {
             setToShow(true);
             setPeperSubList(allData.paperSubGuidelineList)
             console.log(peperSubList)
        }
        
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
                            <h3 className="classic-title" id="notifications"><span>Paper Submission Guidlines</span></h3>

                            { 
                                toShow ? (
                                    <React.Fragment>
                                        <ul style={{ listStyleType: 'disc', marginLeft: '3%' }}>
                                            {
                                                peperSubList.map((item)=>{<li key={item.id}>{item.listItem}</li>})
                                               
                                            }
                                        </ul>
                                        <div className="hr5" style={{marginTop:'30px',marginBottom:'30px'}}></div>

                                        <h3 className="classic-title" id="notifications"><span>{titleTwo}</span></h3>
                                        {/* <p>{allData.publicationInfo}
                                        </p> */}

                                    </React.Fragment>
                                ) : (
                                    <MaintenanceBreak heading={allData.maintenanceBreakHeading} message={allData.maintenanceBreakContent}/>
                                    
                                )
                            }

                            

                            

                            
                          
                            <div className="hr5" style={{marginTop:'30px',marginBottom:'30px'}}></div>

                            <h3 className="classic-title" id="notifications"><span>Note</span></h3>
                            <p>All the three documents must be written in English.</p>
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

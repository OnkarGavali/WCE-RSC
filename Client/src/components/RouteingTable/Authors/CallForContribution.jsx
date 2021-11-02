import React, { useEffect, useState } from 'react';

import PageBanner from '../PageBanner';

import {Link} from "react-router-dom";

import TopicsList from '../../../JSON/Authors/contributionTopics.json'
import MaintenanceBreak from '../MaintenanceBreak';


function CallForContriBution() {
    const [allData, setAllData] = useState([]);
   
   
    const [toShow, setToShow] = useState(true);
    const [paragraph, setParagraph] = useState("");
    const [list, setList] = useState([])
    useEffect(() => {
        //api call
        setAllData(TopicsList);
        if(allData.maintenanceBreakState){
            setToShow(false);
        }else{
            setToShow(true);
            setParagraph(allData.data.paragraph);
            setList(allData.data.topicList);
        }
    }, [allData])
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner  name="Call for Contribution" head="Author" subhead="Call for Contribution"/>
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-9">
                            <h2 className="classic-title" id="notifications"><span>Call For Papers</span></h2>
                            {   
                                toShow ? (
                                    <React.Fragment>  
                                        {
                                            paragraph ? (
                                                <p style={{whiteSpace:'pre-line'}}>{paragraph}</p>
                                            ) : null
                                        }
                                        {
                                            list ? (
                                                <ul className="icons-list">
                                                    <strong>
                                                        {
                                                            list.map((topic)=>(
                                                                <li key={topic.id}><i className="fa fa-check-circle"></i> {topic.topicName}</li>
                                                            ))
                                                        }
                                                    </strong>
                                                </ul>
                                            ) : null
                                        }
                                        
                                    </React.Fragment>
                                ) : ( 
                                    // <MaintenanceBreak message={maintenanceBreakMessage}/>
                                    null
                                    
                                )
                            }
                            

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

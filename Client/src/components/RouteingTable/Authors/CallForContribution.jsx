import React, { useEffect, useState } from 'react';

import PageBanner from '../PageBanner';

import {Link} from "react-router-dom";

import TopicsList from '../../../JSON/Authors/contributionTopics.json'
import MaintenanceBreak from '../MaintenanceBreak';


function CallForContriBution() {
    const [allData, setAllData] = useState([]);
    const [title, setTitle] = useState("Call For Paper");//by Default
    const [maintenanceBreakMessage, setMaintenanceBreakMessage] = useState(null);
    const [toShow, setToShow] = useState(true);
    const [titleParagraph, setTitleParagraph] = useState([]);
    const [list, setList] = useState([])
    useEffect(() => {
        //api call
        setAllData(TopicsList);
        if(allData.title){
            setTitle(allData.title);
            console.log(title);
            console.log('aa');
        }
        if(allData.maintenanceBreakState){
            setToShow(false);
            if(allData.maintenanceBreakMessage){
                setMaintenanceBreakMessage(allData.maintenanceBreakMessage);
            }else{
                setMaintenanceBreakMessage(null);
            }
           
        }else{
            setToShow(true);
            setTitleParagraph(allData.titleParagraph);
            setList(allData.topicList);
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
                            <h2 className="classic-title" id="notifications"><span>{title}</span></h2>
                            {   
                                toShow ? (
                                    <React.Fragment>  
                                        {
                                            titleParagraph ? (
                                                titleParagraph.map((para) =><p key={para.id}>{para.p}</p>)
                                            ) : null
                                        }
                                        {
                                            list ? (
                                                <ul className="icons-list">
                                                    <strong>
                                                        {
                                                            list.map((topic)=>(
                                                                <li key={topic.id}><i className="fa fa-check-circle"></i>{topic.topicName}</li>
                                                            ))
                                                        }
                                                    </strong>
                                                </ul>
                                            ) : null
                                        }
                                        
                                    </React.Fragment>
                                ) : ( 
                                    <MaintenanceBreak message={maintenanceBreakMessage}/>
                                    
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

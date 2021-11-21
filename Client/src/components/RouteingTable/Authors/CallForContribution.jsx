import React, { useEffect, useState } from 'react';

import PageBanner from '../PageBanner';

import {Link} from "react-router-dom";

import TopicsList from '../../../JSON/Authors/contributionTopics.json'
import MaintenanceBreak from '../MaintenanceBreak';
import axios from 'axios';
import { DisplayNotice } from '../DisplayNotice';


function CallForContriBution() {

    //data from api
    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [maintenanceBreakMessageHead, setMaintenanceBreakMessageHead] = useState("");
    const [maintenanceBreakMessageContent, setMaintenanceBreakMessageContent] = useState("");

    
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [displayNoticeHead, setDisplayNoticeHead] = useState("");
    const [displayNoticeContent, setDisplayNoticeContent] = useState("");

    
    const [paragraph, setParagraph] = useState("");
    const [list, setList] = useState([])

    const [toShow, setToShow] = useState(true);
    const [isLoading, setIsLoading] = useState(true);




    useEffect(() => {
        const getData = async () => {
            
            await axios.get("/get/contributionTopics").then((response)=>{
                if(response.data[0]){
                    setAllData(response.data[0]); 
                    console.log(response)
                } else {
                    setMaintenanceBreakMessageStatus(true);
                    setMaintenanceBreakMessageHead("Problem in Fetching data")
                    setMaintenanceBreakMessageContent("Please Contact admin for details")
                }
                console.log(response)
            }).catch((e)=>{
             /* HANDLE THE ERROR (e) */
                console.log(e);
                setMaintenanceBreakMessageStatus(true);
                setMaintenanceBreakMessageHead("Problem in Fetching data")
                setMaintenanceBreakMessageContent("Please Contact admin for details")
            });
            setIsLoading(false);
           
        };
        getData();
        setIsLoading(false);
    },[])

    useEffect(() => {
        if(!isLoading){
            if(allData.maintenanceBreakStatus){
                setToShow(false);
                setMaintenanceBreakMessageStatus(allData.maintenanceBreakStatus) 
                setMaintenanceBreakMessageHead(allData.maintenanceBreakHeading)
                setMaintenanceBreakMessageContent(allData.maintenanceBreakContent) 
            } else {
                setToShow(true);
                if(allData.displayNoticeStatus){
                    setDisplayNoticeStatus(allData.displayNoticeStatus)
                    setDisplayNoticeHead(allData.displayNoticeHeading)
                    setDisplayNoticeContent(allData.displayNoticeContent)
                }
                // setParagraph(allData.data.paragraph)
                // setList(allData.data.topicList)
                console.log(allData)
            }
        }
    }, [allData])


    
    useEffect(() => {
        if(list && paragraph){
            console.log(paragraph)
            console.log(list)
        }
    }, [list,paragraph])
    
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner  name="Call for Contribution" head="Author" subhead="Call for Contribution"/>
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-9">
                            {
                                isLoading ? (
                                    <div>Loading</div>
                                ) : (
                                    <>
                                    <h2 className="classic-title" id="notifications"><span>Call For Papers</span></h2>
                                    {   
                                        toShow ? (
                                            <React.Fragment> 
                                                {
                                                    displayNoticeStatus ? (
                                                        <DisplayNotice heading={displayNoticeHead} message={displayNoticeContent} />
                                                    ) : null
                                                } 
                                                {
                                                    allData.data ? (
                                                        <p style={{whiteSpace:'pre-line'}}>{ allData.data.paragraph}</p>
                                                    ) : null
                                                }
                                                {
                                                    allData.data ? (
                                                        <ul className="icons-list">
                                                            <strong>
                                                                {
                                                                    allData.data.topicList.map((topic)=>(
                                                                        <li key={topic.id} style={{whiteSpace:'pre-line'}}><i className="fa fa-check-circle"></i> {topic.topicName}</li>
                                                                    ))
                                                                }
                                                            </strong>
                                                        </ul>
                                                    ) : null
                                                }
                                                
                                            </React.Fragment>
                                        ) : ( 
                                            <MaintenanceBreak heaading={maintenanceBreakMessageHead} message={maintenanceBreakMessageContent} />
                                            
                                        )
                                    }
                                    </>
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

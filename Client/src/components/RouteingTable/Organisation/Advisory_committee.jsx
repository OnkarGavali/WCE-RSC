import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import PageBanner from '../PageBanner';
import axios from 'axios';
import MaintenanceBreak from '../MaintenanceBreak';
import { DisplayNotice } from '../DisplayNotice';





function Adv_Committee() {



    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [maintenanceBreakMessageHead, setMaintenanceBreakMessageHead] = useState("");
    const [maintenanceBreakMessageContent, setMaintenanceBreakMessageContent] = useState("");
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [displayNoticeHead, setDisplayNoticeHead] = useState("");
    const [displayNoticeContent, setDisplayNoticeContent] = useState("");
    const [toShow, setToShow] = useState(true);


    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/advisory"
            ).then((response)=>{
                if(response.data){
                    setAllData(response.data[0]); 
                    console.log(response)
                } else {
                    setMaintenanceBreakMessageStatus(true);
                    setMaintenanceBreakMessageHead("Problem in Fetching data")
                    setMaintenanceBreakMessageContent("Please Contact admin for details")
                }
            }).catch((e)=>{
             /* HANDLE THE ERROR (e) */
                console.log(e);
                setMaintenanceBreakMessageStatus(true);
                setMaintenanceBreakMessageHead("Problem in Fetching data")
                setMaintenanceBreakMessageContent("Please Contact admin for details")
                
            });
            
        };
        getData();
        setIsLoading(false);
        console.log("end of api")
        console.log(allData)
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
                console.log(allData)
            }
        }
        console.log("all data use Effect")
        console.log(isLoading)
    }, [allData])

    useEffect(() => {
        if(maintenanceBreakMessageStatus){
            if(!maintenanceBreakMessageHead){ 
                setMaintenanceBreakMessageHead("hi")
            }
            if(!maintenanceBreakMessageContent){
                setMaintenanceBreakMessageContent("hihi")
            }
        }
    }, [maintenanceBreakMessageContent,maintenanceBreakMessageHead,maintenanceBreakMessageStatus])

    

    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Advisory Committee" head="Organisation" subhead="Advisory Committee" info="We Are WCE Research Symposium" />
            {/* PageBanner - end */}
            

            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                       
                        {/* Main Content - start */}
                        <div className="col-md-9">
                            {
                                isLoading ? (
                                    <div>Loading</div>
                                ) : (
                                    <>
                                        {
                                            toShow ? (
                                                <>
                                                    <h1 className="accent-color">Advisory Committee</h1>
                                                    {
                                                        displayNoticeStatus ? (
                                                            <DisplayNotice heading={displayNoticeHead} message={displayNoticeContent} />
                                                        ) : null
                                                    }
                                                    <br />
                                                    <table className="table table-responsive table-condensed table-bordered">
                                                        <thead>
                                                            <th>Name</th>
                                                        </thead>
                                                        <tbody>
                                                            
                                                            {
                                                                allData.advisoryList ? (
                                                                    allData.advisoryList.map(Entry => <tr key={Entry._id}>
                                                                        <td>{Entry.name}</td>
                                                                    </tr>)
                                                                ) : null
                                                            }
                                                        </tbody>
                                                    </table>
                                                </>
                                            ) : (
                                                <MaintenanceBreak heading={maintenanceBreakMessageHead} message={maintenanceBreakMessageContent}/>
                                            )
                                        }
                                        
                                    </>
                                )
                            }
                            
                        </div>
                        {/* Main Content - end */}
                        
                        {/* Related Links - start */}
                        <div className ="col-md-3 sidebar right-sidebar">
                            <div className ="widget widget-categories">
                                <h4 className="accent-color">Related Links <span className ="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="org_committee">Organising Committee</Link>
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

export default Adv_Committee;

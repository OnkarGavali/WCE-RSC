import React, { useEffect, useState } from 'react';
import PageBanner from '../PageBanner';
import {Link} from "react-router-dom";
import axios from 'axios'
import Key from '../../../JSON/Programs/Keynote.json'
import MaintenanceBreak from '../MaintenanceBreak';
import { DisplayNotice } from '../DisplayNotice';


function Keynotes() {
    

    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [maintenanceBreakMessageHead, setMaintenanceBreakMessageHead] = useState("");
    const [maintenanceBreakMessageContent, setMaintenanceBreakMessageContent] = useState("");
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [displayNoticeHead, setDisplayNoticeHead] = useState("");
    const [displayNoticeContent, setDisplayNoticeContent] = useState("");
    const [toShow, setToShow] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    var srNoCounter = 1;
    const [presentations, setPresentations] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/keyNotes"
            ).then((response)=>{
                if(response.data[0]){
                    setAllData(response.data[0]); 
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
                console.log(allData)
            }
        }
    }, [allData])

    // useEffect(() => {
    //     setAllData(Key);
    //     if(allData.maintenanceBreakState){
    //         setToShow(false);
    //     }else{
    //         setToShow(true);
    //     }
    //     setIsLoading(false)
    // }, [allData])
    
    

    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Presentations" head="Programs" subhead="Keynotes & Presentation" info="Feel Free To Get In Touch" />
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
                                        {
                                            toShow ? (
                                                <>
                                                    {
                                                        displayNoticeStatus ? (
                                                            <DisplayNotice heading={displayNoticeHead} message={displayNoticeContent} />
                                                        ) : null
                                                    }
                                                    
                                                    <table className="table table-responsive table-condensed table-bordered">
                                                        <thead className='thead-dark'>
                                                            <th>Sr No</th>
                                                            <th>Name</th>
                                                            <th>Designation</th>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allData.data ? (
                                                                    allData.data.Speakers.map(obj => (<tr key={obj._id}>
                                                                        <td>{srNoCounter++}</td>
                                                                        <td>{obj.name}</td>
                                                                        <td>{obj.designation}</td>
                                                                    </tr>)
                                                                    
                                                                )) : null

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

                        {/* Related Links - start */}
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Related Links <span className="head-line"></span></h4>
                                <ul>
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
        </div>
    );
}

export default Keynotes;

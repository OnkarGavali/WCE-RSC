import React, { useEffect, useState } from 'react';
import PageBanner from '../PageBanner';
//import dates from '../../../JSON/Authors/date.json'
import {
    Link
} from "react-router-dom";
import axios from "axios";
import {DisplayNotice} from '../DisplayNotice';
import MaintenanceBreak from '../MaintenanceBreak';



function Dates() {


    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [toShow, setToShow] = useState(true);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [maintenanceBreakMessageHead, setMaintenanceBreakMessageHead] = useState("");
    const [maintenanceBreakMessageContent, setMaintenanceBreakMessageContent] = useState("");
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [displayNoticeHead, setDisplayNoticeHead] = useState("");
    const [displayNoticeContent, setDisplayNoticeContent] = useState("");
    const [dates, setDates] = useState([]);
    
    var srNoCounter = 1;

    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "/get/dates"
            ).then((response) => {
                if (response.data[0]) {
                    setAllData(response.data[0]);
                }
                setIsLoading(false);
            }).catch((e) => {
                /* HANDLE THE ERROR (e) */
                console.log(e);
                setIsLoading(false);
            });

        };
        getData();
        setIsLoading(false);
        console.log('end of use Effect')
    }, [])

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



    {/*
        useEffect(() => {
        //ap call
        setAllData(dates);
        if(allData.maintenanceBreakState){
            setToShow(false);
        }else{
            setToShow(true);
        }
        setIsLoading(false)
        
        
    }, [allData])
*/}
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Important Dates" head="Author" subhead="Important Dates" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}

            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">
                            <h1 className="accent-color">Important Dates</h1>
                            <br />
                            {
                                isLoading ? (
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
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
                                                        <thead>
                                                            <th>Sr No</th>
                                                            <th>Important Dates</th>
                                                            <th>Particulars</th>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allData.data ? (
                                                                    (
                                                                        allData.data.dates.map(date => <tr key={date._id}>
                                                                            <td>{srNoCounter++}</td>
                                                                            <td>{date.impDate}</td>
                                                                            <td>{date.details}</td>
                                                                        </tr>)
                                                                    )) : null

                                                            }
                                                        </tbody>
                                                    </table>
                                                </>
                                            ) : (
                                                <MaintenanceBreak heading={maintenanceBreakMessageHead} message={maintenanceBreakMessageContent} />
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
                                        <Link to="Guidlines">Submission Guidlines</Link>
                                    </li>
                                    <li>
                                        <Link to="Paper-Submission">Paper Submission</Link>
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

export default Dates;

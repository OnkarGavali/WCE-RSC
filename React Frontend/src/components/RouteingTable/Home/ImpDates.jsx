import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Chair from "../../../images/publication/chair.png";
import Publications from './Publications';
import SponsorsOld from './SponsorsOld';
import data from '../../../JSON/Home/HomeBody.json';
import axios from 'axios';
function ImpDates() {
    
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [toShow, setToShow] = useState(true);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    
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
    }, [])

    useEffect(() => {
        if(!isLoading){
            if(allData.maintenanceBreakStatus){
                setToShow(false);
                setMaintenanceBreakMessageStatus(allData.maintenanceBreakStatus) 
            } else {
                setToShow(true);
                if(allData.displayNoticeStatus){
                    setDisplayNoticeStatus(allData.displayNoticeStatus)
                }
            }
        }
    }, [allData])

    return (
        <>
            <div className="tab-content">
            <div className="latest-posts">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h3 className="classic-title" id="notifications"><span>Important Dates</span></h3>
                    <Link to='authors/Important-Dates'><i className='fa fa-arrow-right'></i></Link>
                </div>
               
                {
                    allData.data && toShow ? (
                        <>
                            {
                                allData.data.dates ? (
                                    <>
                                        {
                                            allData.data.dates.map((day) => (
                                                <table className="table table-responsive table-condensed table-bordered" style={{margin:"0px"}}>
                                                    <thead>
                                                        <th>{day.details}</th>
                                                    </thead>
                                                    <tbody>
                                                    <td>{day.impDate}</td>
                                                    </tbody>
                                                </table>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <div style={{justifyContent:"center"}}>Information will update soon</div>
                                )
                            }
                        </>
                    ) : null
                }

                </div>
            </div>
        </>
    );
}

export default ImpDates;

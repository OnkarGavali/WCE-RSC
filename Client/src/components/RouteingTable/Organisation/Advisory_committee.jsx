import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import PageBanner from '../PageBanner';
import adv from '../../../JSON/adv_com.json';
import axios from 'axios';





function Adv_Committee() {



    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [maintenanceBreakMessageHead, setMaintenanceBreakMessageHead] = useState("");
    const [maintenanceBreakMessageContent, setMaintenanceBreakMessageContent] = useState("");
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [toShow, setToShow] = useState(true);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "http://localhost:5000/get/advisory"
            ).then((response)=>{
                if(response.data){
                    setAllData(response.data[0]);
                    if(allData.maintenanceBreakState){
                        setToShow(false);
                        setIsLoading(false);
                        
                    } else {
                        setToShow(true);
                        console.log(allData)
                        setIsLoading(false);

                    }
                } else {
                    setMaintenanceBreakMessageStatus(true);
                    setMaintenanceBreakMessageHead("Problem in Fetching data")
                    setMaintenanceBreakMessageContent("Please Contact admin for details")
                    setIsLoading(false);
                }
               setIsLoading(false);
                
            }).catch((e)=>{
             /* HANDLE THE ERROR (e) */
                console.log(e);
                setMaintenanceBreakMessageStatus(true);
                setMaintenanceBreakMessageHead("Problem in Fetching data")
                setMaintenanceBreakMessageContent("Please Contact admin for details")
                setIsLoading(false);
            });
            
        };
        getData();
    },[])


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
                                        <h1 className="accent-color">Advisory Committee</h1>
                                        <br />
                                        <table className="table table-responsive table-condensed table-bordered">
                                            <thead>
                                                <th>Name</th>
                                            </thead>
                                            <tbody>
                                                {/* {
                                                    adv.map(Entry => <tr key={adv.id}>
                                                        <td>{Entry.name}</td>
                                                    </tr>)
                                                } */}
                                                {
                                                    allData ? (
                                                        allData.advisoryList.map(Entry => <tr key={Entry._id}>
                                                            <td>{Entry.name}</td>
                                                        </tr>)
                                                    ) : null
                                                }
                                            </tbody>
                                        </table>
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

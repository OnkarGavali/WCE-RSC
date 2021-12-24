import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import PageBanner from '../PageBanner';
import org from '../../../JSON/Organisation/organinsing.json';
import axios from 'axios';
import MaintenanceBreak from '../MaintenanceBreak';
import { DisplayNotice } from '../DisplayNotice';


function Org_Committee() {
    const [convertedJSON, setConvertedJSON] = useState([])
    
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [maintenanceBreakMessageHead, setMaintenanceBreakMessageHead] = useState("");
    const [maintenanceBreakMessageContent, setMaintenanceBreakMessageContent] = useState("");
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [displayNoticeHead, setDisplayNoticeHead] = useState("");
    const [displayNoticeContent, setDisplayNoticeContent] = useState("");
    const [toShow, setToShow] = useState(true);



   
    
    
    
    
    // useEffect(() => {
    //     console.log('start of useEffect')
    //    setAllData(org);
    //    convertDataToTableFormat(org.organsingList);
    //    console.log(allData)
    //    setIsLoading(false)
    //    console.log('end of useEffect')
    // }, [])


    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/organization"
            ).then((response)=>{
                if(response.data){
                    setAllData(response.data[0]); 
                    convertDataToTableFormat(response.data[0].organsingList)
                    //console.log(response)
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
                console.log(convertedJSON)
            }
        }
        console.log("all data use Effect")
    }, [allData])
    
    useEffect(() => {
        console.log(convertedJSON)
    }, [convertedJSON])
    const convertDataToTableFormat = (obj_list) => {
        let i=1;
        var li =[]
        obj_list.map((obj)=>{
            let r = obj.role
            obj.persons.map((per)=>{
                li.push({id:i,"role":r,"name":per.name,"designation":per.designation})
                i=i+1;
                r=""
            })
           
        })
        setConvertedJSON(li)
    }
    
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Organising Committee" head="Organisation" subhead="Organising Committee" info="We Are WCE Research Symposium" />
            {/* PageBanner - end */}
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        {/* Main Content - start */}
                        <div className="col-md-9">
                            <h1 className="accent-color"> Organising Committee</h1>
                             <br />
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
                                                    <thead>
                                                        <th>Role</th>
                                                        <th>Name</th>
                                                        <th>Designation</th>
                                                    </thead>
                                                
                                                    <tbody>
                                                        {
                                                            convertedJSON && convertedJSON.map((Entry) => (
                                                            <tr key={Entry.id}>
                                                                    <td>{Entry.role}</td>
                                                                    <td>{Entry.name}</td>
                                                                    <td>{Entry.designation}</td>
                                                                </tr>
                                                            ))
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
                                        <Link to="adv_committee">Advisory Committee</Link>
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

export default Org_Committee;

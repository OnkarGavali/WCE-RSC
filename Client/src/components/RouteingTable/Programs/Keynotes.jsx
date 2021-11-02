import React, { useEffect, useState } from 'react';
import PageBanner from '../PageBanner';
import {Link} from "react-router-dom";
import axios from 'axios'
import Key from '../../../JSON/Programs/Keynote.json'


function Keynotes() {
    

    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [toShow, setToShow] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const [presentations, setPresentations] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         await axios.get(
    //             "http://localhost:5000/get/keyNotes"
    //         ).then((response)=>{
    //             setPresentations(response.data);
    //         }).catch((e)=>{
    //          /* HANDLE THE ERROR (e) */
    //          console.log(e);
    //         });
            
    //     };
    //     getData();
    // },[])

    useEffect(() => {
        setAllData(Key);
        if(allData.maintenanceBreakState){
            setToShow(false);
        }else{
            setToShow(true);
        }
        setIsLoading(false)
    }, [allData])
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Presentations" head="Programs" subhead="Keynotes & Presentation" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-9">
                            <table className="table table-responsive table-condensed table-bordered">
                                <thead className='thead-dark'>
                                    <th>Sr No</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                </thead>
                                <tbody>
                                    {
                                        // allData.data.Speakers.map(obj => <tr key={obj._id}>
                                        //     <td>{obj.Sr_No}</td>
                                        //     <td>{obj.Name}</td>
                                        //     <td>{obj.Designation}</td>
                                        // </tr>)

                                        allData.data.Speakers && allData.data.Speakers.map(obj => <tr key={obj.id}>
                                            <td>{obj.id}</td>
                                            <td>{obj.name}</td>
                                            <td>{obj.designation}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
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

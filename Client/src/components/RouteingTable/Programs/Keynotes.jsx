import React, { useEffect, useState } from 'react';
import PageBanner from '../PageBanner';
import Table from 'react-bootstrap/Table'
import {Link} from "react-router-dom";
import axios from 'axios'
import Key from '../../../JSON/Keynote.json'


function Keynotes() {
    const [presentations, setPresentations] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "http://localhost:5000/get/keyNotes"
            ).then((response)=>{
                setPresentations(response.data);
            }).catch((e)=>{
             /* HANDLE THE ERROR (e) */
             console.log(e);
            });
            
        };
        getData();
    },[])
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Presentations" head="Programs" subhead="Keynotes & Presentation" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <br/>
                        <br/>
                        <div className="col-md-9">
                            <table className="table table-responsive table-condensed table-bordered">
                                <thead className='thead-dark'>
                                    <th>Sr No</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                </thead>
                                <tbody>
                                    {
                                        presentations.map(obj => <tr key={obj._id}>
                                            <td>{obj.Sr_No}</td>
                                            <td>{obj.Name}</td>
                                            <td>{obj.Designation}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* Related Links - start */}
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4>Related Links <span className="head-line"></span></h4>
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

import React, { Components, useState } from 'react';
import PageBanner from '../PageBanner';
import Date from '../../../JSON/date.json';
import Table from 'react-bootstrap/Table'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



import Key from '../../../JSON/Keynote.json'


function Keynotes() {
    return (
        <div>
            <PageBanner name="Presentations" head="Programs" subhead="Keynotes & Presentation" info="Feel Free To Get In Touch" />
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <br/>
                        <br/>
                        <div className="col-md-9">
                            <Table className="table table-responsive table-condensed table-bordered">
                                <thead>
                                    <th>Sr No</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                </thead>
                                <tbody>
                                    {
                                        Key.map(Entry => <tr key={Key.id}>

                                            <td>{Entry.id}</td>

                                            <td>{Entry.name}</td>
                                            <td>{Entry.designation}</td>


                                        </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div class="col-md-3 sidebar right-sidebar">
                         
                            <div class="widget widget-categories">
                                <h4>Related Links <span class="head-line"></span></h4>
                                <ul>

                                    <li>
                                        <Link to="/Paper-Presentation">Paper Presentation</Link>
                                    </li>


                                    <li>
                                        <Link to="/Poster-Presentation">Poster Presentation</Link>
                                    </li>

                                    <li>
                                        <Link to="/Schedule">Event Schedule</Link>
                                    </li>
                                    <li>
                                        <Link to="/Register">Registration</Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Keynotes;

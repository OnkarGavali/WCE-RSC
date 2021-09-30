import React, { Components, useState } from 'react';
import Table from 'react-bootstrap/Table'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';
import org from '../../../JSON/org_com.json';





function Org_Committee() {
    return (
        <div>
            <PageBanner name="Organising Committee" head="Organisation" subhead="Organising Committee" info="We Are WCE Research Symposium" />
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <br />
                        <br />
                        <div className="col-md-9">
                            <Table className="table table-responsive table-condensed table-bordered">
                                <thead>
                                    <th>Role</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                </thead>
                                <tbody>
                                    {
                                        org.map(Entry => <tr key={org.id}>

                                            <td>{Entry.role}</td>

                                            <td>{Entry.name}</td>
                                            <td>{Entry.designation}</td>


                                        </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Org_Committee;

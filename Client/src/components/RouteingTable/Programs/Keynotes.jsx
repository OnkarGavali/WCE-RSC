import React, { Components, useState } from 'react';
import PageBanner from '../PageBanner';
import Date from '../../../JSON/date.json';
import Table from 'react-bootstrap/Table'


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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Keynotes;

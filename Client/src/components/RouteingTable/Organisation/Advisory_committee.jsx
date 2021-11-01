import React, { Components, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';
import adv from '../../../JSON/adv_com.json';





function Adv_Committee() {
    return (
        <div>
            <PageBanner name="Advisory Committee" head="Organisation" subhead="Advisory Committee" info="We Are WCE Research Symposium" />

            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                       
                        <div className="col-md-9">
                            <h1 className="accent-color">Advisory Commitee</h1>
                            <br />
                            <Table className="table table-responsive table-condensed table-bordered">
                                <thead>
                                    
                                    <th>Name</th>
                                   
                                </thead>
                                <tbody>
                                    {
                                        adv.map(Entry => <tr key={adv.id}>

                                            

                                            <td>{Entry.name}</td>
                                            


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

export default Adv_Committee;

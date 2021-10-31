import React from 'react';
import PageBanner from '../PageBanner';
import Date from '../../../JSON/date.json';
import Table from 'react-bootstrap/Table'
import {
    Link
  } from "react-router-dom";



function Dates() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Important Dates" head="Author" subhead="Important Dates" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">
                            <div>
                                
                                <h1 className="accent-color">WCE Research Symposium on Computing - RSC 2022</h1><br />
                                <p><strong>Organized by WCE ACM Student Chapter <br />Event By Department of Computer Science & Engineering</strong></p>
                            </div>
                            <h1 className="accent-color">Important Dates</h1>
                            <br />
                            <Table className="table table-responsive table-condensed table-bordered"><br />
                                <thead>
                                    <th>Sr No</th>
                                    <th>Important Dates</th>
                                    <th>Particulars</th>
                                </thead>
                                <tbody>
                                    {
                                        Date.map(Dates => <tr key={Dates.id}>

                                            <td>{Dates.id} </td>

                                            <td>{Dates.impDate}</td>
                                            <td>{Dates.details}</td>


                                        </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>

                        {/* Related Links - start */}
                         <div className="col-md-3 sidebar right-sidebar">

                            <div className="widget widget-categories">
                                <h4 className="accent-color">Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="Presentation-Instructions">Presentation Instructions</Link>
                                    </li>

                                    <li>
                                        <Link to="Call-for-contribution">Call for Contributions</Link>
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

import React from 'react';
import {Link} from "react-router-dom";
import PageBanner from '../PageBanner';
import org from '../../../JSON/org_com.json';


function Org_Committee() {
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
                            
                            <table className="table table-responsive table-condensed table-bordered">
                                <thead>
                                    <th>Role</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                </thead>
                                <tbody>
                                    {
                                        org.map(Entry => (
                                            <tr key={org.id}>
                                                <td>{Entry.role}</td>
                                                <td>{Entry.name}</td>
                                                <td>{Entry.designation}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
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

import React from 'react';

import {

    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';
import adv from '../../../JSON/adv_com.json';





function Adv_Committee() {
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
                            <h1 className="accent-color">Advisory Committee</h1>
                            <br />
                            <table className="table table-responsive table-condensed table-bordered">
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
                            </table>
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

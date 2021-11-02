import React from 'react'
import {
    Link
} from "react-router-dom";
import Ekeynotes from './Keynotes/Ekeynotes';

export default function AdminPanel() {
    return (
        <div>
            {/* PageBanner - start */}
            <div className="page-banner" style={{"padding" :'40px 0', 'background': 'url(/images/slide-02-bg.jpg) center #f9f9f9'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Admin Panel</h2>
                        </div> 
                        <div className="col-md-6">  
                            <ul className="breadcrumbs">
                                <li><a href="#" class="btn-system btn-large btn-gray"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* PageBanner - end */}

            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        {/* Related Links - start */}
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="venue">Conference Venue</Link>
                                    </li>
                                    <li>
                                        <Link to="location">Conference Location</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Related Links - end */}
                        
                        {/* Main Content - start */}
                        <div className="col-md-9">
                            <Ekeynotes/>
                        </div>
                        {/* Main Content - end */}
                        
                       

                    </div>
                </div>
            </div>
        
        </div>
    )
}

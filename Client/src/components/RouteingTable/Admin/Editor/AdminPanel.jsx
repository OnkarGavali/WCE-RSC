import React, { useState } from 'react'

import EGuidlines from './Author/EGuidlines';
import EImpDates from './Author/EImpDates';
import Ekeynotes from './Programs/Ekeynotes';
import CallFor from './Author/CallFor';
import EHome from './Home/EHome';
import EPaperSub from './Author/EPaperSub';
import EPosterPre from './Programs/EPosterPre';
import { SwitchComponents } from './SwitchComponents';
import { Link } from 'react-router-dom';

export default function AdminPanel() {


    const [activeComponent, setActiveComponent] = useState("callForContribution")

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
                                <li><a href="#" className="btn-system btn-large btn-gray"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
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
                                <h4 className='accent-color'>Author<span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <a onClick={()=>setActiveComponent("callForContribution")}>CAll</a>
                                    </li>
                                    <li>
                                        <a onClick={()=>setActiveComponent("submissionGuidelines")}>E guidlines</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <a onClick={()=>setActiveComponent("callForContribution")}>CAll</a>
                                    </li>
                                    <li>
                                        <a onClick={()=>setActiveComponent("submissionGuidelines")}>E guidlines</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        
                        {/* Related Links - end */}
                        
                        {/* Main Content - start */}
                        <div className="col-md-9">
                          
                            <SwitchComponents active={activeComponent}>
                                
                               

                                {/* Authors start */}

                                    <CallFor name="callForContribution"/>
                                    <EGuidlines name="submissionGuidelines"/>

                                {/* Authors end */}

                                
                            </SwitchComponents>
                        </div>
                        {/* Main Content - end */}
                        
                       

                    </div>
                </div>
            </div>
        
        </div>
    )
}

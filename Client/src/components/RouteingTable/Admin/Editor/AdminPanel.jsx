import React, { useState } from 'react'

import EGuidlines from './Author/EGuidlines';
import EImpDates from './Author/EImpDates';
import Ekeynotes from './Programs/Ekeynotes';
import CallFor from './Author/CallFor';
import EHome from './Home/EHome';
import EPaperSub from './Author/EPaperSub';
import EPosterPre from './Programs/EPosterPre';
import { SwitchComponents } from '../../SwitchComponents';
import ERegister from './Programs/ERegister';
import EAdvCom from './Committe/EAdvCom'
import ENotification from './Home/ENotification';
import EOrgCom from './Committe/EOrgCom';
import EHeader from './Home/EHeader';
import EContact from './Home/EContact';

export default function AdminPanel({ isLoggedIn, handleLogout }) {


    const [activeComponent, setActiveComponent] = useState("home")

    return (
        <div>
            {/* PageBanner - start */}
            <div className="page-banner" style={{ "padding": '40px 0', 'background': 'url(/images/slide-02-bg.jpg) center #f9f9f9' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Admin Panel</h2>
                        </div>
                        <div className="col-md-6">
                            <ul className="breadcrumbs">
                                <li><button
                                onClick={()=>{
                                    localStorage.clear();
                                    handleLogout()
                                
                                }} className="btn-system btn-large btn-gray"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</button></li>
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
                                <h4 className='accent-color'>Home<span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <a onClick={() => setActiveComponent("header")}>Header</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("home")}>Home Body</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("notification")}>Notifications</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("contact")}>Contact Info</a>
                                    </li>
                                  

                                </ul>
                            </div>

                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Author<span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <a onClick={() => setActiveComponent("callForContribution")}>Call for Contribution</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("submissionGuidelines")}>Submission Guidlines</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("impoetatntDates")}>Important Dates</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("paperSubmission")}>Paper Submission</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Programs<span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <a onClick={() => setActiveComponent("keynotes")}>Keynotes</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("posterPresentation")}>Poster Presentation</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("registration")}>Resgitration</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Organisation<span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <a onClick={() => setActiveComponent("advisoryCommitte")}>Advisory Committe</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("orgCommitte")}>Organising Committe</a>
                                    </li>

                                </ul>
                            </div>
                        </div>


                        {/* Related Links - end */}

                        {/* Main Content - start */}
                        <div className="col-md-9">

                            <SwitchComponents active={activeComponent}>

                             {/* Home Starts */}

                            <ENotification name="notification"/>
                            <EHome name="home" />
                            <EHeader name="header"/>
                            <EContact name="contact"/>
                             {/* Home Ends */}

                                {/* Authors start */}

                                <CallFor name="callForContribution" />
                                <EGuidlines name="submissionGuidelines" />
                                <EImpDates name='impoetatntDates' />
                                <EPaperSub name='paperSubmission' />
                                

                                {/* Authors end */}
                                {/* programs start */}
                                <Ekeynotes name='keynotes' />
                                <EPosterPre name='posterPresentation' />
                                <ERegister name="registration" />
                                {/* programs end */}
                                {/* programs start */}
                                <EAdvCom name='advisoryCommitte' />
                                <EOrgCom name='orgCommitte'/>
                                {/* programs end */}



                            </SwitchComponents>
                        </div>
                        {/* Main Content - end */}



                    </div>
                </div>
            </div>

        </div>
    )
}

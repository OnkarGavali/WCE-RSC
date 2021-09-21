import React, { Components, useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';


function About() {
    return (
        <div>
            <Header />
            <div className="containeri">

                <div className="page-banner" style={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>About Us</h2>
                                <p>We Are WCE Research Symposium</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="breadcrumbs">
                                    <li><a href="index.html">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenti">
                    <div className="container">
                        <div className="page-content">
                            <div className="row" style={{ textAlign: 'justify' }}>

                                <div className="col-md-12">


                                    <h4 className="classic-title"><span>Welcome To WCE Research Symposium on Computing 2021</span></h4>


                                    <ul className="nav nav-tabs">
                                        <li className="active"><a href="#tab1" data-toggle="tab"><i className="icon-award-1"></i>About Research Symposium</a></li>
                                        <li><a href="#tab2" data-toggle="tab"><i className="icon-beaker"></i>About Walchand College of Engineering, Sangli</a></li>
                                        <li><a href="#tab3" data-toggle="tab"><i className="icon-droplet"></i>About the Departments</a></li>
                                    </ul>


                                    <div className="tab-content">

                                        <div className="tab-pane fade in active" id="tab1">
                                            <p><p>At Walchand College of Engineering (WCE) Sangli, Computer Science and Engineering (CSE) Department as well as Information Technology (IT) Department are active in promoting research in advances in CSE/ IT under Association for Computing Machinery (ACM) India.This has resulted into instituting WCE-ACM chapter.First, second, third & fourth National Research Symposium was organized during Dec 19-20 (2016), Dec 15-16 (2017), Dec 21-22 (2018) & Dec 19-21 (2019) respectively at WCE and it received excellent response from researchers.</p><br />
                                                <p> In this series, the WCE-ACM chapter is delighted to announce its fifth National Research Symposium on Computing (RSC 2021) in December 2020 under the technical support from ACM.The WCE-ACM chapter welcomes research paper submissions from faculty, doctoral students, research scholars and industry experts who are actively working in the area of Computer Science and Engineering and allied branches.</p><br />
                                                <p>The RSC 2021 will provide a unique opportunity to the researchers to present their research work and will enable them to interact with renowned and experienced researchers in all areas of Computer Science and Engineering as well as Information Technology.The symposium will also provide to its participants, independent and constructive feedback about their completed/planned research work for its further improvements.The research symposium aims at establishing and promoting social and intellectual interactions among students and researchers from academia and industry.The symposium will be accompanied by prominent experts who will deliver the keynote address and will actively participate in critical discussions at the symposium.The selected papers will be forwarded for its publication in IFERP.</p><br />
                                            </p>
                                        </div>

                                        <div className="tab-pane fade" id="tab2">
                                            <p> The college is situated midway of Sangli Miraj road.Initially, college made a modest beginning with the name as "New Engineering College" in the year 1947. As a part of the arrangements, mainly funded by Seth Walchand Hirachand Memorial Trust (WHMT) and the Government, the College has been renamed as Walchand College of Engineering (WCE) since year 1955. The College became autonomous in the year 2007. As a part of strategic planning, research and development activities are being further strengthened.The college has been recognized for running Ph.D.programme under Quality Improvement Program (QIP) scheme by AICTE.Presently it has more than 2,800 students for six UG branches and ten PG branches together.WCE aims to produce capable graduate engineers with aptitude for research and qualities of leadership.The has been selected and funded for implementation of Technical Education Quality Improvement Programme (TEQIP).Jabalpur Engineering College (JEC), Jabalpur is a government institute, and is participating in the organization of RSC-2018. </p>
                                        </div>

                                        <div className="tab-pane fade" id="tab3">
                                            <p>The CSE and IT Departments have been established in the year 1986 and 2001 respectively.Course contents of these programmes are up-to-date and are in-line with the current trends of the Computer and IT Industry.These programmes attract meritorious students every year at the entry level for both UG and PG level.Ph.D.programme under (QIP) in the department has boosted the research culture further.These departments also provide research guidance to Ph.D.students of Shivaji University.At present, around 20 Ph.D.(CSE) students are successfully progressing their research assignments.WCE Association for Computing Machinery (ACM) Student Chapter has been chartered to promote research in CSE/IT and related fields.</p>
                                        </div>
                                    </div>


                                </div>



                            </div>


                            <div className="hr1" style={{ marginBottom: '50px' }}></div>

                        </div>
                    </div>



                </div>
            </div>

        </div>

    );
}

export default About;

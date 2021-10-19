import React, { Components, useState } from 'react';


function Notifications() {

    return (
        <div>
            <div>
                <div className="latest-posts">

                 <div className="tab-content" >
                 <h3 class="classic-title" id="notifications"><span>Notifications</span></h3>
                   


                    
                    <marquee style={{maxHeight:"300px" , onmouseover}} behavior="scroll" direction="up" scrollamount="2" height="100%" vspace="10%"  onmouseout=''>

                        
                        
                        
                        <a href="#" className="badge badge-primary">New</a><strong>Groupwise allocation of teams for Poster Presentation:<a href="asset/2021_grp1.pdf"> Group 1</a> &nbsp;&nbsp;&nbsp;&nbsp; <a href="asset/2021_grp2.pdf"> Group 2</a></strong><br />

                        <br />

                        <a href="#" className="badge badge-primary">New</a><strong>Papers Selected in<a href="asset/2021_IPS_Category.pdf"> IPS category</a> RSC 2021</strong> <br />
                        <a href="#" className="badge badge-primary">New</a><strong>Papers Selected in<a href="asset/2021_Poster_Category.pdf"> Poster category</a> RSC 2021</strong> <br />
                        <a href="#" className="badge badge-primary">New</a><strong>Papers Selected in<a href="asset/2021_Oral_Presentation_Category.pdf"> Oral Presentation category</a> RSC 2021</strong> <br />
                        <br />
                        <a href="#" className="badge badge-primary">New</a><strong><a href="asset/2021_schedule.pdf"> Schedule - RSC 2k21</a> </strong><br />

                        <strong>Guidelines for Innovative Project Showcasing <a href="asset/ips.pdf" taget="_blank">IPS-2019</a></strong>
                        <br />
                        <strong>The <a href="asset/ieee_template.doc"> IEEE </a> and <a href="asset/latex.zip">Latex template for paper submissions for IPS </a></strong>
                        <br />
                        <strong><a href="asset/CTP_RSC 2019.pdf">Springer Consent To Publish Form </a></strong><br />
                        <strong><a href="asset/CTP_DSP_DIP.doc">Copyright Form: Track-1(DSP/DIP)</a></strong><br />
                        <strong><a href="asset/CTP_Others.doc">Copyright Form: Track-2(Next Gen. Computing)</a></strong><br />
                        <strong><a href="asset/Reviewers Response Sheet.pdf">Response sheet on Reviewers Comments</a></strong><br /> -
                        <a href="" className="badge badge-primary">New</a><strong><a href="asset/rsc_copyright.pdf"> RSC Copyright Consent Form</a></strong> <br />
                        <strong>    <a href="asset/Paper submission M.Tech Poster Submission and IPS instructions.pdf"> Paper submission M.Tech Poster Submission and IPS instructions</a> </strong> <br />
                        <strong>    <a href="asset/2021_copyrightform.docx"> Copy Right Form (Blank)</a></strong><br />
                        <strong>    <a href="asset/2021_reviewers_response_sheet.docx"> Reviewers' Response Sheet</a></strong><br />
                        <strong>  <a href="asset/2021_Presentation_Guidelines.pptx"> Presentation Guidelines </a></strong><br />
                        <strong>   <a href="asset/2021_IPS_Presentation_Guidelines.pptx"> (IPS) Presentation Guidelines</a></strong><br />
                        <strong>   <a href="asset/2021_Fee_waiver.docx"> Fee Waiver Form </a></strong><br />

                        <br />
                        <strong>First National Research Symposium <a href="asset/RSC-2016.pdf">RSC-2016</a></strong>
                        <strong>Second National Research Symposium <a href="asset/RSC-2017.pdf">RSC-2017</a></strong><br />
                        <strong>Third National Research Symposium <a href="asset/RSC-2018.pdf">RSC-2018</a></strong><br />
                        <strong>Fourth National Research Symposium <a href="asset/RSC 2019 Proceeding.pdf">RSC-2019</a></strong><br />
                        
                    </marquee>
                    
                </div>
                </div>
            </div>

        </div>
    );
}

export default Notifications;
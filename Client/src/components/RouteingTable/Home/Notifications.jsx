import React from 'react';
import info from '../../../JSON/Home/Notification.json'

function Notifications() {

    return (
        <div>
            <div>
                <div className="latest-posts-classic touch-carousel">

                 <div className="tab-content" >
                 <h3 className="classic-title" id="notifications"><span>Notifications</span></h3>

                 <ul>
                <strong>
                    {
                     info.data? (
                        info.data.map((link)=>
                        link.new === 'true' ?  (<div><a href="#" className="badge badge-primary">New</a> <li key={link.id}><a href={`${link.link}` } target='_blank'> {link.text}</a></li></div> ): (<li key={link.id}><a href={`${link.link}` } target='_blank'> {link.text}</a></li>)
                        )
                      ) : null
                    }
                </strong>
                </ul>
                   


                    {
                    /*
                    <div style={{ onmouseover}} behavior="scroll" direction="up" scrollamount="2" height="100%" vspace="10%"  onmouseout=''>

                        
                        
                        
                        <a href="#" className="badge badge-primary"></a> <strong>Groupwise allocation of teams for Poster Presentation:<a href="asset/2021_grp1.pdf"> Group 1</a> &nbsp;&nbsp;&nbsp;&nbsp; <a href="asset/2021_grp2.pdf"> Group 2</a><br /></strong>

                       
                        
                        <a href="#" className="badge badge-primary"></a><strong>  Papers Selected in<a href="asset/2021_IPS_Category.pdf" className="post-title"> IPS category</a> RSC 2021 </strong><br />
                        <a href="#" className="badge badge-primary"></a><strong>Papers Selected in<a href="asset/2021_Poster_Category.pdf"> Poster category</a> RSC 2021</strong> <br />
                        <a href="#" className="badge badge-primary"></a><strong>Papers Selected in<a href="asset/2021_Oral_Presentation_Category.pdf"> Oral Presentation category</a> RSC 2021</strong> <br />
                        <br />
                        <a href="#" className="badge badge-primary"></a> <strong>Schedule <a href="asset/2021_schedule.pdf">RSC 2021</a> </strong><br />

                        <strong>Guidelines for Innovative Project Showcasing <a href="asset/ips.pdf" taget="_blank">IPS-2019</a></strong>
                        <br />
                        <strong>The <a href="asset/ieee_template.doc"> IEEE </a> and <a href="asset/latex.zip">Latex template for paper submissions for IPS </a></strong>
                        <br />
                        <strong>Springer Consent To Publish <a href="asset/CTP_RSC 2019.pdf"> Form </a></strong><br />
                        <strong>Copyright Form: <a href="asset/CTP_DSP_DIP.doc"> Track-1(DSP/DIP)</a></strong><br />
                        <strong>Copyright Form: <a href="asset/CTP_Others.doc"> Track-2(Next Gen. Computing)</a></strong><br />
                        <strong>Response<a href="asset/Reviewers Response Sheet.pdf"> sheet </a> on Reviewers Comments</strong><br /> 
                        <a href="" className="badge badge-primary"></a><strong>WCE RSC 2021<a href="asset/rsc_copyright.pdf"> Form</a></strong> <br />
                        <strong> RSC Copyright Consent<a href="asset/Paper submission M.Tech Poster Submission and IPS instructions.pdf"> Paper submission M.Tech Poster Submission and IPS instructions</a> </strong> <br />
                        <strong>  Copy Right   <a href="asset/2021_copyrightform.docx"> Form (Blank)</a></strong><br />
                        <strong> Reviewers' Response    <a href="asset/2021_reviewers_response_sheet.docx"> Sheet</a></strong><br />
                        <strong>WCE RSC 2021  <a href="asset/2021_Presentation_Guidelines.pptx"> Presentation Guidelines </a></strong><br />
                        <strong> WCE RSC 2021  <a href="asset/2021_IPS_Presentation_Guidelines.pptx"> (IPS) Presentation Guidelines</a></strong><br />
                        <strong>WCE RSC 2021   <a href="asset/2021_Fee_waiver.docx"> Fee Waiver Form </a></strong><br />

                        <br />
                        <strong> First National Research Symposium<a href="asset/RSC-2016.pdf"> RSC-2016</a></strong><br />
                        <strong>Second National Research Symposium<a href="asset/RSC-2017.pdf">  RSC-2017</a></strong><br />
                        <strong>Third National Research Symposium <a href="asset/RSC-2018.pdf"> RSC-2018</a></strong><br />
                        <strong>Fourth National Research Symposium <a href="asset/RSC 2019 Proceeding.pdf">RSC-2019</a></strong><br />
                        
                    </div>
                    */}
                    
                </div>
                </div>
            </div>

        </div>
    );
}

export default Notifications;
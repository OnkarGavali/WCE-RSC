import React, { Components, useState } from 'react';
import Navbar from './Navbar';
import Sponsors from './Sponsors';
import Notifications from './Notifications';
import Home from './Home';

function Header() {
  //rname = "rsc2021@walchandsangli.ac.in";




  return (
    <div>
      
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-9">

              <ul className="contact-details">
                <li><a href="#"><i className="fa fa-map-marker"></i> Walchand College of Engineering, Sangli, MH-IN</a>
                </li>
                <li><a href="mailto:  rsc2021@walchandsangli.ac.in  "><i className="fa fa-envelope-o"></i>  rsc2021@walchandsangli.ac.in</a>
                </li>
                <li><a href="#"><i className="fa fa-phone"></i>   +91 88057 09102 | 7030226700  </a>
                </li>
              </ul>

            </div>

            <div className="col-md-3">

              <ul className="social-list" style={{ listStyle: 'none', display: 'block' }}>
                <li>
                  <a className="facebook itl-tooltip" data-placement="bottom" title="Facebook" href="  $acm->SiteFB();  "><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a className="twitter itl-tooltip" data-placement="bottom" title="Twitter" href="  $acm->SiteTwitter();  "><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a className="google itl-tooltip" data-placement="bottom" title="Google Plus" href="  $acm->SiteLinkedIn();  "><i className="fa fa-google-plus"></i></a>
                </li>
                <li>
                  <a className="linkdin itl-tooltip" data-placement="bottom" title="Linkedin" href="  $acm->SiteGplus();  "><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>

            </div>

          </div>

        </div>

      </div>
      <div >
        <div className="container">
          <div style={{ marginBottom: '-4%' }} >
              <a href="index.html">
            </a>
              <h1>  <img src="images/iferp.png" alt="IFERP" style={{ width: '100px', paddingTop: '1%' }} /> WCE Research Symposium on Computing - RSC 2021  </h1>
              <small   style={{ paddingLeft: '20%' , fontSize:'15px' }}> FIFTH NATIONAL RESEARCH SYMPOSIUM ON COMPUTING  </small>
          </div>
          
          
          
        </div>
        
      </div>

      

      <Navbar/>





    </div>

  );
}

export default Header;

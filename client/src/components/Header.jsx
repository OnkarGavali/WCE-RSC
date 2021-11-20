import React from 'react';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import data from '../JSON/Header.json';
import cdata from '../JSON/Contact/Contact.json' ;

const mail = "mailto: " + cdata.email



function Header() {

  

  return (
    <div>
      <div className="top-bar">
        <div className="container">
          <div className="row">

            <div className="col-md-9">

              <ul className="contact-details">
                <li><Link to="/contact"><i className="fa fa-map-marker"></i> Walchand College of Engineering, Sangli, MH-IN</Link>
                </li>
                <li><a href={mail}><i className="fa fa-envelope-o"></i>  {cdata.email}</a>
                </li>
                <li><Link to="/contact"><i className="fa fa-phone"></i>   {cdata.contact[0].mobileNumber} | {cdata.contact[1].mobileNumber}  </Link>
                </li>
              </ul>

            </div>

            <div className="col-md-3">
              <ul className="social-list" style={{ listStyle: 'none', display: 'block' }}>
                <li>
                  <a className="facebook itl-tooltip" data-placement="bottom" title="Facebook" href="https://www.facebook.com/wceacm"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a className="twitter itl-tooltip" data-placement="bottom" title="Twitter" href="https://twitter.com/wce_acm"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a className="google itl-tooltip" data-placement="bottom" title="Google Plus" href="  mailto:  rsc2022@walchandsangli.ac.in   "><i className="fa fa-envelope-o"></i></a>
                </li>
                <li>
                  <a className="linkdin itl-tooltip" data-placement="bottom" title="Linkedin" href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/ "><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      
      <div >
        <div className="container">
          <div style={{ marginBottom: '-4%' }} >
              <a href="index.html"></a>
              <h1 style={{paddingTop:'1%'}}> {/* <img src="images/iferp.png" alt="IFERP" style={{ width: '100px', paddingTop: '1%' }} /> */}{data.title}</h1>
              <small   style={{ paddingLeft: '' , fontSize:'15px' }}> {data.subtitle}  </small>
          </div>
        </div>
      </div>

      <Navbar/>

    </div>
  );
}

export default Header;

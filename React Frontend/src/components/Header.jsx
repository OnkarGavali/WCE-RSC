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
      
   
        <div className="container">
          <div style={{ marginBottom: '-4%',display:'flex',justifyContent:'space-between' }} className='headercontainer' >
              <div  className='headerLogo1' >
                <img src="/images/WCE75.jpeg" alt="IFERP" style={{  width:'100%',minWidth:"70px" }} />
              </div>
              <div style={{margin:"0", width: "100%"}}>
                <h1 style={{margin:"10px", paddingTop:'1%' , textAlign:'center' ,color: "#272727", fontSize:'50px',fontWeight:"800",letterSpacing: "5px"}} className='headertitle'> {data.title}</h1> 
                <h1  style={{  paddingTop:'2%', textAlign:'center' , color:'#383838',fontSize:'35px',fontWeight:"800"}} className='headersubtitle'> {data.subtitle1} </h1>
                <h2  style={{  paddingTop:'2%', textAlign:'center' , color:'gray',fontWeight:"700"}} className='headersubtitle'> {data.subtitle2} </h2>
              </div>
              <div  className='headerLogo' >
                <img src="https://static.wixstatic.com/media/e192f7_f60a1d7e58ba4708b9d94820fe99b0e2~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01/Drawing2.webp" alt="IFERP" style={{  width:'100%',minWidth:"70px" }} />
              </div>
              
             
          </div>
        </div>

      <Navbar/>

    </div>
  );
}

export default Header;

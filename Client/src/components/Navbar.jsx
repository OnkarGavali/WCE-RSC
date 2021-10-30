import React, { Components, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Socials from './Socials';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Contact from './RouteingTable/Contact/Contact';
import Gallery from './RouteingTable/Gallery/Gallery';
import About from './RouteingTable/About/About';
import Home from './RouteingTable/Home/Home';
import PaperPresentation from './RouteingTable/Programs/PaperPresentation';







function Navbar(props) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState(null);
  function toggle() {
    setDropdownOpen(prevState => !prevState);
  }

  
  return (

    <div>

      <div className="navbar navbar-default navbar-top" style={{ marginTop: '4%' }}>

        <div className="container">
          <div className="navbar-header">

            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" style={{ marginBottom: '0%' }}>
              <i className="fa fa-bars"></i>
            </button>

            <a className="navbar-brand" href="index">

            </a>
          </div>
          
          <div className="navbar-collapse collapse" >
            <ul className="nav navbar-nav " >
              <li>
              <Link to="/">
                <a className="active" ><span ><i className="fa fa-home" style={{marginRight:"10px"}}></i></span>Home</a>
                </Link>
              </li>

              <li className="drop">
              
                <Link to="" className={`${active}`} ><span ><i className="fa fa-group" style={{marginRight:"10px"}}></i></span>Authors</Link>

                <ul className="dropdown">

                <li><Link to="/authors/call-for-contribution">Call for Contributions <span style={{marginLeft:"10px"}}><i className="fa fa-bullhorn"></i></span></Link>
                  </li>

                  <li><Link to="/authors/Guidlines">Submission Guidlines<span style={{marginLeft:"10px"}}><i className="fa fa-info-circle"></i></span></Link>
                  </li>
                  <li><Link to="/authors/Paper-Submission">Paper Submission <span style={{marginLeft:"10px"}}><i className="fa fa-upload"></i></span></Link>
                  </li>

                  <li><Link to="/authors/Important-Dates">Important Dates<span style={{marginLeft:"10px"}}><i className="fa fa-calendar"></i></span></Link></li>
                  <li><a href="../asset/latex.zip">LaTeX Template<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span></a></li>
                  <li><a href="../asset/word.zip">Word Template<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span></a>
                  </li>
                </ul>

              </li>

              <li className="drop">
                <Link to="#"><span style={{marginRight:"10px"}}><i className="fa fa-calendar"></i></span>Programs</Link>
                <ul className="dropdown">
                  <li><Link to="/programs/Keynotes">Keynotes &amp; Awards Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-microphone"></i></span></Link>
                  </li>
                  <li><Link to="/programs/Paper-Presentation">Paper Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span></Link>
                  </li>
                 
                  <li><Link to="/programs/Poster-Presentation">Poster Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-image"></i></span></Link>
                  </li>
                   <li><Link to="/programs/IPS">Innovative Project Showcase<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span></Link>
                  </li>
                  <li><Link to="/programs/Schedule">Event Schedule<span style={{marginLeft:"10px"}}><i className="fa fa-calendar"></i></span></Link>
                  </li>

                  <li><Link to="/programs/Register">Event Registration<span style={{marginLeft:"10px"}}><i className="fa fa-edit"></i></span></Link>
                  </li>
                </ul>
              </li>
              <li className="drop">
                <Link to="#"><span style={{marginRight:"10px"}}><i className="fa fa-sitemap"></i></span>Organisation</Link>
                <ul className="dropdown">
                  <li><Link to="/organisation/org_committee"> Organising Committee<span style={{marginLeft:"10px"}}><i className="fa fa-group"></i></span></Link>
                  </li>

                  <li><Link to="/organisation/adv_committee"> Advisory Committee<span style={{marginLeft:"10px"}}><i className="fa fa-group"></i></span></Link>
                  </li>

                </ul>
              </li>
              <li className="drop"><Link to="#"><span style={{marginRight:"10px"}}><i className="fa fa-info-circle"></i></span>Local Information</Link>
                <ul className="dropdown">
                  <li>
                  <Link to="/localInfo/venue">
                    Conference Venue<span style={{marginLeft:"10px"}}><i className="fa fa-location-arrow"></i></span>
                    </Link>
                  </li>

                  <li>
                  <Link to="/localInfo/location">
                    Conference Location<span style={{marginLeft:"10px"}}><i className="fa fa-map-marker"></i></span>
                    </Link>
                  </li>


                  <li><Link to="/localInfo/accessing">Accessing Sangli<span style={{marginLeft:"10px"}}><i className="fa fa-plane"></i></span></Link>
                  </li>
                </ul>
              </li>

              <li>
              <Link to="/gallery">
                <span style={{marginRight:"10px"}}><i className="fa fa-image"></i></span>Gallery
                </Link>
              </li>

              <li>
              <Link to="/about">
                <span style={{marginRight:"10px"}}><i className="fa fa-info-circle"></i></span>About
                </Link>
              </li>


              <li>
              <Link to="/contact">
                <span style={{marginRight:"10px"}}><i className="fa fa-envelope"></i></span>Contact
                </Link>
              </li>
              <li>
              <Link to="/admin">
                <span style={{marginRight:"10px"}}><i className="fa fa-lock" aria-hidden="true"></i>,<span style={{width:'40px'}}></span><i className="fa fa-lock" aria-hidden="true"></i></span>Admin
                </Link>
              </li>
            </ul>
            

          </div>
          
        </div>
      </div>





    </div>








  );
}

export default Navbar;

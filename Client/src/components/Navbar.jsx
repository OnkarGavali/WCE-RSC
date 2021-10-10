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
  function toggle() {
    setDropdownOpen(prevState => !prevState);
  }
  return (

    <div>

      <div className="navbar navbar-default navbar-top" style={{ marginTop: '4%' }}>

        <div className="container">
          <div class="navbar-header">

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
                <a className="active" ><span className="pull-left"><i className="fa fa-home"></i></span>&nbsp;&nbsp;Home</a>
                </Link>
              </li>

              <li className="drop">
              
                <Link to="" ><span className="pull-left"><i className="fa fa-group" style={{ marginLeft: '2%', marginRight: '4%' }}></i></span>&nbsp;&nbsp;Authors</Link>

                <ul className="dropdown">

                <li><Link to="/call-for-contribution">Call for Contributions <span className="pull-right"><i className="fa fa-bullhorn"></i></span></Link>
                  </li>

                  <li><Link to="/Guidlines">Submission Guidlines<span className="pull-right"><i className="fa fa-info-circle"></i></span></Link>
                  </li>
                  <li><Link to="/Paper-Submission">Paper Submission <span className="pull-right"><i className="fa fa-upload"></i></span></Link>
                  </li>

                  <li><Link to="/Important-Dates">Important Dates<span className="pull-right"><i className="fa fa-calendar"></i></span></Link></li>
                  <li><a href="../asset/latex.zip">LaTeX Template<span className="pull-right"><i className="fa fa-file"></i></span></a></li>
                  <li><a href="../asset/word.zip">Word Template<span className="pull-right"><i className="fa fa-file"></i></span></a>
                  </li>
                </ul>

              </li>

              <li className="drop">
                <Link to="#"><span className="pull-left"><i className="fa fa-calendar"></i></span>&nbsp;&nbsp;Programs</Link>
                <ul className="dropdown">
                  <li><Link to="/Keynotes">Keynotes &amp; Awards Presentation<span className="pull-right"><i className="fa fa-microphone"></i></span></Link>
                  </li>
                  <li><Link to="/Paper-Presentation">Paper Presentation<span className="pull-right"><i className="fa fa-file"></i></span></Link>
                  </li>
                  <li><Link to="/IPS">Innovative Project Showcase<span className="pull-right"><i className="fa fa-file"></i></span></Link>
                  </li>
                  <li><Link to="/Poster-Presentation">Poster Presentation<span className="pull-right"><i className="fa fa-image"></i></span></Link>
                  </li>
                  <li><Link to="/Schedule">Event Schedule<span className="pull-right"><i className="fa fa-calendar"></i></span></Link>
                  </li>

                  <li><Link to="/Register">Event Registration<span className="pull-right"><i className="fa fa-edit"></i></span></Link>
                  </li>
                </ul>
              </li>
              <li className="drop">
                <Link to="#"><span className="pull-left"><i className="fa fa-sitemap"></i></span>&nbsp;&nbsp;Organisation</Link>
                <ul className="dropdown">
                  <li><Link to="org_committee"> Organising Committee<span className="pull-right"><i className="fa fa-group"></i></span></Link>
                  </li>

                  <li><Link to="adv_committee"> Advisory Committee<span className="pull-right"><i className="fa fa-group"></i></span></Link>
                  </li>

                </ul>
              </li>
              <li className="drop"><Link to="#"><span className="pull-left"><i className="fa fa-info-circle"></i></span>&nbsp;&nbsp;Local Information</Link>
                <ul className="dropdown">
                  <li>
                  <Link to="/venue">
                    Conference Venue<span className="pull-right"><i className="fa fa-location-arrow"></i></span>
                    </Link>
                  </li>

                  <li>
                  <Link to="/location">
                    Conference Location<span className="pull-right"><i className="fa fa-map-marker"></i></span>
                    </Link>
                  </li>


                  <li><Link to="/accessing">Accessing Sangli<span className="pull-right"><i className="fa fa-plane"></i></span></Link>
                  </li>
                </ul>
              </li>

              <li>
              <Link to="/gallery">
                <span className="pull-left"><i className="fa fa-image"></i></span>&nbsp;&nbsp;Gallery
                </Link>
              </li>

              <li>
              <Link to="/about">
                <span className="pull-left"><i className="fa fa-info-circle"></i></span>&nbsp;&nbsp;About
                </Link>
              </li>


              <li>
              <Link to="/contact">
                <span className="pull-left"><i className="fa fa-envelope"></i></span>&nbsp;&nbsp;Contact
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

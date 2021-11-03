import React, {  useState } from 'react';

import {
  Link,
  NavLink,
  withRouter
} from "react-router-dom";

function Navbar({history}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  function toggle() {
    setDropdownOpen(prevState => !prevState);
  }

  
  return (
    <div>
      {console.log(history)}
      <div className="navbar navbar-default navbar-top" style={{ marginTop: '4%' }}>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" style={{ marginBottom: '0%' }}>
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index"></a>
          </div>
          
          <div className="navbar-collapse collapse" >
            <ul className="nav navbar-nav " >
              
              
              {/* Home - start */}
              <li>
                <NavLink exact to="/" activeClassName='active'>
                  <span style={{marginRight:"10px"}}><i className="fa fa-home"></i></span>Home
                </NavLink>
              </li>
              {/* Home - end */}


              {/* Authors - start */}
              <li className="drop">
                <NavLink to="/authors" activeClassName='active'>
                  <span ><i className="fa fa-group" style={{marginRight:"10px"}}></i></span>Authors
                </NavLink>
                <ul className="dropdown">
                  <li>
                    <Link exact to="/authors/call-for-contribution">
                      Call for Contributions <span style={{marginLeft:"10px"}}><i className="fa fa-bullhorn"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/authors/Guidlines">
                      Submission Guidlines<span style={{marginLeft:"10px"}}><i className="fa fa-info-circle"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/authors/Paper-Submission">
                      Paper Submission <span style={{marginLeft:"10px"}}><i className="fa fa-upload"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/authors/Important-Dates">
                      Important Dates<span style={{marginLeft:"10px"}}><i className="fa fa-calendar"></i></span>
                    </Link>
                  </li>
                  <li><a href="../asset/latex.zip">LaTeX Template<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span></a></li>
                  <li><a href="../asset/word.zip">Word Template<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span></a>
                  </li>
                </ul>
              </li>
              {/* Authors - end */}
              

              {/* Programs - start */}
              <li className="drop">
                <NavLink to="/Programs" activeClassName='active' >
                  <span style={{marginRight:"10px"}}><i className="fa fa-calendar"></i></span>Programs
                </NavLink>
                <ul className="dropdown">
                  <li>
                    <Link exact to="/programs/Keynotes">
                      Keynotes & Awards Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-microphone"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/programs/Paper-Presentation">
                      Paper Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/programs/Poster-Presentation">
                      Poster Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-image"></i></span>
                    </Link>
                  </li>
                   <li>
                    <Link exact to="/programs/IPS">
                      Innovative Project Showcase<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/programs/Schedule">
                      Event Schedule<span style={{marginLeft:"10px"}}><i className="fa fa-calendar"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/programs/Register">
                      Event Registration<span style={{marginLeft:"10px"}}><i className="fa fa-edit"></i></span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Programs - end */}
              

              {/* Organisation - start */}
              <li className="drop">
                <NavLink to="/organisation" activeClassName='active'>
                  <span style={{marginRight:"10px"}}><i className="fa fa-sitemap"></i></span>Organisation
                </NavLink>
                <ul className="dropdown">
                  <li>
                    <Link exact to="/organisation/org_committee">
                      Organising Committee<span style={{marginLeft:"10px"}}><i className="fa fa-group"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/organisation/adv_committee">
                      Advisory Committee<span style={{marginLeft:"10px"}}><i className="fa fa-group"></i></span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Organisation - end */}
              
              {/* LocalInfo - start */}
              <li className="drop">
                <NavLink to="/localInfo"  activeClassName='active'>
                  <span style={{marginRight:"10px"}}><i className="fa fa-info-circle"></i></span>Local Information
                </NavLink>
                <ul className="dropdown">
                  <li>
                    <Link exact to="/localInfo/venue">
                      Conference Venue<span style={{marginLeft:"10px"}}><i className="fa fa-location-arrow"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/localInfo/location">
                      Conference Location<span style={{marginLeft:"10px"}}><i className="fa fa-map-marker"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/localInfo/accessing">
                      Accessing Sangli<span style={{marginLeft:"10px"}}><i className="fa fa-plane"></i></span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* LocalInfo - end */}
              

              {/* Gallery - start */}
              <li>
                <NavLink exact to="/gallery"  activeClassName='active'>
                  <span style={{marginRight:"10px"}}><i className="fa fa-image"></i></span>Gallery
                </NavLink>
              </li>
              {/* Gallery - end */}
              

              {/* About - start */}
                <li>
                <NavLink exact to="/about"  activeClassName='active'>
                  <span style={{marginRight:"10px"}}><i className="fa fa-info-circle"></i></span>About
                </NavLink>
              </li>
              {/* About - end */}
             

              {/* Contact - start */}
              <li>
                <NavLink exact to="/contact"  activeClassName='active'>
                  <span style={{marginRight:"10px"}}><i className="fa fa-envelope"></i></span>Contact
                </NavLink>
              </li>
              {/* Contact - end */}
              

              {/* Admin - start */}
              <li>
                <NavLink exact to="/admin"  activeClassName='active'>
                  <span style={{marginRight:"10px"}}><i className="fa fa-lock" aria-hidden="true"></i>,<span style={{width:'40px'}}></span><i className="fa fa-lock" aria-hidden="true"></i></span>Admin
                </NavLink>
              </li>
              {/* Admin - end */}
             
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navbar);

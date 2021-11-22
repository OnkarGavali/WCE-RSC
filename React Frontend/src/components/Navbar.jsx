import React, { useState } from 'react';

import { Link } from "react-router-dom";


function Navbar() {

  const [activeComponent, setActiveComponent] = useState("");
  return (
    <div>
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
                <Link className={`${activeComponent == "" ? 'active':''}`} exact to="/" onClick={() => setActiveComponent("")}>
                  <span style={{marginRight:"10px"}}><i className="fa fa-home"></i></span>Home
                </Link>
              </li>
              {/* Home - end */}


              {/* Authors - start */}
              <li className="drop">
                <a className={`${activeComponent == 'authors' ? 'active':''}`}>
                  <span ><i className="fa fa-group" style={{marginRight:"10px"}}></i></span>Authors
                </a>
                <ul className="dropdown">
                  <li>
                    <Link exact to="/authors/call-for-contribution" onClick={() => setActiveComponent("authors")}>
                      Call for Contributions <span style={{marginLeft:"10px"}}><i className="fa fa-bullhorn"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/authors/Guidlines" onClick={() => setActiveComponent("authors")}>
                      Submission Guidlines<span style={{marginLeft:"10px"}}><i className="fa fa-info-circle"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/authors/Paper-Submission" onClick={() => setActiveComponent("authors")}>
                      Paper Submission <span style={{marginLeft:"10px"}}><i className="fa fa-upload"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/authors/Important-Dates" onClick={() => setActiveComponent("authors")}>
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
                <a className={`${activeComponent == 'programs' ? 'active':''}`} >
                  <span style={{marginRight:"10px"}}><i className="fa fa-calendar"></i></span>Programs
                </a>
                <ul className="dropdown">
                  <li>
                    <Link exact to="/programs/Keynotes" onClick={() => setActiveComponent("programs")}>
                      Keynotes & Awards Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-microphone"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/programs/Paper-Presentation" onClick={() => setActiveComponent("programs")}>
                      Paper Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/programs/Poster-Presentation" onClick={() => setActiveComponent("programs")}>
                      Poster Presentation<span style={{marginLeft:"10px"}}><i className="fa fa-image"></i></span>
                    </Link>
                  </li>
                   <li>
                    <Link exact to="/programs/IPS" onClick={() => setActiveComponent("programs")}>
                      Innovative Project Showcase<span style={{marginLeft:"10px"}}><i className="fa fa-file"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/programs/Schedule" onClick={() => setActiveComponent("programs")}>
                      Event Schedule<span style={{marginLeft:"10px"}}><i className="fa fa-calendar"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/programs/Register" onClick={() => setActiveComponent("programs")}>
                      Event Registration<span style={{marginLeft:"10px"}}><i className="fa fa-edit"></i></span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Programs - end */}
              

              {/* Organisation - start */}
              <li className="drop">
                <a className={`${activeComponent == 'organisation' ? 'active':''}`}>
                  <span style={{marginRight:"10px"}}><i className="fa fa-sitemap"></i></span>Organisation
                </a>
                <ul className="dropdown">
                  <li>
                    <Link exact to="/organisation/org_committee" onClick={() => setActiveComponent("organisation")}>
                      Organising Committee<span style={{marginLeft:"10px"}}><i className="fa fa-group"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/organisation/adv_committee" onClick={() => setActiveComponent("organisation")}>
                      Advisory Committee<span style={{marginLeft:"10px"}}><i className="fa fa-group"></i></span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Organisation - end */}
              
              {/* LocalInfo - start */}
              <li className="drop">
                <a className={`${activeComponent == 'localInfo' ? 'active':''}`} >
                  <span style={{marginRight:"10px"}}><i className="fa fa-info-circle"></i></span>Local Information
                </a>
                <ul className="dropdown">
                  <li>
                    <Link exact to="/localInfo/venue" onClick={() => setActiveComponent("localInfo")}>
                      Conference Venue<span style={{marginLeft:"10px"}}><i className="fa fa-location-arrow"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/localInfo/location" onClick={() => setActiveComponent("localInfo")}>
                      Conference Location<span style={{marginLeft:"10px"}}><i className="fa fa-map-marker"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/localInfo/accessing" onClick={() => setActiveComponent("localInfo")}>
                      Accessing Sangli<span style={{marginLeft:"10px"}}><i className="fa fa-plane"></i></span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* LocalInfo - end */}
              

              {/* Gallery - start */}
              <li>
                <Link exact to="/gallery" className={`${activeComponent == 'gallery' ? 'active':''}`} onClick={() => setActiveComponent("gallery")}>
                  <span style={{marginRight:"10px"}}><i className="fa fa-image"></i></span>Gallery
                </Link>
              </li>
              {/* Gallery - end */}
              

              {/* About - start */}
                <li>
                <Link exact to="/about" className={`${activeComponent == 'about' ? 'active':''}`} onClick={() => setActiveComponent("about")}>
                  <span style={{marginRight:"10px"}}><i className="fa fa-info-circle"></i></span>About
                </Link>
              </li>
              {/* About - end */}
             

              {/* Contact - start */}
              <li>
                <Link exact to="/contact" className={`${activeComponent == 'contact' ? 'active':''}`} onClick={() => setActiveComponent("contact")}>
                  <span style={{marginRight:"10px"}}><i className="fa fa-envelope"></i></span>Contact
                </Link>
              </li>
              {/* Contact - end */}
              

              {/* Admin - start */}
              <li>
                <Link exact to="/admin" className={`${activeComponent == 'admin' ? 'active':''}`} onClick={() => setActiveComponent("admin")}>
                  <span style={{marginRight:"10px"}}><i className="fa fa-lock" aria-hidden="true"></i>,<span style={{width:'40px'}}></span><i className="fa fa-lock" aria-hidden="true"></i></span>Admin
                </Link>
              </li>
              {/* Admin - end */}
             
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

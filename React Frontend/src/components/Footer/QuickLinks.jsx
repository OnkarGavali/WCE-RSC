import React from 'react'
import {
  Link
} from "react-router-dom";


export const QuickLinks = () => {
    return (
        <div className="col-md-3">
          <div className="footer-widget twitter-widget">
            <h4>Quick Links<span className="head-line"></span></h4>
            <ul>
              <li>
                <Link to="asset/RSC-2018.pdf" target="_blank">e-Proceeding Download </Link>
              </li>
              <li>
                <Link to="/about">About Us </Link>
              </li>

              <li>
                <Link to="/contact">Contact Us </Link>
              </li>
            </ul>
          </div>
        </div>
    )
}

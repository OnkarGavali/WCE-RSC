import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const QuickLinks = () => {
    return (
        <div class="col-md-3">
          <div class="footer-widget twitter-widget">
            <h4>Quick Links<span class="head-line"></span></h4>
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
              {/*
              <li>
                <Link to="">Terms of Use</Link>
              </li>
              */}
            </ul>
          </div>
        </div>
    )
}

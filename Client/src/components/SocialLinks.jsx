import React from 'react'

export const SocialLinks = () => {
    return (
        <div className="footer-widget social-widget">
            <h4>Follow Us<span className="head-line"></span></h4>
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
              </li>
              <li>
                <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
              </li>
              <li>
                <a className="google" href="#"><i className="fa fa-google-plus"></i></a>
              </li>
              <li>
                <a className="linkdin" href="#"><i className="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a className="instgram" href="#"><i className="fa fa-instagram"></i></a>
              </li>
            </ul>
          </div>
    )
}

import React from 'react'

export const Subscribe = () => {
    return (
        <div className="footer-widget mail-subscribe-widget">
            <h4>Get in touch<span className="head-line"></span></h4>
            <p>Subscribe to our forum to stay tuned for the latest updates related to <b>WCE Research Symposium on Computing!</b></p>
            <form className="subscribe">
              <input type="email" className="email" id="txtEmail" placeholder="mail@example.com" />
              <a href="#subscribe" className="btn btn-lg btn-system" onClick="subscribe()">Subscribe</a>
            </form>
            <div id="subscribeResponse"></div>
          </div>
    )
}
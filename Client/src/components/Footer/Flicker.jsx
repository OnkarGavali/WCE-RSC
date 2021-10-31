import React from 'react'

export const Flicker = () => {
    return (
       <div className="col-md-3">
          <div className="footer-widget flickr-widget">
            <h4>External Links<span className="head-line"></span></h4>
            <ul className="flickr-list">
             
                  <li>
                    <a href="http://acm.org" className="lightbox">
                      <img alt="ACM Official Website" src="/images/ext/1.png"/>
                    </a>
                  </li>
                  <li>
                    <a href="http://india.acm.org" className="lightbox">
                      <img alt="ACM India Official Website" src="/images/ext/2.png"/>
                    </a>
                  </li>
                  <li>
                    <a href="http://walchandsangli.ac.in" className="lightbox">
                      <img alt="Walchand College of Engineering Official Website" src="/images/ext/3.png"/>
                    </a>
                  </li>
                  
                  <li>
                    <a href="http://wce.acm.org" className="lightbox">
                      <img alt="Wce ACM Official Website" src="/images/news/3.jpg"/>
                    </a>
                  </li>
                
              </ul>
            </div>
          </div>
    )
}

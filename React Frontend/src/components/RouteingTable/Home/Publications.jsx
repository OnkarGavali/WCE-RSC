import React from 'react';

import img from '../../../images/publication/Springer.jpg'
import imgsrc from '../../../JSON/Images.json';
import data from '../../../JSON/Home/HomeBody.json';

function Publications() {
    return (
        <div>
            <div className="tab-content">
                <div className="latest-posts" >
                    <h3 className="classic-title" id="notifications"><span>Published By</span></h3>
                    <div className="team-member modern">         
                        <div className="sponsor-photo">
                            <a href="https://www.faterindia.org/"  target="_blank">
                                <img src={img} style={{}} alt="WCE ACM Student Chapter" />
                            </a>
                        </div>
                    </div>
                    <div className="team-member modern">         
                        <div className="sponsor-photo">
                            <a href="https://www.faterindia.org/"  target="_blank">
                                <img src='https://static.wixstatic.com/media/e192f7_f60a1d7e58ba4708b9d94820fe99b0e2~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01/Drawing2.webp' style={{}} alt="WCE ACM Student Chapter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publications;

import React, { Components, useState } from 'react';
import Notifications from './Notifications';
import imgsrc from '../../../JSON/Images.json';
import data from '../../../JSON/Home/HomeBody.json';

function SponsorsOld() {

  return (
    <div>

      <div className="tab-content">
        <div className="latest-posts" >
          <h3 className="classic-title" id="notifications"><span>Supported By</span></h3>
          <a href={data.data.links.support} target="_blank">
            <img src={imgsrc.support[0].url} width="300" height="50" alt="WCE ACM Student Chapter" />
          </a>
          <a href={data.data.links.support} style={{ marginLeft:'auto' , marginRight:'auto', paddingLeft:'25%', justifyContent:'center'}} target="_blank">
            <img src='https://static.wixstatic.com/media/e192f7_f60a1d7e58ba4708b9d94820fe99b0e2~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01/Drawing2.webp' style={{}} alt="WCE ACM Student Chapter" />
          </a>

        </div>
      </div>

    </div>
  );
}

export default SponsorsOld;

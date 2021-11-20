import React, { Components, useState } from 'react';
import Notifications from './Notifications';
import data from '../../../JSON/Home/HomeBody.json';

function SponsorsOld() {

  return (
    <div>

      <div className="tab-content">
        <div className="latest-posts" >
          <h3 className="classic-title" id="notifications"><span>Supported By</span></h3>
          <a href={data.data.links.support} target="_blank">
            <img src="images/wceacm.png" width="300" height="50" alt="WCE ACM Student Chapter" />
          </a>

        </div>
      </div>

    </div>
  );
}

export default SponsorsOld;

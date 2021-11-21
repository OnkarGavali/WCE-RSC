import React from 'react';

import img from '../../../images/publication/Springer.jpg'
import imgsrc from '../../../JSON/Images.json';
import data from '../../../JSON/Home/HomeBody.json';

function Publications() {
    return (
        <div>
            <div className="tab-content">
                            <div className="latest-posts" >
                            <a href={data.data.links.publication} target="_blank"> 
                                <h3 className="classic-title" id="notifications"><span>Published By</span></h3>
                                <img src={img}></img>
                            </a>
                            </div>
                        </div>
        </div>


            
      
    );
}

export default Publications;

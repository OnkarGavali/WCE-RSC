import React from 'react';
import logo from '../../../images/publication/Springer.jpg';
import data from '../../../JSON/Home/HomeBody.json';

function Publications() {
    return (
        <div>
            <div className="tab-content">
                            <div className="latest-posts" >
                            <a href={data.data.links.publication} target="_blank"> 
                                <h3 className="classic-title" id="notifications"><span>Published By</span></h3>
                                <img src={logo}></img>
                            </a>
                            </div>
                        </div>
        </div>


            
      
    );
}

export default Publications;

import React, { Components, useState,useEffect } from 'react';
import Sponsors from './Sponsors';
import { Footer } from '../../Footer/Footer';
import HomeBody from './HomeBody';
import Slider from './Slider';
import ImpDates from './ImpDates';
import Speakers from './Speakers';
import SponsorsOld from './SponsorsOld';






function Home() {
    
    return (
        <div>
            <div id="content" style={{padding:'60px 0px'}}>
                <div className="container " style={{ textAlign: 'justify' }}>
                    <Slider/>
                    <div className="row">
                        
                        <HomeBody/>

                        <ImpDates/>
                        
                       
                    </div>
                    
                </div>
                <div className="hr5" style={{marginTop:'30px',marginBottom:'40px'}}></div>
                
                <Speakers/>
                  <div className="hr5" style={{marginTop:'30px',marginBottom:'40px'}}></div>
                {/*<Sponsors/> */}
            </div>
        </div>
    );
}

export default Home;




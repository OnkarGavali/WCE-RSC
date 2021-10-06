import React, { Components, useState,useEffect } from 'react';
import Sponsors from './Sponsors';
import { Footer } from '../../Footer/Footer';
import HomeBody from './HomeBody';
import Slider from './Slider';
import ImpDates from './ImpDates';





function Home() {
    
    return (
        <div>
            <div id="content" style={{padding:'60px 0px'}}>
                <div className="container " style={{ textAlign: 'justify' }}>
                <Slider/>
                    <div className="row">
                        
                        <HomeBody/>
                        <ImpDates/>
                        <Sponsors></Sponsors>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;




import React, { Components, useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Notifications from './Notifications';
import Sponsors from './Sponsors';
import { Footer } from './Footer';
import HomeBody from './HomeBody';
import Slider from './Slider';


function Home() {
    return (
        <div>
            <Header></Header>
            <div id="content" style={{padding:'60px 0px'}}>
                <div className="container " style={{ textAlign: 'justify' }}>
                <Slider/>
                    <div className="row">
                        
                        <HomeBody/>
                        <Sponsors></Sponsors>
                       
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;




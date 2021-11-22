import React from 'react';
import Sponsors from './Sponsors';
import HomeBody from './HomeBody';
import Slider from './Slider';
import ImpDates from './ImpDates';
import Speakers from './Speakers';
import Timer from './Timer';
import CountDown from './Countdown';





function Home() {
    
    return (
        <div>
            <div className="contenti" style={{padding:'60px 0px'}}>
                <div className="container " style={{ textAlign: 'justify' }}>
                    <Slider/>
                    <div className="row">                 
                        <HomeBody/>
                        <ImpDates/> 
                    </div>
                </div>
                
                {/*<Speakers/>
                <div className="hr5" style={{marginTop:'30px',marginBottom:'40px'}}></div>
                <Sponsors />
                <div className="hr5" style={{marginTop:'30px',marginBottom:'40px'}}></div>
                */} 
                <CountDown/>
            </div>
         
        </div>
    );
}

export default Home;




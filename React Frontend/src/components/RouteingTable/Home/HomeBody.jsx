import React from 'react';
import Notifications from './Notifications';
import Timer from './Timer';
import data from '../../../JSON/Home/HomeBody.json';
import Countdown from './Countdown';

function HomeBody() {
    return (
        <>
            <div className="col-md-8" >

                <h1 className="accent-color">{data.data.title} </h1>
               
                <strong>{data.data.subtitle}</strong>
                 <br /> <br />
                <p><strong>{data.data.subhead}</strong></p>
                <br />
                <p>{data.data.info.para1}
                </p><br />
                <p>{data.data.info.para2}
                    </p>
                <br />
                <p> {data.data.info.para3}</p><br />

                <Notifications/>
            
            </div>
        </>
    );
}

export default HomeBody;

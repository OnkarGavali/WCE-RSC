import React from 'react';
import Notifications from './Notifications';
import Timer from './Timer';
import data from '../../../JSON/Home/HomeBody.json';

function HomeBody() {
    return (
        <div >
            <div className="col-md-8" >

                <h1 className="accent-color">{data.data.title} </h1>
                <strong>{data.data.subtitle}</strong>
                <p><strong>{data.data.subhead}</strong></p>
                <br /><br />
                <p>{data.data.info.para1}
                </p><br />
                <p>{data.data.info.para2}
                    </p>
                <br />
                <p> {data.data.info.para3}</p><br />
            <Notifications/>
            <Timer/>
            </div>
        </div>
    );
}

export default HomeBody;

import React from 'react'
import {Link} from "react-router-dom";
import { CollegeGoogleMap } from '../CollegeGoogleMap';
import PageBanner from '../PageBanner';


function Location() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Conference Location" head="Local Information" subhead="Conference Location" info="We Are WCE Research Symposium" />
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                         {/* Main Content - start */}
                        <div className="col-md-9" style={{textAlign:'justify'}}>
                            <h2 className="classic-title"><span>Conference Location</span></h2>
                            {/* <p>Your nearby laptop (Or any compatible device) with a good internet connection ;)</p> */}
                            <p>SANGLI city is located in the Indian state of Maharashtra on the banks of river Krishna, nearly 400 kilometers southeast of Mumbai. This region lies in the Deccan plateau. Other small rivers, such as the Warana and the Panchganga, flow into the River Krishna. Land in the region is best suitable for agriculture. The green city is inside what is called 'Sugar Belt' of Maharashtra.</p>
                            <p>The district alone has more than thirty sugar factories, which makes it among the highest sugar-producing districts of India. It has largest trading centre for turmeric in Asia. Today, more than 90% of the turmeric trade in India takes place in Sangli. The Sangli district has recently entered into wine industry, and has achieved some success in producing classic vintage categories.</p>
                            <p>The Sangli-Miraj-Kupwad City Municipal Corporation is the local self-government body which looks after the development of the Sangli-Miraj twin cities. This is the largest municipal corporation in South Maharashtra and serves a population of0.65 million.</p>

                            {/* College Google Location - start */}
                            <CollegeGoogleMap/>
                            {/* College Google Location - end */}
                        </div>
                        {/* Main Content - end */}
                        
                        {/* Related Links - start */}
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4 className='accent-color'>Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="venue">Conference Venue</Link>
                                    </li>

                                    <li>
                                        <Link to="accessing">Accessing Sangli</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Related Links - end */}

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Location;

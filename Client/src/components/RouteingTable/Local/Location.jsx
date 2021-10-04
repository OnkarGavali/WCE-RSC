import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../PageBanner';


function Location() {
    return (
        <div>
            <PageBanner name="Conference Location" head="Local Information" subhead="Conference Location" info="We Are WCE Research Symposium" />
            <div id="content">
                <div class="container">
                    <div class="page-content">

                        <div class="col-md-9" style={{textAlign:'justify'}}>
                            <br/><br/>
                            <p>Your nearby laptop (Or any compatible device) with a good internet connection ;)</p>
                            {/*<p>SANGLI city is located in the Indian state of Maharashtra on the banks of river Krishna, nearly 400 kilometers southeast of Mumbai. This region lies in the Deccan plateau. Other small rivers, such as the Warana and the Panchganga, flow into the River Krishna. Land in the region is best suitable for agriculture. The green city is inside what is called 'Sugar Belt' of Maharashtra.</p>
                            <p>The district alone has more than thirty sugar factories, which makes it among the highest sugar-producing districts of India. It has largest trading centre for turmeric in Asia. Today, more than 90% of the turmeric trade in India takes place in Sangli. The Sangli district has recently entered into wine industry, and has achieved some success in producing classic vintage categories.</p>
                            <p>The Sangli-Miraj-Kupwad City Municipal Corporation is the local self-government body which looks after the development of the Sangli-Miraj twin cities. This is the largest municipal corporation in South Maharashtra and serves a population of0.65 million.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122189.97964997361!2d74.51405970868504!3d16.854270370879984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10c8187f060eb%3A0x37911f53cdc1ddb3!2sSangli%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1476206464070" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe> --> */}
                        </div>
                        <div class="col-md-3 sidebar right-sidebar">
                           
                            <div class="widget widget-categories">
                                <h4>Related Links <span class="head-line"></span></h4>
                                <ul>


                                    <li>
                                        <Link to="/venue">Conference Venue</Link>
                                    </li>

                                    <li>
                                        <Link to="/accessing">Accessing Sangli</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Location;

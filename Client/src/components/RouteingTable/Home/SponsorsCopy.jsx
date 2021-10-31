import React, { Component } from 'react'

export default class SponsorsCopy extends Component {
    render() {
        return (
            <div className="partner">
                    <div className="container">
                        <div className="row">

                            {/* <!-- Start Big Heading --> */}
                            <div className="big-title text-center">
                                <h1>Our Happy <strong>Clients</strong></h1>
                                <p className="title-desc">Partners We Work With</p>
                            </div>
                    {/* <!-- End Big Heading -->
                    
                    <!--Start Clients Carousel--> */}
                            <div className="our-clients">
                                <div className="clients-carousel custom-carousel touch-carousel navigation-3" data-appeared-items="5" data-navigation="true">
                                    
                                    {/* <!-- Client 1 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/teqip3logo.png" alt="" /></a>
                                    </div>
                                    
                                    {/* <!-- Client 2 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/wceacm.png" alt="" /></a>
                                    </div>
                                    
                                    {/* <!-- Client 3 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="/images/c3.png" alt="" /></a>
                                    </div>
                                    
                                    {/* <!-- Client 4 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/c4.png" alt="" /></a>
                                    </div>
                                    
                                    {/* <!-- Client 5 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="/images/c5.png" alt="" /></a>
                                    </div>
                                    
                                    {/* <!-- Client 6 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/c6.png" alt="" /></a>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            {/* <!-- End Clients Carousel --> */}
                        </div>
                        {/* <!-- .row --> */}
                    </div> 
                    {/* <!-- .container --> */}
                </div>
        )
    }
}

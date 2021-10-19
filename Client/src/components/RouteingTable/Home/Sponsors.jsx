import React, { Component } from 'react'

export default class Sponsors extends Component {
    constructor(props){
        super(props);
        this.state ={
            sponsorsImage:[
                {
                    id:'',
                    url:'',
                    alt:'',

                }
            ]
        }
    }
    render() {
        return (
            <div className="partner">
                    <div className="container">
                        <div className="row">

                            {/* <!-- Start Big Heading --> */}
                            <div className="big-title text-center">
                                <h1>Our <strong>Sponsers</strong></h1>
                                <p className="title-desc"></p>
                            </div>
                    {/* <!-- End Big Heading -->
                    
                    <!--Start Clients Carousel--> */}
                            <div className="our-clients">
                                <div className="clients-carousel custom-carousel touch-carousel navigation-3" data-appeared-items="3" data-navigation="true">
                                    
                                    {/* <!-- Client 1 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/teqip3logo.png" alt=""  height="50px"/></a>
                                    </div>
                                    
                                    {/* <!-- Client 2 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/wceacm.png" alt="" style={{width:"300px", height:"50px !important"}}/></a>
                                    </div>
                                    
                                    {/* <!-- Client 3 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/FinIQ.png" alt="" /></a>
                                    </div>
                                     {/* <!-- Client 1 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/teqip3logo.png" alt=""  height="50px"/></a>
                                    </div>
                                     {/* <!-- Client 1 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/teqip3logo.png" alt=""  height="50px"/></a>
                                    </div>
                                   
                                    {/* <!-- Client 1 --> */}
                                    <div className="client-item item">
                                        <a href="#"><img src="images/teqip3logo.png" alt=""  height="50px"/></a>
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

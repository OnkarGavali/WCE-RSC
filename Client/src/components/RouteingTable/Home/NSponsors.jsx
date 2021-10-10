import React, { Component } from 'react'

export default class NSponsors extends Component {
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
    // render() {
    //     return (
    //         <div className="partner">
    //                 <div className="container">
    //                     <div className="row">

    //                         {/* <!-- Start Big Heading --> */}
    //                         <div className="big-title text-center">
    //                             <h1>Our <strong>Sponsers</strong></h1>
    //                             <p className="title-desc"></p>
    //                         </div>
    //                 {/* <!-- End Big Heading -->
                    
    //                 <!--Start Clients Carousel--> */}
    //                         <div className="our-clients">
    //                             <div className="clients-carousel custom-carousel touch-carousel" data-appeared-items="3" >
                                    
    //                                 {/* <!-- Client 1 --> */}
    //                                 <div className="client-item item">
    //                                     <a href="#"><img src="images/teqip3logo.png" alt=""  height="50px"/></a>
    //                                 </div>
                                    
    //                                 {/* <!-- Client 2 --> */}
    //                                 <div className="client-item item">
    //                                     <a href="#"><img src="images/wceacm.png" alt="" style={{width:"300px", height:"50px !important"}}/></a>
    //                                 </div>
                                    
    //                                 {/* <!-- Client 3 --> */}
    //                                 <div className="client-item item">
    //                                     <a href="#"><img src="images/FinIQ.png" alt="" /></a>
    //                                 </div>
    //                                  {/* <!-- Client 1 --> */}
    //                                 <div className="client-item item">
    //                                     <a href="#"><img src="images/teqip3logo.png" alt=""  height="50px"/></a>
    //                                 </div>
    //                                  {/* <!-- Client 1 --> */}
    //                                 <div className="client-item item">
    //                                     <a href="#"><img src="images/teqip3logo.png" alt=""  height="50px"/></a>
    //                                 </div>
                                   
    //                                 {/* <!-- Client 1 --> */}
    //                                 <div className="client-item item">
    //                                     <a href="#"><img src="images/teqip3logo.png" alt=""  height="50px"/></a>
    //                                 </div>
                                    
                                    
    //                             </div>
    //                         </div>
    //                         {/* <!-- End Clients Carousel --> */}
    //                     </div>
    //                     {/* <!-- .row --> */}
    //                 </div> 
    //                 {/* <!-- .container --> */}
    //             </div>
    //     )
    // }
    // render(){
    //     return(
    //         <div className="row">
                    
                    
    //                 <div className="col-md-3">
						
	// 					<div className="big-title">
	// 						<h1>Our <span className="accent-color">Clients</span></h1>
	// 						<p className="title-desc">Partners We Work With</p>
	// 					</div>
					
	// 				</div>
					
	// 				<div className="col-md-9">
					
	// 					<div className="our-clients">
	// 						<div className="clients-carousel custom-carousel touch-carousel navigation-2" data-appeared-items="4" data-navigation="true">
								
							
	// 							<div className="client-item item">
	// 								<a href="#"><img src="images/teqip3logo.png" alt="" /></a>
	// 							</div>
								
								
	// 							<div className="client-item item">
	// 								<a href="#"><img src="images/teqip3logo.png" alt="" /></a>
	// 							</div>
								
								
	// 							<div className="client-item item">
	// 								<a href="#"><img src="images/c3.png" alt="" /></a>
	// 							</div>
								
							
	// 							<div className="client-item item">
	// 								<a href="#"><img src="images/c4.png" alt="" /></a>
	// 							</div>
								
								
	// 							<div className="client-item item">
	// 								<a href="#"><img src="images/c5.png" alt="" /></a>
	// 							</div>
								
								
								
	// 						</div>
	// 					</div>
	// 					{/* <!--End Clients Carousel--> */}
	// 				</div>
    //                 </div>
    //     )
    // }
     render(){
        return(
            
                <div className="container">

                        {/* <!-- Start Big Heading --> */}
                        <div className="big-title text-center" data-animation="fadeInDown" data-animation-delay="01">
                            <h1>Our Great <strong>Team</strong></h1>
                        </div>
                        {/* <!-- End Big Heading -->

                        <!-- Some Text --> */}
                        <p className="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <span className="accent-color sh-tooltip" data-placement="right" title="Simple Tooltip">doloremque laudantium</span>, totam rem aperiam, eaque ipsa quae ab illo inventore
                            <br/>veritatis et quasi <span className="accent-color sh-tooltip" data-placement="bottom" title="Simple Tooltip">architecto</span> beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

                        
                        

                        {/* <!-- Start Team Members --> */}
                        <div className="row">

                            {/* <!-- Start Memebr 1 --> */}
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="03">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/teqip3logo.png" />
                                      
                                        </div>
                                    </div>
                                   
                                </div>
                            
                            {/* <!-- End Memebr 1 -->

                            <!-- Start Memebr 2 --> */}
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="04">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="sponsor-photo" >
                                        <img alt="" src="images/teqip3logo.png" />
                                      
                                        </div>
                                    </div>
                                </div>
                            
                            
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="05">
                                <div className="team-member modern">
                                   
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/teqip3logo.png" />
                                        
                                        </div>
                                    </div>
                                    
                                </div>
                            
                           
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                                <div className="team-member modern">
                                   
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/FinIQ.png" />
                                      
                                        </div>
                                    </div>
                                  
                                    
                                </div>

                            
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                                <div className="team-member modern">
                                   
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/FinIQ.png" />
                                      
                                        </div>
                                    </div>
                                  
                                    
                                </div>

                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="04">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="sponsor-photo" >
                                        <img alt="" src="images/teqip3logo.png" />
                                      
                                        </div>
                                    </div>
                                </div>
                                
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                                <div className="team-member modern">
                                   
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/FinIQ.png" />
                                      
                                        </div>
                                    </div>
                                  
                                    
                                </div>
                                
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                                <div className="team-member modern">
                                   
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/FinIQ.png" />
                                      
                                        </div>
                                    </div>
                                  
                                    
                                </div>

                                <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="04">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="sponsor-photo" >
                                        <img alt="" src="images/teqip3logo.png" />
                                      
                                        </div>
                                    </div>
                                </div>
                                
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                                <div className="team-member modern">
                                   
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/FinIQ.png" />
                                      
                                        </div>
                                    </div>
                                  
                                    
                                </div>
                            
                        </div>
                      

                </div>
              
            
        )
    }
}

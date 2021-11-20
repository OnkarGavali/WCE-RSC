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
                                        <img alt="" src="images/random.jpg" />
                                      
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
                                        <img alt="" src="images/poster.png" />
                                      
                                        </div>
                                    </div>
                                  
                                    
                                </div>

                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                                <div className="team-member modern">
                                   
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/22.png" />
                                      
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
                                        <img alt="" src="images/about/1.png" />
                                      
                                        </div>
                                    </div>
                                  
                                    
                                </div>
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                                <div className="team-member modern">
                                   
                                    <div className="sponsor-photo">
                                        <img alt="" src="images/about/2.png" />
                                      
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

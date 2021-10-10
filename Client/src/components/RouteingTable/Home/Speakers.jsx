import React, { Component } from 'react'

export default class Speakers extends Component {
    render() {
        return (
            <div className="" style={{backgroundColor:'#f9f9f9'}}>
                < h3 className="classic-title"><span>Speakers</span></h3>
                <div className="container" style={{marginLeft:'3%'}}>
                

                        {/* <!-- Start Big Heading --> */}
                        {/*
                        <div className="big-title text-center" data-animation="fadeInDown" data-animation-delay="01">
                            <h1>Our Great <strong>Team</strong></h1>

                        </div>
                        */}
                        {/* <!-- End Big Heading -->

                        <!-- Some Text --> */}
                        {/*
                        <p className="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <span className="accent-color sh-tooltip" data-placement="right" title="Simple Tooltip">doloremque laudantium</span>, totam rem aperiam, eaque ipsa quae ab illo inventore
                            <br/>veritatis et quasi <span className="accent-color sh-tooltip" data-placement="bottom" title="Simple Tooltip">architecto</span> beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

                        */ }
                        

                        {/* <!-- Start Team Members --> */}
                        <div className="row">

                            {/* <!-- Start Memebr 1 --> */}
                            <div className="col-md-2 col-sm-4 col-xs-8"    data-animation="fadeIn" data-animation-delay="03">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="member-photo">
                                        <img alt="" src="images/users/13.jpg" />
                                        <div className="member-name">John Doeafasfasfsasf <span>Developer</span>
                                        </div>
                                    </div>
                                    {/* <!-- Memebr Words --> */}
                                    <div className="member-info">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                                    </div>
                                    {/* <!-- Start Progress Bar 1 --> */}
                                   
                                    {/* <!-- Memebr Social Links --> */}
                                    <div className="member-socail">
                                        <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                                        <a className="gplus" href="#"><i className="fa fa-google-plus"></i></a>
                                        <a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                                        <a className="flickr" href="#"><i className="fa fa-flickr"></i></a>
                                        <a className="mail" href="#"><i className="fa fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Memebr 1 -->

                            <!-- Start Memebr 2 --> */}
                            <div className="col-md-2 col-sm-4 col-xs-8" data-animation="fadeIn" data-animation-delay="04">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="member-photo" >
                                        <img alt="" src="images/users/p1.jpg" />
                                        <div className="member-name">Silly Sally <span>Developer</span>
                                        </div>
                                    </div>
                                    {/* <!-- Memebr Words --> */}
                                    <div className="member-info">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                                    </div>
                                    {/* <!-- Start Progress Bar 1 --> */}
                                    
                                    {/* <!-- Memebr Social Links --> */}
                                    <div className="member-socail">
                                        <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                                        <a className="gplus" href="#"><i className="fa fa-google-plus"></i></a>
                                        <a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                                        <a className="flickr" href="#"><i className="fa fa-flickr"></i></a>
                                        <a className="mail" href="#"><i className="fa fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Memebr 2 -->

                            <!-- Start Memebr 3 --> */}
                            <div className="col-md-2 col-sm-4 col-xs-8" data-animation="fadeIn" data-animation-delay="05">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="member-photo">
                                        <img alt="" src="images/users/p2.jpg" />
                                        <div className="member-name">Chris John <span>Developer</span>
                                        </div>
                                    </div>
                                    {/* <!-- Memebr Words --> */}
                                    <div className="member-info">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                                    </div>
                                    {/* <!-- Start Progress Bar 1 --> */}
                                    <div className="progress-label">Photoshop</div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-progress-animation="96%" data-appear-animation-delay="400">
                                            <span className="percentage">96%</span>
                                        </div>
                                    </div>
                                    {/* <!-- Start Progress Bar 2 --> */}
                                    <div className="progress-label">Logo Design</div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-progress-animation="94%" data-appear-animation-delay="800">
                                            <span className="percentage">94%</span>
                                        </div>
                                    </div>
                                    {/* <!-- Start Progress Bar 3 --> */}
                                    <div className="progress-label">Vectors Design</div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-progress-animation="90%" data-appear-animation-delay="1200">
                                            <span className="percentage">90%</span>
                                        </div>
                                    </div>
                                    {/* <!-- Memebr Social Links --> */}
                                    <div className="member-socail">
                                        <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                                        <a className="gplus" href="#"><i className="fa fa-google-plus"></i></a>
                                        <a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                                        <a className="flickr" href="#"><i className="fa fa-flickr"></i></a>
                                        <a className="mail" href="#"><i className="fa fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Memebr 3 -->

                            <!-- Start Memebr 4 --> */}
                            
                            {/* <!-- End Memebr 4 --> */}
                            



                            




                        </div>
                        {/* <!-- End Team Members --> */}

                </div>
                {/* <!-- .container --> */}
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Speakers extends Component {
    render() {
        return (
            <div className="section" style={{backgroundColor:'#f9f9f9'}}>
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
                                    <div className="member-photo">
                                        <img alt="" src="images/users/13.jpg" />
                                        <div className="member-name">John Doeafasfasfsasf <span>Developer</span>
                                        </div>
                                    </div>
                                    {/* <!-- Memebr Words --> */}
                                    <div className="member-info">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Memebr 1 -->

                            <!-- Start Memebr 2 --> */}
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="04">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="member-photo" >
                                        <img alt="" src="images/users/p1.jpg" />
                                        <div className="member-name">Name Name <span>Date</span>
                                        </div>
                                    </div>
                                    {/* <!-- Memebr Words --> */}
                                    <div className="member-info">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                                    </div>
                                    {/* <!-- Start Progress Bar 1 --> */}
                                    
                                </div>
                            </div>
                            {/* <!-- End Memebr 2 -->

                            <!-- Start Memebr 3 --> */}
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="05">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="member-photo">
                                        <img alt="" src="images/users/p2.jpg" />
                                        <div className="member-name">Chris John <span>Developer dfsfosdfjsodfsdfjsddfks</span>
                                        </div>
                                    </div>
                                    {/* <!-- Memebr Words --> */}
                                    <div className="member-info">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Memebr 3 -->

                            <!-- Start Memebr 4 --> */}
                            <div className="col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                                <div className="team-member modern">
                                    {/* <!-- Memebr Photo, Name & Position --> */}
                                    <div className="member-photo">
                                        <img alt="" src="images/users/p3.jpg" />
                                        <div className="member-name">Sara John <span>Developer</span>
                                        </div>
                                    </div>
                                    {/* <!-- Memebr Words --> */}
                                    <div className="member-info">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Memebr 4 --> */}
                        </div>
                </div>
                {/* <!-- .container --> */}
            </div>
        )
    }
}

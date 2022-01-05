import React, { Component } from 'react'

export default class OrgCommitteMemberPhoto extends Component {
    render() {
        return (
            <div className="" style={{backgroundColor:'#f9f9f9',padding:"2%"}}>
                <div className="container" style={{width:"100%"}}>
                    <div className="big-title text-center">
                        <h1 className='classic-title' ><span style={{fontWeight:"700"}}>Symposium Patron</span></h1>
                    </div>

                    <div className="row" >
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="team-member modern" style={{textAlign:'center'}}>
                                {/* <!-- Memebr Photo, Name & Position --> */}
                                <div className="org-photo">
                                    <img alt="" src="/images/WCE_Director.jpg" />
                                    
                                </div>
                                {/* <!-- Memebr Words --> */}
                                <div className="member-info">
                                    <p style= {{whiteSpace :'pre-line'}}><storng style={{fontWeight:'700'}}>{ "Prof. P. H. Sawanta"}</storng>{"\nDirector, Walchand College of Engineering, Sangli"} </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="team-member modern" style={{textAlign:'center'}}>
                                
                                <div className="org-photo">
                                    <img alt="" src="/images/FATER_President.png" />
                                    
                                </div>
                            
                                <div className="member-info">
                                    <p style= {{whiteSpace :'pre-line'}}><storng style={{fontWeight:'700'}}>{"Prof.B.S. Bisht"}</storng>{"\nPresident of FATER Academy of India (FAI)"}</p>
                                </div>
                            </div>
                        </div>
                           
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="team-member modern" style={{textAlign:'center'}}>
                              
                                <div className="org-photo" >
                                    <img alt="" src="/images/FATER_VicePresident.png" />
                                </div>
                              
                                <div className="member-info">
                                    <p style= {{whiteSpace :'pre-line'}}><storng style={{fontWeight:'700'}}>{"Prof. M. Lellis Thivagar"}</storng>{"\nVice President of FATER Academy of India (FAI)"}</p>
                                </div>                              
                            </div>
                        </div>      
                    </div>
                    <div className="big-title text-center">
                        <h1 className='classic-title' ><span style={{fontWeight:"700"}}>Convener</span></h1>
                    </div>
                          
                    <div className="row" style={{justifyContent:'space-between',display:'flex'}}>
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="team-member modern" style={{textAlign:'center'}}>
                                
                                <div className="org-photo" >
                                    <img alt="" src="/images/Convener1.png" />
                                    
                                </div>
                                
                                <div className="member-info">
                                    <p style= {{whiteSpace :'pre-line'}}><storng style={{fontWeight:'700'}}>{"Dr. Mrs. M.A. Shah"}</storng>{"\nHoD, Department of Computer Science and Engineering, WCE"}</p>
                                </div>
                            </div>
                        </div>
                        

                          
                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <div className="team-member modern" style={{textAlign:'center'}}>
                                <div className="org-photo" >
                                    <img alt="" src="/images/Convener2.jpeg" />
                                    
                                </div>
                                <div className="member-info">
                                    <p style= {{whiteSpace :'pre-line'}}><storng style={{fontWeight:'700'}}>{"Dr. A. J. Umbarkar"}</storng>{"\nHoD, Department of Information Technology, WCE"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

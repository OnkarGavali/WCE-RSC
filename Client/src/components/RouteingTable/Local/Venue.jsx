import React from 'react'
import {
    Link
} from "react-router-dom";
import { CollegeGoogleMap } from '../CollegeGoogleMap';
import PageBanner from '../PageBanner';


function Venue() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Conference Venue" head="Local Information" subhead="Conference Venue" info="We Are WCE Research Symposium" />
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                         {/* Main Content - start */}
                        <div className="col-md-9" style={{ textAlign: 'justify' }}>
                            <h2 className="classic-title"><span>Conference Venue</span></h2>
                            <p>This year RSC will be held on online platform as per the given guidelines. But if you wish to visit our  college, here is everything you need:</p>
                            <p>Walchand College of Engineering is situated midway between Sangli and Miraj cities at Vishrambag, Sangli. The WCE campus is located on about 90 acres of land on southern side of Sangli – Miraj road.

                                In 1947, the college made a modest beginning as New Engineering College, with a single program leading to B.E. (Civil) degree. In the year 1955, the College was renamed as Walchand College of Engineering as part of the new arrangements and pursuant to the Rehabilitation and Development Program mainly funded by Seth Walchand Hirachand Memorial Trust and the Government. The Government appointed an Ad Hoc Committee for conducting the college from May 1955, later replaced by the Administrative Council in 1956. The Ad Hoc Committee added two more degree programs in B.E. (Mechanical) and B.E. (Electrical) in 1955 with the intake of 20 each. Three Diploma programs also started in 1955 – Civil (40 intake), Mechanical (20) and Electrical (20).
                            </p>
                            <p>
                                Post Graduate programs in Civil, Mechanical and Electrical Engineering and Diploma program in Industrial Electronics were introduced in 1971. In 1986 the UG and PG programs in Electronics Engineering and UG program in Computer Science and Engineering were introduced.

                                PG program in CSE was introduced in 1997. In 2001, added B.E. program in Information Technology with an intake of 60 students. An additional intake of 30 students was also sanctioned for Computer Science & Engineering program, resulting in total intake of 390 students for all branches at UG level and 106 at PG level. As part of strategic planning, PG section is being strengthened and PG intake has now steadily risen to 240 across 10 programs. The College has a QIP scheme for full-time doctoral programs and also offers Ph. D. programs of Shivaji University in various branches of engineering.
                            </p>
                            <p>
                                Walchand College of Engineering became autonomous in 2007. The college revamped its academic structure and contents, in consultation with few US and IIT academic experts. Accordingly nomenclature of B.E and M.E programs has been changed to B Tech and M Tech programs. After completion of the first term of six years, the College has now received extension of autonomous status for the second term of six years till 2019-20. It participated in the World Bank funded, Government of India scheme, namely, Technical Education Quality Improvement Program (TEQIP) in Phase I from 2005-2009, wherein it stood all-India 2nd out of 127 participating institutions in terms of program impact performance. The college is presently participating in Phase II of TEQIP with outstanding performance
                            </p>
                            <br />

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
                                        <Link to="location">Conference Location</Link>
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

export default Venue;

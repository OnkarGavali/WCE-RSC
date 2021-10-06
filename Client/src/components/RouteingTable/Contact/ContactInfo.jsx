import React from 'react'

export const ContactInfo = () => {
    return (
        <div>
            {/* <!-- Classic Heading --> */}
            <h4 className="classic-title"><span>Information</span></h4>

              {/* <!-- Some Info --> */}
              <p>Walchand College of Engineering is situated midway between Sangli and Miraj cities at Vishrambag, Sangli. The WCE campus is located on about 90 acres of land on southern side of Sangli – Miraj road.</p> 

              <p> In 1947, the college made a modest beginning as New Engineering College, with a single program leading to B.E. (Civil) degree. In the year 1955, the College was renamed as Walchand College of Engineering as part of the new arrangements and pursuant to the Rehabilitation and Development Program mainly funded by Seth Walchand Hirachand Memorial Trust and the Government. The college became autonomous institute during the year 2007. Institute has total intake of 430 students for all branches at UG level and 240 at PG level. As part of strategic planning research section is being further strengthened.</p>

              {/* <!-- Divider --> */}
              <div className="hr1" style={{'marginBottom':"10px"}}></div>

              {/* <!-- Info - Icons List --> */}
              <ul className="icons-list">
                <li><i className="fa fa-globe">  </i> <strong>Address:</strong> Walchand College of Engineering, Sangli</li>
                <li><i className="fa fa-envelope-o"></i> <strong>Email:</strong>  rsc2022@walchandsangli.ac.in</li>
                <li><i className="fa fa-mobile"></i> <strong>Phone:</strong>  +91 88057 09102 | 7030226700</li>
              </ul>

        </div>
    )
}

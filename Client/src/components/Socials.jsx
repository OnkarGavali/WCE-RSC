import React, {Components, useState} from 'react';


function Socials (props)
{

    return (
        <div>
            <li style={{display:'inline'}}>
                <a className={props.classNam} data-placement={props.dataplace} title={props.title} href={props.href}>
                    <i className={props.classnm}>

                    </i>
                </a>
            </li>


        </div>

    );
}
/*
<Socials classNam="facebook itl-tooltip" dataplace="bottom" title="Facebook" href="  $acm->SiteFB();  "classnm="fa fa-facebook"/>
                  <Socials classNam="twitter itl-tooltip" dataplace="bottom" title="Twitter" href="  $acm->SiteTwitter();  "classnm="fa fa-twitter"/>
                  <Socials classNam="google itl-tooltip" dataplace="bottom" title="Google Plus" href="  $acm->SiteLinkedIn();  " classnm="fa fa-google-plus"/>
                  <Socials classNam="linkdin itl-tooltip" dataplace="bottom" title="Linkedin" href="  $acm->SiteGplus();  " classnm="fa fa-linkedin"/>
                

*/


export default Socials;
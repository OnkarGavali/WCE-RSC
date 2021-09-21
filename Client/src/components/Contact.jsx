import React, { Components, useState } from 'react';
import { ContactBanner } from './Contact/ContactBanner';
import { ContactInfo } from './Contact/ContactInfo';
import { LocateUs } from './Contact/LocateUs';
import Header from './Header';


function Contact ()
{
    return (
        <div>
            <ContactBanner/>
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <div className="row">
                            <div className="col-md-7">
                                <LocateUs/>
                            </div>
                            <div className="col-md-5">
                                <ContactInfo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

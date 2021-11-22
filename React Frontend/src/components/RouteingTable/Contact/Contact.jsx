import React, { Components, useState } from 'react';
import { ContactBanner } from './ContactBanner';
import { ContactInfo } from './ContactInfo';
import { LocateUs } from './LocateUs';
import Header from '../../Header';


function Contact ()
{
    return (
        <div>
            <ContactBanner/>
            <div className="contenti">
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

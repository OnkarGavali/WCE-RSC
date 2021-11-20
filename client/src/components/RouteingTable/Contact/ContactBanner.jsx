import React from 'react'

export const ContactBanner = () => {
    return (
        <div className="page-banner" style={{"padding" :'40px 0', 'background': 'url(images/slide-02-bg.jpg) center #f9f9f9'}}>
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <h2>Contact Us</h2>
                </div>
                <div className="col-md-6">
                    <ul className="breadcrumbs">
                    <li><a href="index.html">Home</a></li>
                    <li>Contact</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

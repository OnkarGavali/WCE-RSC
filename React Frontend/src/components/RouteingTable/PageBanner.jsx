import React from 'react'
import {
    Link
} from "react-router-dom";

 const PageBanner = (props) => {
    return (
        <div className="page-banner" style={{"padding" :'40px 0', 'background': 'url(/images/slide-02-bg.jpg) center #f9f9f9'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>{props.name}</h2>
                        <p>{props.info}</p>
                    </div> 
                    <div className="col-md-6">  
                    {
                        (props.subhead == null)? (
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li>{props.head}</li>
                            </ul>
                        ):(
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li><b>{props.head}</b></li>
                                <li>{props.subhead}</li>
                            </ul>
                        )
                    }    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageBanner;

import React from 'react'
import { CopyRight } from './CopyRight'
import { Flicker } from './Flicker'
import { FooterContact } from './FooterContact'
import { QuickLinks } from './QuickLinks'
import { SocialLinks } from './SocialLinks'
import { Subscribe } from './Subscribe'

export const Footer = () => {
    return (
        <footer>
            {/* <div className="container fixed-top">
                <div style={{"float":' right','margin':'10px'}}>
                    <button  className='btn btn-success btn-sm '>
                    <i className="fa fa-edit"></i>
                    </button>
                </div>
            </div> */}
            <div className="container position-relative">
                
                <div className="row footer-widgets justify-content-md-between">
                 
                    <div className="col-md-3">
                        
                        <SocialLinks/>
                    </div>
                    <QuickLinks/>
                    <Flicker/>
                    <FooterContact />
                    
                </div>
                <CopyRight/>
            </div>
           
        </footer>
    )
}



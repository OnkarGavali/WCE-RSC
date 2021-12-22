import React from 'react'
import { CopyRight } from './CopyRight'
import { Flicker } from './Flicker'
import { FooterContact } from './FooterContact'
import { QuickLinks } from './QuickLinks'
import { SocialLinks } from './SocialLinks'

export const Footer = () => {
    return (
        <footer>
            <div className="container position-relative">
                <div className="row footer-widgets justify-content-md-between">
                    <SocialLinks/>
                    <QuickLinks/>
                    <Flicker/>
                    <FooterContact />
                </div>
                <CopyRight/>
            </div>
        </footer>
    )
}



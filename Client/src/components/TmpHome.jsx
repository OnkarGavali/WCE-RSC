import React, { Components, useState,useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Footer } from './Footer/Footer';
import Contact from './RouteingTable/Contact/Contact';





function TmpHome() {
    
    return (
        <div>
            <Header/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default TmpHome;




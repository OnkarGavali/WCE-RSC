import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import App from '../App'
import About from './RouteingTable/About/About'
import Contact from './RouteingTable/Contact/Contact'
import Gallery from './RouteingTable/Gallery/Gallery'
import Home from './RouteingTable/Home/Home'
import CallForContriBution from '../components/RouteingTable/Authors/CallForContribution';
import PresentationInstructions from '../components/RouteingTable/Authors/PresentationInstructions';
import Submission from '../components/RouteingTable/Authors/Submission';


export default class RoutingTable extends Component {
    render() {
        return (
            <div>
                
                <Switch>
                    <Route path="/contact">
                    <Contact/>
                    </Route>
                    <Route path="/gallery">
                    <Gallery/>
                    </Route>
                    <Route path="/about">
                    <About/>
                    </Route>
                    
                    <Route path="/call-for-contribution">
                  <CallForContriBution/>
                  </Route>
                <Route path="/Presentation-Instructions">
                  <PresentationInstructions/>
                  </Route>  
                  <Route path="/Paper-Submission">
                  <Submission/>
                  </Route>  
                  <Route path="/">
                    <Home/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

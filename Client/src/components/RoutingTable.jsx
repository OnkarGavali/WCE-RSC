import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import App from '../App'
import About from './RouteingTable/About/About'
import Contact from './RouteingTable/Contact/Contact'
import Gallery from './RouteingTable/Gallery/Gallery'
import Home from './RouteingTable/Home/Home'

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
                    <Route path="/">
                    <Home/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

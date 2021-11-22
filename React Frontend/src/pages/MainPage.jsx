import React, { Component } from 'react'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header'
import RoutingTable from '../components/RoutingTable'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RoutingTable/>
                <Footer/>
            </div>
        )
    }
}

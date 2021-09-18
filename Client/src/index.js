import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import About from './components/About';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
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
                  <App/>
                </Route>
                
            </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

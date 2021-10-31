import { event } from 'jquery';
import React, { Component, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageBanner from '../../../PageBanner';









function handlePasswordChange() {
    this.setState({
        //password: e.target.value
    });
}



function EHome() {
    const [state, setState] = useState({
        title: "Title",
        subtitle: "subtitle ",
        para1: "para1 ",
        para2: "para2",
        para3: "para3 "

    });

    const handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = evt=>{
       evt.preventDefault();
        let dataToSend = {
            title: state.title,
            subtitle: state.subtitle,
            para1: state.para1,
            para2: state.para2,
            para3: state.para3


        };
        console.log(JSON.stringify(dataToSend));



    }


    return (
        <div>

            <PageBanner name="Home" head='Admin Panel' />
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-6">

                            <br />
                            <h2 className="classic-title"><span>Edit Home Page </span></h2>


                            <form id='login' accept-charset='UTF-8' onSubmit={handleSubmit}>
                                <input type='hidden' name='submitted' id='submitted' value='1' />

                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>Title : </h3>
                                        <textarea type="text" value={state.title}  placeholder={state.title} name="title" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>Subtitle : </h3>
                                        <textarea type="text" value={state.subtitle}   name="subtitle" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>Para1 : </h3>
                                        <textarea type="text" value={state.para1} rows="5" name="para1" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>Para2 : </h3>
                                        <textarea type="text" value={state.para2} rows="5"   name="para2" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                              
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>Para3 : </h3>
                                        <textarea type="text" value={state.para3} rows="5" name="para3" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>


                                <button type="submit" id="submit" className="btn-system btn-large">Save</button>
                                <br />
                                <br />
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}


export default EHome;

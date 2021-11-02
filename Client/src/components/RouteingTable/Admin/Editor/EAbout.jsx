
import React, {useState } from 'react'

import PageBanner from '../../PageBanner';
import data from '../../../../JSON/about.json'








function handlePasswordChange() {
    this.setState({
        //password: e.target.value
    });
}



function EAbout() {
    const [state, setState] = useState({
        head: data.aboutHead[0].title,
        aboutRSCP1: data.aboutRSC[0].para1,
        aboutRSCP2: data.aboutRSC[0].para2,
        aboutRSCP3: data.aboutRSC[0].para3,
        aboutWCE:data.aboutWCE[0].para1,
        aboutDept:data.aboutDept[0].para1

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
            title: state.title
         


        };
        console.log(JSON.stringify(dataToSend));



    }


    return (
        <div>

            <PageBanner name="About" head='Admin Panel' />
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-6">

                            <br />
                            <h2 className="classic-title"><span>Edit About Page </span></h2>


                            <form id='login' accept-charset='UTF-8' onSubmit={handleSubmit}>
                                <input type='hidden' name='submitted' id='submitted' value='1' />

                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>Title : </h3>
                                        <textarea type="text" value={state.head}   name="head" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>AboutRSC Para 1  : </h3>
                                        <textarea type="text" value={state.aboutRSCP1} rows="6"  name="aboutRSCP1" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>AboutRSC Para 2 : </h3>
                                        <textarea type="text" value={state.aboutRSCP2} rows="6" name="aboutRSCP2" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>AboutRSC Para 3 : </h3>
                                        <textarea type="text" value={state.aboutRSCP3} rows="6"   name="aboutRSCP3" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                              
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>About WCE : </h3>
                                        <textarea type="text" value={state.aboutWCE} rows="6" name="aboutWCE" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 style={{marginBottom:'9px'}}>About Dept : </h3>
                                        <textarea type="text" value={state.aboutDept} rows="6" name="aboutDept" className="email"
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


export default EAbout;

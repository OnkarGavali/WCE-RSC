
import React, {useState } from 'react'

import PageBanner from '../../PageBanner';
import abt from '../../../../JSON/About/about.json'








function handlePasswordChange() {
    this.setState({
        //password: e.target.value
    });
}



function EAbout() {
    const [state, setState] = useState({
       
        RSC: abt.data.aboutRSC,
        WCE: abt.data.aboutWCE,
        Dept: abt.data.aboutDept

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

        let abtToSend = {
           RSC : state.RSC,
           WCE : state.WCE,
           Dept : state.Dept
         


        };
        console.log((abtToSend));



    }


    return (
        <div>

            <PageBanner name="About" head='Admin Panel' />
            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-8">

                            <br />
                            <h2 className="classic-title"><span>Edit About Page </span></h2>


                            <form id='login' accept-charset='UTF-8' onSubmit={handleSubmit}>
                                <input type='hidden' name='submitted' id='submitted' value='1' />

                                
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 className="classic-title"><span> AboutRSC : </span></h3>
                                        <textarea type="text" value={state.RSC} rows="30"  name="aboutRSC" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                
                                
                              
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 className="classic-title" > <span> About WCE : </span></h3>
                                        <textarea type="text" value={state.WCE} rows="15" name="aboutWCE" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <h3 className="classic-title" > <span>About Dept : </span></h3>
                                        <textarea type="text" value={state.Dept} rows="15" name="aboutDept" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'right' }}>
                                <button type="submit" id="submit" className="btn-system btn-large">Update Content</button>
                                </div>
                                
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}


export default EAbout;

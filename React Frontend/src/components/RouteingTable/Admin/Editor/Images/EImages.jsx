
import React, { useState } from 'react'
import data from '../../../../../JSON/Images.json';


function EImages() {

    const [homePage, setHomePage] = useState(data.homePage);
    const [paperSubmissionTemplate, setPaperSubmissionTemplate] = useState(data.paperSubmissionTemplate);
    const [posterSubmission, setPosterSubmission] = useState(data.posterSubmission);
  

    const handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

    }

    const handleSubmit = evt => {
        evt.preventDefault();

        //console.log(JSON.stringify(dataToSend));



    }


    return (
        <div>


            <h2 className="classic-title"><span>Edit Other Images</span></h2>


            <form id='login' acceptCharset='UTF-8' onSubmit={handleSubmit}>
                <input type='hidden' name='submitted' id='submitted' value='1' />


                <div className="form-group col-md-12">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Home Page Published by Image: </h3>
                        <input type="text" value={homePage[0].url} name="email" className="email"
                            required="required" onChange={(e) => setHomePage({...homePage , "url": e.target.value})} style={{}} />
                    </div>
                </div>
                
                <div className="form-group col-md-12">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Home Page Paper Submission Image: </h3>
                        <input type="text" value={homePage[1].url} name="email" className="email"
                            required="required" onChange={(e) => setHomePage({...homePage , "url": e.target.value})} style={{}} />
                    </div>
                </div>
               
                 
                
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="controls">
                            <h3 style={{ marginBottom: '9px' }}>Poster Presentation Page Image : </h3>
                            <input type="text" value={posterSubmission} name="para2" className="email"
                                required="required" onChange={(e) => setPosterSubmission(e.target.value)} style={{}} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="controls">
                            <h3 style={{ marginBottom: '9px' }}>Paper Submission Template Image : </h3>
                            <input type="text" value={paperSubmissionTemplate} name="para2" className="email"
                                required="required" onChange={(e) => setPaperSubmissionTemplate(e.target.value )} style={{}} />
                        </div>
                    </div>
                </div>
                
                

                <div style={{ textAlign: 'right' }}>
                    <button type="submit" id="submit" className="btn-system btn-large">Update Content</button>
                </div>
                <br />
                <br />
            </form>


        </div>

    );

}


export default EImages;

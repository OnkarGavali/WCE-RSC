
import React, {useState } from 'react'
import info from '../../../../../JSON/Authors/paperSubmission.json';

function EPaperSub() {
    const [state, setState] = useState({
       
        para: info.data.paragraph,
        sublink:info.data.submissionLink

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
           paragraph: state.para,
           submissionLink: state.sublink,
            


        };
        console.log(JSON.stringify(dataToSend));



    }


    return (
        <div>

                            
                            <h2 className="classic-title"><span>Edit Paper Submission Page </span></h2>


                            <form id='login' acceptCharset='UTF-8' onSubmit={handleSubmit}>
                                <input type='hidden' name='submitted' id='submitted' value='1' />

                                
                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Paper Submission Info : </span></h2>
                                        <textarea type="text" value={state.para} rows="6"   name="para" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Paper Submission Link : </span></h2>
                                        <textarea type="text" value={state.sublink} rows="3" name="sublink" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                

                                <div  style={{ textAlign: 'right' }}>
                                <button type="submit" id="submit" className="btn-system btn-large">Update Content</button>
                                </div>
                                <br />
                                <br />
                            </form>


                        </div>
        
    );

}


export default EPaperSub;

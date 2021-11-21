
import React, { useState } from 'react'
import data from '../../../../../JSON/Home/HomeBody.json';


function EHome() {
   
    const [title , setTitle] = useState(data.data.title);
    const [subtitle, setSubtitle] = useState(data.data.subtitle);
    const [subHead, setSubHead] = useState(data.data.subhead);
    const [info, setInfo] = useState(data.data.info);
    const [links, setLinks] = useState(data.data.links);

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


            <h2 className="classic-title"><span>Edit Home Page </span></h2>


            <form id='login' acceptCharset='UTF-8' onSubmit={handleSubmit}>
                <input type='hidden' name='submitted' id='submitted' value='1' />

               
                <div className="form-group">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Subhead : </h3>
                        <textarea type="text" value={subHead} name="subtitle" className="email"
                            required="required" onChange={(e) => setSubHead(e.target.value)} style={{}} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Para1 : </h3>
                        <textarea type="text" value={info.para1} rows="5" name="para1" className="email"
                            required="required" onChange={(e) => setInfo({ ...info, "para1": e.target.value })} style={{}} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Para2 : </h3>
                        <textarea type="text" value={info.para2} rows="5" name="para2" className="email"
                            required="required" onChange={(e) => setInfo({ ...info, "para2": e.target.value })} style={{}} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Para3 : </h3>
                        <textarea type="text" value={info.para3} rows="5" name="para3" className="email"
                            required="required" onChange={(e) => setInfo({ ...info, "para3": e.target.value })} style={{}} />
                    </div>
                </div>
                <div className="controls">
                    <h3 style={{ marginBottom: '9px' }}>Submission Link : </h3>
                    <textarea type="text" value={links.paperSubmission}  name="regLink" className="email"
                        required="required" onChange={(e)=>setLinks({...links,"paperSubmission":e.target.value})} style={{}} />
                </div>
                <div className="controls">
                    <h3 style={{ marginBottom: '9px' }}>Publication by Link : </h3>
                    <textarea type="text" value={links.publication}  name="regLink" className="email"
                        required="required" onChange={(e)=>setLinks({...links,"publication":e.target.value})} style={{}} />
                </div>
                <div className="controls">
                    <h3 style={{ marginBottom: '9px' }}>Supported by Link : </h3>
                    <textarea type="text" value={links.support}  name="regLink" className="email"
                        required="required" onChange={(e)=>setLinks({...links,"support":e.target.value})} style={{}} />
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


export default EHome;

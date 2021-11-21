
import React, { useState } from 'react'
import data from '../../../../../JSON/Header.json';


function EHeader() {
   
    const [title , setTitle] = useState(data.title);
    const [subtitle, setSubtitle] = useState(data.subtitle);
   

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


            <h2 className="classic-title"><span>Edit Header</span></h2>


            <form id='login' acceptCharset='UTF-8' onSubmit={handleSubmit}>
                <input type='hidden' name='submitted' id='submitted' value='1' />

                <div className="form-group">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Title : </h3>
                        <textarea type="text" value={title}  name="title" className="email"
                            required="required" onChange={(e) => setTitle(e.target.value)}style={{}} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Subtitle : </h3>
                        <textarea type="text" value={subtitle}  name="subtitle" className="email"
                            required="required" onChange={(e) => setSubtitle(e.target.value)}style={{}} />
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


export default EHeader;

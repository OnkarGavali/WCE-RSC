
import React, { useState } from 'react'
import data from '../../../../../JSON/Contact/Contact.json';


function EContact() {

    const [email, setEmail] = useState(data.email);
    const [website, setWebsite] = useState(data.website);
    const [contact, setContact] = useState(data.contact);
    const [socialLinks, setSocialLinks] = useState(data.socialLinks);

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


            <h2 className="classic-title"><span>Edit Contanct Info</span></h2>


            <form id='login' acceptCharset='UTF-8' onSubmit={handleSubmit}>
                <input type='hidden' name='submitted' id='submitted' value='1' />


                <div className="form-group col-md-12">
                    <div className="controls">
                        <h3 style={{ marginBottom: '9px' }}>Email : </h3>
                        <textarea type="text" value={email} name="email" className="email"
                            required="required" onChange={(e) => setEmail(e.target.value)} style={{}} />
                    </div>
                </div>
               
                    <div className="form-group col-md-12">
                        <div className="controls">
                            <h3 style={{ marginBottom: '9px' }}>Website : </h3>
                            <textarea type="text" value={website} name="para1" className="email"
                                required="required" onChange={(e) => setWebsite(e.target.value)} style={{maxWidth:'100%'}} />
                        </div>
                    </div>
                
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="controls">
                            <h3 style={{ marginBottom: '9px' }}>Name : </h3>
                            <input type="text" value={contact[0].name} name="para2" className="email"
                                required="required" onChange={(e) => setContact({ ...contact, "name": e.target.value })} style={{}} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="controls">
                            <h3 style={{ marginBottom: '9px' }}>Contact no : </h3>
                            <input type="text" value={contact[0].mobileNumber} name="para2" className="email"
                                required="required" onChange={(e) => setContact({ ...contact, "Contact no ": e.target.value })} style={{}} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="controls">
                            <h3 style={{ marginBottom: '9px' }}>Name : </h3>
                            <input type="text" value={contact[1].name} name="para2" className="email"
                                required="required" onChange={(e) => setContact({ ...contact, "name": e.target.value })} style={{}} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="controls">
                            <h3 style={{ marginBottom: '9px' }}>Contact no : </h3>
                            <input type="text" value={contact[1].mobileNumber} name="para2" className="email"
                                required="required" onChange={(e) => setContact({ ...contact, "Contact no ": e.target.value })} style={{}} />
                        </div>
                    </div>
                </div>
                 
               
                <div className="controls col-md-6">
                    <h3 style={{ marginBottom: '9px' }}>Facebook Link : </h3>
                    <input type="text" value={socialLinks[0].link} name="regLink" className="email"
                        required="required" onChange={(e) => setSocialLinks({ ...socialLinks, "link": e.target.value })} style={{}} />
                </div>
                
                <div className="controls col-md-6">
                    <h3 style={{ marginBottom: '9px' }}>LinkedIn Link : </h3>
                    <input type="text" value={socialLinks[1].link} name="regLink" className="email"
                        required="required" onChange={(e) => setSocialLinks({ ...socialLinks, "LinkedIn": e.target.value })} style={{}} />
                </div>
                
                <div className="controls col-md-6">
                    <h3 style={{ marginBottom: '9px' }}>Twitter Link : </h3>
                    <input type="text" value={socialLinks[2].link} name="regLink" className="email"
                        required="required" onChange={(e) => setSocialLinks({ ...socialLinks, "Facebook": e.target.value })} style={{}} />
                </div>
                
                <div className="controls col-md-6">
                    <h3 style={{ marginBottom: '9px' }}>Instagram Link : </h3>
                    <input type="text" value={socialLinks[3].link} name="regLink" className="email"
                        required="required" onChange={(e) => setSocialLinks({ ...socialLinks, "Facebook": e.target.value })} style={{}} />
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


export default EContact;

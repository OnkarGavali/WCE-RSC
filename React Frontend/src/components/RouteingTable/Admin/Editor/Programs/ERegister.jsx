import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";


import { NoticeBoard } from "../../NoticeBoard";
import axios from "axios";




const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    className="email"
                    type="text"
                    required="required"
                    placeholder="Enter Registration Type"
                    name="type"
                    style={{ width: '80%' }}
                    value={editFormData.type}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="email"
                    type="text"
                    required="required"
                    placeholder="Enter Registration Fees"
                    name="fees"
                    style={{ width: '80%' }}
                    value={editFormData.fees}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    className="email"
                    type="text"
                    placeholder="Enter Registration Fees"
                    name="late"
                    style={{ width: '80%' }}
                    value={editFormData.late}
                    onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <button type="submit" className="btn btn-success" >Save</button>
                <button type="button" onClick={handleCancelClick} style={{ marginLeft: '4%' }} className="btn btn-secondary" >
                    Cancel
                </button>
            </td>
        </tr>
    );
};

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.type}</td>
            <td>{contact.fees}</td>
            <td>{contact.late}</td>

            <td>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-secondary"
                    type="button" onClick={() => handleDeleteClick(contact._id)} style={{ marginLeft: '4%' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};


const ERegister = () => {
    

    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayNotice, setDisplayNotice] = useState(false);
    const [displayNoticeHead, setDisplayNoticeHead] = useState('');
    const [displayNoticeContent, setDisplayNoticeContent] = useState('')
    const [maintenanceBreak, setMaintenanceBreak] = useState(false);
    const [maintenanceBreakHead, setMaintenanceBreakHead] = useState('');
    const [maintenanceBreakContent, setMaintenanceBreakContent] = useState('');
    const [finalData, setFinalData] = useState(null);
    const [finalMessage, setFinalMessage] = useState("");

    const [addFormData, setAddFormData] = useState({
        type: "",
        fees: "",
        late: ""
    });

    const [editFormData, setEditFormData] = useState({
        type: "",
        fees: "",
        late: ""
    });

    const [editContactId, setEditContactId] = useState(null);


    const [note, setNote] = useState(null);
    const [regitrationFees, setRegitrationFees] = useState(null);
    const [feeWaiver, setFeeWaiver] = useState(null)
    const [feeWaiverNotice, setFeeWaiverNotice] = useState(null)
    const [bankDetails, setBankDetails] = useState(null)
    const [regitrationFormLink, setRegitrationFormLink] = useState(null)

    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/registration"
            ).then((response)=>{
                if(response.data[0]){
                    setAllData(response.data[0]);
                }
               setIsLoading(false);
            }).catch((e)=>{
             /* HANDLE THE ERROR (e) */
                console.log(e);
                setIsLoading(false);
            });
        };
        getData();
        setIsLoading(false);
    },[])


    useEffect(() => {
        if(!isLoading){
            setDisplayNotice(allData.displayNoticeStatus)
            setDisplayNoticeHead(allData.displayNoticeHeading)
            setDisplayNoticeContent(allData.displayNoticeContent)
            setMaintenanceBreak(allData.maintenanceBreakStatus)
            setMaintenanceBreakHead(allData.maintenanceBreakHeading)
            setMaintenanceBreakContent(allData.maintenanceBreakContent)
            if(allData.data){
              setNote(allData.data.note)
              setRegitrationFees(allData.data.regitrationFees)
              setFeeWaiver(allData.data.feeWaiver)
              setFeeWaiverNotice(allData.data.feeWaiverNotice)
              setBankDetails(allData.data.bankDetails)
              setRegitrationFormLink(allData.data.regitrationFormLink)
            }      
        }
    }, [allData])

    useEffect(() => {
    }, [note])

    useEffect(() => {
        if(finalData){
            uploadContent()
        }
    }, [finalData])


    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            _id: nanoid(),
            type: addFormData.type,
            fees: addFormData.fees,
            late: addFormData.late
        };
        setAddFormData({
            type: "",
            fees: "",
            late: ""
        })
        const newContacts = [...regitrationFees, newContact];
        setRegitrationFees(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            _id: editContactId,
            type: editFormData.type,
            fees: editFormData.fees,
            late: editFormData.late
        };

        const newContacts = [...regitrationFees];

        const index = regitrationFees.findIndex((contact) => contact._id === editContactId);

        newContacts[index] = editedContact;

        setRegitrationFees(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact._id);

        const formValues = {
            type: contact.type,
            fees: contact.fees,
            late: contact.late
        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        endFormater()
    }
    // const handleChange = evt => {
    //     const name = evt.target.name;
    //     const value = evt.target.value;
    //     setState({
    //         ...state,
    //         [name]: value
    //     })
    // }
    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...regitrationFees];

        const index = regitrationFees.findIndex((contact) => contact._id === contactId);

        newContacts.splice(index, 1);

        setRegitrationFees(newContacts);
    };

    const handlefeeWaiverChange = (_id,value) => {
        const newlist = []
        feeWaiver.map((li) => {
            if(li._id==_id){
                newlist.push({_id:li._id,"text":li.text,"link":value})
            } else {
                newlist.push({_id:li._id,"text":li.text,"link":li.link})
            }
        })
        setFeeWaiver(newlist)
    }

    const endFormater = () => {
        const list = []
        var i=0;
        regitrationFees.map((li)=>{
            list.push({"id":i,"type":li.type,"fees":li.fees,'late':li.late});
            i=i+1;
        });
           
        
        const final = {
            "displayNoticeStatus":displayNotice,
            "displayNoticeHeading":displayNoticeHead,
            "displayNoticeContent":displayNoticeContent,
            "maintenanceBreakStatus":maintenanceBreak,
            "maintenanceBreakHeading":maintenanceBreakHead,
            "maintenanceBreakContent":maintenanceBreakContent,
            "data":{
               "note":note,
                "regitrationFees":list,
                "feeWaiver":feeWaiver,
                "feeWaiverNotice":feeWaiverNotice,
                "bankDetails":bankDetails,
                "regitrationFormLink":regitrationFormLink
            }
        }
        setFinalData(final)
    }



    const uploadContent = () => {
        const headers = { 
            'x-access-token': localStorage.getItem("x-access-token")
        };
        axios.put('put/registration/618651d544dc3852c0a1adc3', finalData, { headers })
            .then(response => console.log(response));
    }

    return (
        <div>
            {
                isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <React.Fragment>
                        
                        <h2 className="classic-title"><span>Edit Registration Note </span></h2>
                        <form acceptCharset='UTF-8' >
                            <input type='hidden' name='submitted' id='submitted' value='1' />
                            {
                                note ? (
                                    <div className="form-group">
                                        <div className="controls">
                                            <textarea type="text" value={note} rows="9" name="registerNote" className="email"
                                                required="required" onChange={(e)=>setNote(e.target.value)}/>
                                        </div>
                                    </div>
                                ) : null
                            }
                            
                        </form>

                        <h2 className="classic-title"><span>Edit Registration Fee Details </span></h2>
                        <div className="app-container">
                            <form onSubmit={handleEditFormSubmit}>
                                <table className="table table-responsive table-condensed table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Registration Type</th>
                                            <th>Registeration Fees</th>
                                            <th>Late Registeration Fees</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { regitrationFees && regitrationFees.map((contact) => (
                                            <Fragment key={contact._id}>
                                                {editContactId === contact._id ? (
                                                    <EditableRow
                                                        editFormData={editFormData}
                                                        handleEditFormChange={handleEditFormChange}
                                                        handleCancelClick={handleCancelClick}
                                                    />
                                                ) : (
                                                    <ReadOnlyRow
                                                        contact={contact}
                                                        handleEditClick={handleEditClick}
                                                        handleDeleteClick={handleDeleteClick}
                                                    />
                                                )}
                                            </Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </form>
                            <br />
                            <h2 className="classic-title"><span>Add a New Entry </span></h2>
                            <br />
                            <form onSubmit={handleAddFormSubmit} style={{ justifyContent: 'space-between' }}>

                                <input
                                    className="email"
                                    style={{ maxWidth: '60%' }}
                                    type="text"
                                    name="type"
                                    value={addFormData.type}
                                    required="required"
                                    placeholder="Enter a Registration Type"
                                    onChange={handleAddFormChange}
                                />

                                <input
                                    className="email"
                                    style={{ maxWidth: '60%' }}
                                    type="text"
                                    name="fees"
                                    value={addFormData.fees}
                                    placeholder="Enter Registration Fees"
                                    onChange={handleAddFormChange}
                                />

                                <input
                                    className="email"
                                    style={{ maxWidth: '60%' }}
                                    type="text"
                                    name="late"
                                    value={addFormData.late}
                                    placeholder="Enter a Late Registration Fees"
                                    onChange={handleAddFormChange}
                                />

                                <div className=" " style={{ textAlign: 'center', maxWidth: '60%' }}>
                                    <button type="submit" className="btn btn-primary">Add</button>
                                </div>

                            </form>

                            <h2 className="classic-title" style={{ marginTop: '10%' }}><span>Edit Fee Waiver Info  </span></h2>
                            {
                                feeWaiver ? (
                                    <form acceptCharset='UTF-8' >
                                        <input type='hidden' name='submitted' id='submitted' value='1' />

                                        <div className="form-group">
                                            <div className="controls">
                                                {
                                                    feeWaiver.map((obj)=>(<React.Fragment key={obj._id}>
                                                        <h4>{obj.text} : </h4>
                                                        <textarea type="text" value={obj.link} rows="2"  className="email"
                                                            onChange={(e)=>handlefeeWaiverChange(obj._id,e.target.value)} style={{ maxWidth: '100%', marginTop: '1%' }} />
                                                        </React.Fragment>
                                                
                                                    ))
                                                }

                                                <h4>Fee Waiver Notice : </h4>
                                                {
                                                    feeWaiverNotice ? (
                                                        <textarea type="text" value={feeWaiverNotice} rows="2" name="feeWaivernote" className="email"
                                                            required="required" onChange={(e)=>setFeeWaiverNotice(e.target.value)} style={{ maxWidth: '100%', marginTop: '1%' }} />
                                                    ) : null
                                                }
                                                
                                            </div>
                                        </div>
                                    </form>
                                ) : null
                            }
                            
                            <h2 className="classic-title" style={{ marginTop: '10%' }}><span>Edit Bank Account Details  </span></h2>
                            {
                                bankDetails ? (
                                    <form acceptCharset='UTF-8' >
                                        <input type='hidden' name='submitted' id='submitted' value='1' />
                                        <div className="form-group">
                                            <div className="controls">
                                                <table className="table table-responsive table-condensed table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Account Number
                                                            </td>
                                                            <td>
                                                                <textarea type="text" value={bankDetails.accountNo} rows="2" name="bankACno" className="email"
                                                                    required="required" onChange={(e) => setBankDetails({...bankDetails,"accountNo":e.target.value})} style={{ maxWidth: '', marginTop: '1%' }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Account Name
                                                            </td>
                                                            <td>
                                                                <textarea type="text" value={bankDetails.accountName} rows="2" name="bankACname" className="email"
                                                                    required="required" onChange={(e) => setBankDetails({...bankDetails,"accountName":e.target.value})} style={{ maxWidth: '100%', marginTop: '1%' }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Bank Name
                                                            </td>
                                                            <td>
                                                                <textarea type="text" value={bankDetails.nameOfBank} rows="2" name="bankName" className="email"
                                                                    required="required" onChange={(e) => setBankDetails({...bankDetails,"nameOfBank":e.target.value})} style={{ maxWidth: '100%', marginTop: '1%' }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                IFSC
                                                            </td>
                                                            <td>
                                                                <textarea type="text" value={bankDetails.IFSCCode} rows="2" name="ifsc" className="email"
                                                                    required="required" onChange={(e) => setBankDetails({...bankDetails,"IFSCCode":e.target.value})} style={{ maxWidth: '100%', marginTop: '1%' }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                MICR Code
                                                            </td>
                                                            <td>
                                                                <textarea type="text" value={bankDetails.MICRCode} rows="2" name="micr" className="email"
                                                                    required="required" onChange={(e) => setBankDetails({...bankDetails,"MICRCode":e.target.value})} style={{ maxWidth: '100%', marginTop: '1%' }} />

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Branch Code
                                                            </td>
                                                            <td>
                                                                <textarea type="text" value={bankDetails.branchCode} rows="2" name="branchCode" className="email"
                                                                    required="required" onChange={(e) => setBankDetails({...bankDetails,"branchCode":e.target.value})} style={{ maxWidth: '100%', marginTop: '1%' }} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </form>
                                ) : null
                            }
                            <h2 className="classic-title" style={{ marginTop: '10%' }}><span>Edit Regitration Form Link</span></h2>
                            <textarea type="text" value={regitrationFormLink} rows="2" className="email"
                                required="required" onChange={(e)=>setRegitrationFormLink(e.target.value)} style={{ maxWidth: '100%', marginTop: '1%' }} placeholder="Enter Regitration form Link"/>

                            <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                            
                            <NoticeBoard title={'Display Notice'} titleMessage={'Notice is : '} noticeState={displayNotice} noticeStateChange={setDisplayNotice} noticeHead={displayNoticeHead} noticeHeadChange={setDisplayNoticeHead} noticeContent={displayNoticeContent} noticeContentChange={setDisplayNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                            <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState={maintenanceBreak} noticeStateChange={setMaintenanceBreak} noticeHead={maintenanceBreakHead} noticeHeadChange={setMaintenanceBreakHead} noticeContent={maintenanceBreakContent} noticeContentChange={setMaintenanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />

                            <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                            
                            <div className=" " style={{ textAlign: 'right' }}>
                                <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                            </div>

                        </div>
                    </React.Fragment>
                )
            }
        </div>
    );
};

export default ERegister;

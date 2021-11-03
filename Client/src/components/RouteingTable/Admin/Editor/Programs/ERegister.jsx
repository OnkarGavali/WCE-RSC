import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";

import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import info from "../../../../../JSON/Programs/registration.json";
import { NoticeBoard } from "../../NoticeBoard";
//import ReadOnlyRow from "./components/ReadOnlyRow";
//import EditableRow from "./components/EditableRow";

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
                ></input>

            </td>
            <td>

                <input
                    className="email"
                    type="text"
                    required="required"
                    placeholder="Enter Registration Fees"
                    name="late"
                    style={{ width: '80%' }}
                    value={editFormData.late}
                    onChange={handleEditFormChange}
                ></input>
            </td>


            <td>
                <button type="submit" class="btn btn-success" >Save</button>
                <button type="button" onClick={handleCancelClick} style={{ marginLeft: '4%' }} class="btn btn-secondary" >
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
                    class="btn btn-primary"
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button
                    class="btn btn-secondary"
                    type="button" onClick={() => handleDeleteClick(contact.id)} style={{ marginLeft: '4%' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};


const ERegister = () => {
    const [contacts, setContacts] = useState(info.data.regitrationFees);
    const [state, setState] = useState({
        registerNote: info.data.note,
        feeWaiverUg: info.data.feeWaiver[0].link,
        feeWaiverMtech: info.data.feeWaiver[1].link,
        feeWaiverPhd: info.data.feeWaiver[2].link,
        feeWaivernote: info.data.feeWaiverNotice,
        bankACno: info.data.bankDetails.accountNo,
        bankACname: info.data.bankDetails.accountName,
        bankName: info.data.bankDetails.nameOfBank,
        branchCode: info.data.bankDetails.branchCode,
        ifsc: info.data.bankDetails.IFSCCode,
        micr: info.data.bankDetails.MICRCode

    });
    const [displayNotice, setdisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');

    const [addFormData, setAddFormData] = useState({
        type: " ",
        fees: " ",
        late: " "

    });

    const [editFormData, setEditFormData] = useState({
        type: " ",
        fees: " ",
        late: " "


    });

    const [editContactId, setEditContactId] = useState(null);

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
            id: nanoid(),
            type: addFormData.type,
            fees: addFormData.fees,
            late: addFormData.late

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            type: editFormData.type,
            fees: editFormData.fees,
            late: editFormData.late


        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            type: contact.type,
            fees: contact.fees,
            late: contact.late
        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let datatoSend = {
            note: state.registerNote,
            regitrationFees: contacts,
            feeWaiver: {
                feeWaiverUg: state.feeWaiverUg,
                feeWaiverMtech: state.feeWaiverMtech,
                feeWaiverPhd: state.feeWaiverPhd,
                feeWaivernote: state.feeWaivernote
            },
            bankDetails: {
                bankACno: state.bankACno,
                bankACname: state.bankACname,
                bankName: state.bankName,

                ifsc: state.ifsc,
                micr: state.micr,
                branchCode: state.branchCode,
            }
        }
        console.log(datatoSend);

    }
    const handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState({
            ...state,
            [name]: value
        })
    }
    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        <div>
            <h2 className="classic-title" style={{}}><span>Edit Registration Note  </span></h2>

            <form acceptCharset='UTF-8' >
                <input type='hidden' name='submitted' id='submitted' value='1' />

                <div className="form-group">
                    <div className="controls">

                        <textarea type="text" value={state.registerNote} rows="9" name="registerNote" className="email"
                            required="required" onChange={handleChange} style={{}} />
                    </div>
                </div>
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
                            {contacts.map((contact) => (
                                <Fragment>
                                    {editContactId === contact.id ? (
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
                        required="required"
                        placeholder="Enter a Registration Type"
                        onChange={handleAddFormChange}
                    />

                    <input
                        className="email"
                        style={{ maxWidth: '60%' }}
                        type="text"
                        name="fees"
                        required="required"
                        placeholder="Enter Registration Fees"
                        onChange={handleAddFormChange}
                    />

                    <input
                        className="email"
                        style={{ maxWidth: '60%' }}
                        type="text"
                        name="late"

                        placeholder="Enter a Late Registration Fees"
                        onChange={handleAddFormChange}
                    />

                    <div className=" " style={{ textAlign: 'center', maxWidth: '60%' }}>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>

                </form>

                <h2 className="classic-title" style={{ marginTop: '10%' }}><span>Edit Fee Waiver Info  </span></h2>

                <form acceptCharset='UTF-8' >
                    <input type='hidden' name='submitted' id='submitted' value='1' />

                    <div className="form-group">
                        <div className="controls">

                            <h4>Google Drive folder for UG : </h4>
                            <textarea type="text" value={state.feeWaiverUg} rows="2" name="feeWaiverUg" className="email"
                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />

                            <h4>Google Drive folder for MTech : </h4>
                            <textarea type="text" value={state.feeWaiverMtech} rows="2" name="feeWaiverMtech" className="email"
                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />

                            <h4>Google Drive folder for Phd : </h4>
                            <textarea type="text" value={state.feeWaiverPhd} rows="2" name="feeWaiverUgPhd" className="email"
                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />

                            <h4>Fee Waiver Notice : </h4>
                            <textarea type="text" value={state.feeWaivernote} rows="2" name="feeWaivernote" className="email"
                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />
                        </div>
                    </div>
                </form>


                <h2 className="classic-title" style={{ marginTop: '10%' }}><span>Edit Bank Account Details  </span></h2>
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
                                            <textarea type="text" value={state.bankACno} rows="2" name="bankACno" className="email"
                                                required="required" onChange={handleChange} style={{ maxWidth: '', marginTop: '1%' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Account Name
                                        </td>
                                        <td>

                                            <textarea type="text" value={state.bankACname} rows="2" name="bankACname" className="email"
                                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Bank Name
                                        </td>
                                        <td>
                                            <textarea type="text" value={state.bankName} rows="2" name="bankName" className="email"
                                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            IFSC
                                        </td>
                                        <td>
                                            <textarea type="text" value={state.ifsc} rows="2" name="ifsc" className="email"
                                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            MICR Code
                                        </td>
                                        <td>
                                            <textarea type="text" value={state.micr} rows="2" name="micr" className="email"
                                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Branch Code
                                        </td>
                                        <td>
                                            <textarea type="text" value={state.branchCode} rows="2" name="branchCode" className="email"
                                                required="required" onChange={handleChange} style={{ maxWidth: '100%', marginTop: '1%' }} />

                                        </td>
                                    </tr>









                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>







                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                <NoticeBoard title={'Display Notice'} titleMessage={'Notice is : '} noticeState={displayNotice} noticeStateChange={setdisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />



                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                <div className=" " style={{ textAlign: 'right' }}>
                    <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                </div>
            </div>


        </div>


    );
};

export default ERegister;

import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";

import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import info from "../../../../../JSON/Authors/date.json";
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
                    placeholder="Enter Date"
                    name="impDate"
                    style={{ width: '80%' }}
                    value={editFormData.impDate}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>

                <input
                    className="email"
                    type="text"
                    required="required"
                    placeholder="Enter Details"
                    name="details"
                    style={{ width: '80%' }}
                    value={editFormData.details}
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
            <td>{contact.impDate}</td>
            <td>{contact.details}</td>

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


const EImpDates = () => {
    const [contacts, setContacts] = useState(info.data.dates);
    const [displayNotice, setdisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');

    const [addFormData, setAddFormData] = useState({
        impDate: " ",
        details: " "


    });

    const [editFormData, setEditFormData] = useState({
        impDate: " ",
        details: " "


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
            impDate: addFormData.impDate,
            details: addFormData.details

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            impDate: editFormData.impDate,
            details: editFormData.details


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
            impDate: contact.impDate,
            details: contact.details
        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let datatoSend = {
            dates:contacts
        }
        console.log(datatoSend);

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
         
                            <h2 className="classic-title"><span>Edit Important Dates </span></h2>
                            <div className="app-container">
                                <form onSubmit={handleEditFormSubmit}>
                                    <table className="table table-responsive table-condensed table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Details</th>
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
                                <form onSubmit={handleAddFormSubmit} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="col-md-4">
                                        <input
                                            className="email"
                                            style={{ maxWidth: '100%' }}
                                            type="text"
                                            name="impDate"
                                            required="required"
                                            placeholder="Enter a Date"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            className="email"
                                            style={{ maxWidth: '100%' }}
                                            type="text"
                                            name="details"
                                            required="required"
                                            placeholder="Enter Details"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className=" " style={{}}>
                                        <button type="submit" class="btn btn-primary">Add</button>
                                    </div>

                                </form>

                                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                                <NoticeBoard title={'Display Notice'} titleMessage={'Notice is : '} noticeState ={displayNotice} noticeStateChange={setdisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                                <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState ={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />           
                               
                                
                            
                            <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                            <div className=" " style={{ textAlign: 'right' }}>
                                <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                            </div>
                        </div>


                    </div>
         

    );
};

export default EImpDates;

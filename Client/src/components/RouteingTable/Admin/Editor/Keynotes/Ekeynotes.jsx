import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";

import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import data from "../../../../../JSON/Keynote.json";
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
                    placeholder="Enter Name"
                    name="name"
                    style={{ width: '80%' }}
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>

                <input
                    className="email"
                    type="text"
                    required="required"
                    placeholder="Enter Designation"
                    name="designation"
                    style={{ width: '80%' }}
                    value={editFormData.designation}
                    onChange={handleEditFormChange}
                ></input>

            </td>


            <td>
                <button type="submit" class="btn btn-success" >Save</button>
                <button type="button" onClick={handleCancelClick} style={{ marginTop: '4%' }} class="btn btn-secondary" >
                    Cancel
                </button>
            </td>
        </tr>

    );
};

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.designation}</td>

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
                    type="button" onClick={() => handleDeleteClick(contact.id)} style={{ marginTop: '4%' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};


const Ekeynotes = () => {
    const [contacts, setContacts] = useState(data.Speakers);
    const [displayNotice, setdisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');

    const [addFormData, setAddFormData] = useState({
        name: " ",
        designation: " "


    });

    const [editFormData, setEditFormData] = useState({
        name: " ",
        designation: " "


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
            name: addFormData.name,
            designation: addFormData.designation

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            name: editFormData.name,
            designation: editFormData.designation


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
            name: contact.name,
            designation: contact.designation
        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contacts);

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
         
                            <h2 className="classic-title"><span>Edit Keynote Speakers </span></h2>
                            <div className="app-container">
                                <form onSubmit={handleEditFormSubmit}>
                                    <table className="table table-responsive table-condensed table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
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
                                            name="name"
                                            required="required"
                                            placeholder="Enter a Name"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            className="email"
                                            style={{ maxWidth: '100%' }}
                                            type="text"
                                            name="designation"
                                            required="required"
                                            placeholder="Enter Designation"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className=" " style={{}}>
                                        <button type="submit" class="btn btn-primary">Add</button>
                                    </div>

                                </form>

                                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                                <h2 className="classic-title"><span>Display Notice </span></h2>



                                <span >Toggel Page to be displayed : {displayNotice ? "Yes" : "No"} </span>
                                <br />
                                <br />
                                <form onSubmit={handleAddFormSubmit} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="col-md-4">
                                        <input
                                            className="email"
                                            style={{ maxWidth: '100%' }}
                                            type="text"
                                            name="noticehead"
                                            required="required"
                                            placeholder="Enter a Notice Heading"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <textarea
                                            className="email"
                                            style={{ maxWidth: '100%' }}
                                            type="text"
                                            row="3"
                                            name="noticecontent"
                                            required="required"
                                            placeholder="Enter Notice Content"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className=" " style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Toggle
                                            id='dn'
                                            defaultChecked={displayNotice}
                                            aria-labelledby='biscuit-label'

                                            onChange={() => {
                                                setdisplayNotice(!displayNotice)
                                            }} />
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>

                                </form>
                                 <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState ={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />           
                                <h2 className="classic-title"><span>Maintainance Break </span></h2>



                                <span >Toggel Page to be displayed : {maintainanceBreak ? "Yes" : "No"} </span>
                                <br />
                                <br />
                                <form onSubmit={handleAddFormSubmit} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="col-md-4">
                                        <input
                                            className="email"
                                            style={{ maxWidth: '100%' }}
                                            type="text"
                                            name="noticehead"
                                            required="required"
                                            placeholder="Enter a Notice Heading"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <textarea
                                            className="email"
                                            style={{ maxWidth: '100%' }}
                                            type="text"
                                            row="3"
                                            name="noticecontent"
                                            required="required"
                                            placeholder="Enter Notice Content"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className=" " style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Toggle
                                            id='dn'
                                            defaultChecked={maintainanceBreak}
                                            aria-labelledby='biscuit-label'

                                            onChange={() => {
                                                setMaintainanceBreak(!maintainanceBreak)
                                            }} />
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>

                                </form>
                                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                                
                            
                            <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                            <div className=" " style={{ textAlign: 'right' }}>
                                <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                            </div>
                        </div>


                    </div>
         

    );
};

export default Ekeynotes;

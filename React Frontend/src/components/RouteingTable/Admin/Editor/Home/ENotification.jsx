import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";

import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import info from "../../../../../JSON/Home/Notification.json";
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
                    text="text"
                    required="required"
                    placeholder="Enter Notification Text"
                    rows="3"
                    name="text"
                    style={{ width: '' }}
                    value={editFormData.text}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>

                <input
                    className="email"
                    text="text"
                    required="required"
                    placeholder="Enter  Notification link"
                    name="link"
                    style={{ width: '' }}
                    value={editFormData.link}
                    onChange={handleEditFormChange}
                ></input>

            </td>
            <td>

                <input
                    className="email"
                    text="text"
                    required="required"
                    placeholder="Is New Notification (true/false)*Case Sensitive"
                    name="new"
                    style={{ width: '' }}
                    value={editFormData.new}
                    onChange={handleEditFormChange}
                ></input>
            </td>


            <td>
                <button text="submit" class="btn btn-success" >Save</button>
                <button text="button" onClick={handleCancelClick} style={{ marginLeft: '4%' }} class="btn btn-secondary" >
                    Cancel
                </button>
            </td>
        </tr>

    );
};

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.text}</td>
            <td>{contact.link}</td>
            <td>{contact.new}</td>

            <td>
                <button
                    class="btn btn-primary"
                    text="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button
                    class="btn btn-secondary"
                    text="button" onClick={() => handleDeleteClick(contact.id)} style={{ marginLeft: '4%' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};


const ENotification = () => {
    const [contacts, setContacts] = useState(info.data);
   
    const [addFormData, setAddFormData] = useState({
        text: " ",
        link: " ",
        new: " "

    });

    const [editFormData, setEditFormData] = useState({
        text: " ",
        link: " ",
        new: " "


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
            text: addFormData.text,
            link: addFormData.link,
            new: addFormData.new

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            text: editFormData.text,
            link: editFormData.link,
            new: editFormData.new


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
            text: contact.text,
            link: contact.link,
            new: contact.new
        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let datatoSend = {
           
            regitrationlink: contacts,
           
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
            <h2 className="classic-title" style={{}}><span>Edit Notification</span></h2>

            
         
            <div className="app-container">
                <form onSubmit={handleEditFormSubmit}>
                    <table className="table table-responsive table-condensed table-bordered">
                        <thead>
                            <tr>
                                <th>Notification text</th>
                                <th>Notification link</th>
                                <th>Is New</th>
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
                <form onSubmit={handleAddFormSubmit} style={{ justifyContent: 'space-between' }}>

                    <input
                        className="email"
                        style={{ maxWidth: '' }}
                        type="text"
                        name="text"
                        required="required"
                        placeholder="Enter Notification text"
                        onChange={handleAddFormChange}
                    />

                    <input
                        className="email"
                        style={{ maxWidth: '' }}
                        type="text"
                        name="link"
                        required="required"
                        placeholder="Enter Notification link"
                        onChange={handleAddFormChange}
                    />

                    <input
                        className="email"
                        style={{ maxWidth: '' }}
                        type="text"
                        name="new"

                        placeholder="Is New Notification (true/false) *Case Sensitive"
                        onChange={handleAddFormChange}
                    />

                    <div className=" " style={{ textAlign: 'center', maxWidth: '' }}>
                        <button text="submit" class="btn btn-primary">Add</button>
                    </div>
                    </form>
                <br />
                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
               
                <div className=" " style={{ textAlign: 'right' }}>
                    <button text="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                </div>


                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
               
            </div>


        </div>


    );
};

export default ENotification;

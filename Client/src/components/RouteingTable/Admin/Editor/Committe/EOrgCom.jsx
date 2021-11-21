import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import PageBanner from "../../../PageBanner";
import data from "../../../../../JSON/org_com.json";
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
                    name="role"
                    value={editFormData.role}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="email"
                    type="text"
                    required="required"
                    placeholder="Enter Name"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="email"
                    type="text"
                    required="required"
                    placeholder="Enter Name"
                    name="designation"
                    value={editFormData.designation}
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

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick, convertedJSON }) => {
    return (
        <tr>
            <td>{contact.role}</td>
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
                    type="button" onClick={() => handleDeleteClick(contact.id)} style={{ marginLeft: '4%' }}>
                    Delete
                </button>
            </td>

        </tr>


    );
};


const EOrgCom = () => {
    const [option, setOption] = useState(0);
    const [allData, setAllData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [contacts, setContacts] = useState(data);
    const [convertedJSON, setConvertedJSON] = useState([])






    const [addFormData, setAddFormData] = useState({
        name: "",
        role:"",
        designation:""


    });

    const [editFormData, setEditFormData] = useState({
        name: "",
        role:"",
        designation:""

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
            role:addFormData.role,
            designation:addFormData.designation


        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            name: editFormData.name,
            role:editFormData.role,
            designation:editFormData.designation


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
            role: contact.role,
            designation:contact.designation


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
            <PageBanner name="Organising Committee" head="Admin Panel" />

            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">
                            <div>
                                {/*
                                <h2>Select Role</h2>
                                 <button onClick={() =>
                                    setContacts(data.organsingList[option].persons)}>Symposium Patron</button>
                                <button onClick={() =>
                                    setContacts(data.organsingList[option+1].persons)}>Convener</button>
                                <button onClick={() =>
                                    setContacts(data.organsingList[option+2].persons)}>IET</button>
                                <button onClick={() =>
                                    setContacts(data.organsingList[option+3].persons)}>Local Committe</button> */}

                            </div>

                            <h2 className="classic-title"><span>Edit Organising Committee </span></h2>
                            <div className="EOrgCom-container">
                                <form onSubmit={handleEditFormSubmit}>
                                    <table className="table table-responsive table-condensed table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Role</th>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contacts && contacts.map((contact) => (
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
                                                            convertedJSON={convertedJSON}
                                                        />
                                                    )}
                                                </Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </form>
                                <br />
                                <h2>Add a New Entry</h2>
                                <br />
                                <form onSubmit={handleAddFormSubmit} style={{ justifyContent: 'space-between' }}>
                                    
                                        <input
                                            className="email"
                                            style={{ maxWidth: '60%' }}
                                            type="text"
                                            name="role"
                                            required="required"
                                            placeholder="Enter a role"
                                            onChange={handleAddFormChange}
                                        />
                                          <input
                                            className="email"
                                            style={{ maxWidth: '60%' }}
                                            type="text"
                                            name="name"
                                            required="required"
                                            placeholder="Enter a name"
                                            onChange={handleAddFormChange}
                                        />
                                          <input
                                            className="email"
                                            style={{ maxWidth: '60%' }}
                                            type="text"
                                            name="designation"
                                            required="required"
                                            placeholder="Enter a designation"
                                            onChange={handleAddFormChange}
                                        />
                                      <div className=" " style={{ textAlign: 'center', maxWidth: '60%' }}>
                                    <button type="submit" className="btn btn-primary">Add</button>
                                </div>

                                </form>
                                <br />
                                <br />
                                <div className=" " style={{ textAlign: 'center' }}>
                                    <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default EOrgCom;

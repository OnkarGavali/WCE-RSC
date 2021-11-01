import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import PageBanner from "../../../PageBanner";
import data from "../../../../../JSON/Keynote.json";
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
                    style={{width:'80%'}}
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
                    style={{width:'80%'}}
                    value={editFormData.designation}
                    onChange={handleEditFormChange}
                ></input>
               
            </td>


            <td>
                <button type="submit" class="btn btn-success" >Save</button>
                <button type="button" onClick={handleCancelClick} style={{marginTop:'4%'}}  class="btn btn-secondary" >
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
                type="button" onClick={() => handleDeleteClick(contact.id)} style={{marginTop:'4%'}}>
                    Delete
                </button>
            </td>
        </tr>
    );
};


const App = () => {
    const [contacts, setContacts] = useState(data);

    const [addFormData, setAddFormData] = useState({
        name: " ",
        designation:" "


    });

    const [editFormData, setEditFormData] = useState({
        name: " ",
        designation:" "


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
            designation:addFormData.designation

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            name:  editFormData.name,
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
            <PageBanner name="Keynote Speakers" head="Admin Panel" />

            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">
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
                                <h2>Add a New Entry</h2>
                                <br />
                                <form onSubmit={handleAddFormSubmit}>
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
                                    <div className=" " style={{marginLeft:'80%' }}>
                                        <button type="submit"  class="btn btn-primary">Add</button>
                                    </div>

                                </form>
                                <br />
                                <br/>
                                <div className=" " style={{textAlign:'center'}}>
                                <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system"  style={{marginTop:'10px'}}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default App;

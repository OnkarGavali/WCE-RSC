import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import PageBanner from "../../../PageBanner";
import info from "../../../../../JSON/Authors/guidelines.json";
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
                    placeholder="Enter Topic"
                    name="listItem"
                    value={editFormData.listItem}
                    onChange={handleEditFormChange}
                ></input>
            </td>


            <td>
                <button type="submit" className="btn btn-success" >Save</button>
                <button type="button" onClick={handleCancelClick} style={{ marginTop: '7%' }} className="btn btn-secondary" >
                    Cancel
                </button>
            </td>
        </tr>
    );
};

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.listItem}</td>


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
                    type="button" onClick={() => handleDeleteClick(contact.id)} style={{ marginTop: '7%' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};


const EGuidlines = () => {
    const [contacts, setContacts] = useState(info.data.paperSubGuidelineList);
    const [state, setState] = useState({
        publicationInfo: info.data.publicationInfo,
        publicationNote:info.data.noteInfo
    });
    const [displayNotice, setdisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');


    const [addFormData, setAddFormData] = useState({
        listItem: "",


    });

    const [editFormData, setEditFormData] = useState({
        listItem: "",


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
            listItem: addFormData.listItem,


        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };
    const handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            listItem: editFormData.listItem,


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
            listItem: contact.listItem,


        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        let dataToSend = {
            paperSubGuidelineList: contacts,
            publicationInfo: state.publicationInfo,
            noteInfo: state.publicationNote
          

        };
        console.log(dataToSend);

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
           
            


                            <h2 className="classic-title"><span>Edit Submission Guidlines </span></h2>
                            <div>

                                <form onSubmit={handleEditFormSubmit}>
                                    <table className="table table-responsive table-condensed table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Guidlines</th>
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
                                <h2 className="classic-title"><span>Add New Entry </span></h2>
                                <br />
                                <form onSubmit={handleAddFormSubmit}>
                                    <div className="col-md-9">
                                        <textarea
                                            className="email"
                                            style={{ width: '100%' }}
                                            type="text"
                                            rows="3"
                                            name="listItem"
                                            required="required"
                                            placeholder="Enter a submission guidline"
                                            onChange={handleAddFormChange}
                                        />
                                    </div>
                                    <div className=" " style={{ marginLeft: '80%' }}>
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </div>

                                </form>
                              
                                
                                <h2 className="classic-title" style={{marginTop:'10%'}}><span>Edit Publication Info  </span></h2>

                                <form acceptCharset='UTF-8' >
                                    <input type='hidden' name='submitted' id='submitted' value='1' />

                                    <div className="form-group">
                                        <div className="controls">

                                            <textarea type="text" value={state.publicationInfo} rows="5" name="publicationInfo" className="email"
                                                required="required" onChange={handleChange} style={{}} />
                                        </div>
                                    </div>
                                </form>
                                <h2 className="classic-title"style={{marginTop:'5%'}}><span>Edit Note  </span></h2>

                                <form acceptCharset='UTF-8' >
                                    <input type='hidden' name='submitted' id='submitted' value='1' />

                                    <div className="form-group">
                                        <div className="controls">

                                            <textarea type="text" value={state.publicationNote} rows="3" name="publicationNote" className="email"
                                                required="required" onChange={handleChange} style={{}} />
                                        </div>
                                    </div>
                                </form>
                                <br />
                                <NoticeBoard title={'Display Notice'} titleMessage={'Display Notice is : '} noticeState={displayNotice} noticeStateChange={setdisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                                <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance Break is : '} noticeState={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />

                                <br />
                                <div style={{ textAlign: 'right' }}>
                                    <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                                </div>
                            </div>
                        </div>
          

    );
};

export default EGuidlines;

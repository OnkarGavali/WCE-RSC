import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";

import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
import data from "../../../../../JSON/Keynote.json";
import { NoticeBoard } from "../../NoticeBoard";
import axios from "axios";
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
                <button type="submit" className="btn btn-success" >Save</button>
                <button type="button" onClick={handleCancelClick} style={{ marginTop: '4%' }} className="btn btn-secondary" >
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
                    className="btn btn-primary"
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-secondary"
                    type="button" onClick={() => handleDeleteClick(contact._id)} style={{ marginTop: '4%' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};


const Ekeynotes = () => {
   

    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayNotice, setDisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');
    const [speakersList, setSpeakersList] = useState([]);
    const [finalData, setFinalData] = useState();
    const [finalMessage, setFinalMessage] = useState("");



    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/keyNotes"
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
        console.log('end of use Effect')
    },[])

    useEffect(() => {
        if(!isLoading){
            setSpeakersList(allData.data.Speakers)
            setDisplayNotice(allData.displayNoticeStatus)
            setDisplayeNoticeHead(allData.displayNoticeHeading)
            setDisplayeNoticeContent(allData.displayNoticeContent)
            
            setMaintainanceBreak(allData.maintenanceBreakStatus)
            setMaintainanceBreakHead(allData.maintenanceBreakHeading)
            setMaintainanceBreakContent(allData.maintenanceBreakContent)
            console.log('end of if')
            console.log(allData)
        }
    
    }, [allData])


     useEffect(() => {
        if(speakersList){
            console.log("hu")
            console.log(speakersList)
        }
    }, [speakersList])


    useEffect(() => {
        if(finalData){
            console.log('useE')
            console.log(finalData)
            uploadContent()
        }
    }, [finalData])

    useEffect(() => {
        
    }, [displayNotice,displayeNoticeHead,displayeNoticeContent])
    
    useEffect(() => {
    }, [maintainanceBreak,maintainanceBreakHead,maintainanceBreakContent])

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

        const newContacts = [...speakersList, newContact];
        setSpeakersList(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            name: editFormData.name,
            designation: editFormData.designation
        };

        const newContacts = [...speakersList];
        const index = speakersList.findIndex((contact) => contact._id === editContactId);
        newContacts[index] = editedContact;
        setSpeakersList(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact._id);

        const formValues = {
            name: contact.name,
            designation: contact.designation
        };
        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        endFormater()
        console.log(speakersList);
    }

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...speakersList];
        const index = speakersList.findIndex((contact) => contact._id === contactId);
        newContacts.splice(index, 1);
        setSpeakersList(newContacts);
    };

    const endFormater = () => {
        const speakerlist = []
        speakersList.map((li)=>{
            speakerlist.push({"name":li.name,"designation":li.designation});
        }
           
        )
        const final = {
            "displayNoticeStatus":displayNotice,
            "displayNoticeHeading":displayeNoticeHead,
            "displayNoticeContent":displayeNoticeContent,
            "maintenanceBreakStatus":maintainanceBreak,
            "maintenanceBreakHeading":maintainanceBreakHead,
            "maintenanceBreakContent":maintainanceBreakContent,
            "data":{
                "Speakers":speakerlist
            }
        }
        setFinalData(final)
        // console.log('Final data')
        // console.log(finalData)
    }



    const uploadContent = () => {
        const headers = { 
            'x-access-token': localStorage.getItem("x-access-token")
        };
        axios.put('put/keynotes/61828581c970a26fc8e9aa72', finalData, { headers })
            .then(response => console.log(response));
        //console.log('aaaa')
        //console.log(finalMessage)
    }

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
                            {speakersList.map((contact) => (
                                <Fragment>
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
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>

                </form>

                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                <NoticeBoard title={'Display Notice'} titleMessage={'Notice is : '} noticeState={displayNotice} noticeStateChange={setDisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />           
                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                <div className=" " style={{ textAlign: 'right' }}>
                    <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                </div>
            </div>
        </div>
    );
};

export default Ekeynotes;

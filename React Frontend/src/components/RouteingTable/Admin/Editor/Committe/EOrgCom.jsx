import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import data from "../../../../../JSON/org_com.json";
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
                <button type="submit" className="btn btn-success" >Save</button>
                <button type="button" onClick={handleCancelClick} style={{ marginLeft: '4%' }} className="btn btn-secondary" >
                    Cancel
                </button>
            </td>
        </tr>
    );
};

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick, convertedJSON }) => {
    return (
        <tr key={contact._id}>
            <td>{contact.role}</td>
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
                    type="button" onClick={() => handleDeleteClick(contact._id)} style={{ marginLeft: '4%' }}>
                    Delete
                </button>
            </td>

        </tr>


    );
};


const EOrgCom = () => {
    const [contacts, setContacts] = useState(data);
    const [convertedJSON, setConvertedJSON] = useState([])


    const [allData, setAllData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [displayNotice, setDisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');
    const [organsingList, setOrgansingList] = useState([]);
    const [rolesList, setRolesList] = useState([]);
    const [finalData, setFinalData] = useState();
    const [finalMessage, setFinalMessage] = useState("");


    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/organization"
            ).then((response)=>{
                if(response.data[0]){
                    setAllData(response.data[0]);
                    console.log(response) 
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
        console.log(allData)
    },[])

     

    useEffect(() => {
        if(!isLoading){
            setDisplayNotice(allData.displayNoticeStatus)
            setDisplayeNoticeHead(allData.displayNoticeHeading)
            setDisplayeNoticeContent(allData.displayNoticeContent)
            setMaintainanceBreak(allData.maintenanceBreakStatus)
            setMaintainanceBreakHead(allData.maintenanceBreakHeading)
            setMaintainanceBreakContent(allData.maintenanceBreakContent)
            console.log('end of if')
            console.log(allData)
            if(allData.organsingList){
                let tmp = []
                let roles =[]
                allData.organsingList.map((roleLi)=>{
                    let role = roleLi.role
                    roles.push(role)
                    roleLi.persons.map( person => {
                        tmp.push({
                            ...person,
                            role : role
                        })
                    })

                })
                setRolesList(roles)
                setOrgansingList(tmp)
            }
            setIsLoading(false);
        }

    }, [allData])
    useEffect(() => {
       console.log(organsingList) 
    }, [isLoading,organsingList])


    // useEffect(() => {
    //     if(finalData){
    //         console.log('useE')
    //         console.log(finalData)
    //         uploadContent()
    //     }
    // }, [finalData])

  


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
        console.log(event.target,event.target.value)
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
            name: addFormData.name,
            role:addFormData.role,
            designation:addFormData.designation


        };

        const newContacts = [...organsingList, newContact];
        setOrgansingList(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            _id: editContactId,
            name: editFormData.name,
            role:editFormData.role,
            designation:editFormData.designation


        };

        const newContacts = [...organsingList];

        const index = organsingList.findIndex((contact) => contact._id === editContactId);

        newContacts[index] = editedContact;

        setOrgansingList(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact._id);

        const formValues = {
            name: contact.name,
            role: contact.role,
            designation:contact.designation
        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(contacts);

    }

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...organsingList];

        const index = organsingList.findIndex((contact) => contact._id === contactId);

        newContacts.splice(index, 1);

        setOrgansingList(newContacts);
    };

    return (
        <div>
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">

                            <h2 className="classic-title"><span>Edit Organising Committee </span></h2>
                            {
                                isLoading ? (
                                    <div>loading...</div>
                                ) : (
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
                                                    {   
                                                        allData && organsingList ? (
                                                            <>
                                                            {
                                                                organsingList.map((contact) => (
                                                                    <Fragment key={contact._id}>
                                                                        {editContactId === organsingList._id ? (
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
                                                                ))
                                                                }
                                                            </>
                                                        ) : (
                                                            <tr>
                                                                No data in database
                                                            </tr>
                                                        )
                                                       
                                                    }
                                                </tbody>
                                            </table>
                                        </form>
                                        <br />
                                        <h2>Add a New Entry</h2>
                                        <br />
                                        <form onSubmit={handleAddFormSubmit} style={{ justifyContent: 'space-between' }}>
                                                {/* <input
                                                    className="email"
                                                    
                                                    type="text"
                                                    name="role"
                                                    required="required"
                                                    placeholder="Enter a role"
                                                    onChange={handleAddFormChange}
                                                /> */}
                                                    <input
                                                    className="email"
                                                     style={{ maxWidth: '100%' }}
                                                    type="text"
                                                    name="name"
                                                    required="required"
                                                    placeholder="Enter a name"
                                                    onChange={handleAddFormChange}
                                                />
                                                    <input
                                                    className="email"
                                                    style={{ maxWidth: '100%' }}
                                                    type="text"
                                                    name="designation"
                                                    required="required"
                                                    placeholder="Enter a designation"
                                                    onChange={handleAddFormChange}
                                                /> 
                                                {
                                                    rolesList ? (
                                                        <>
                                                            <select className="email" id="cars" name="role" required onChange={handleAddFormChange}>
                                                                {
                                                                    rolesList.map((role)=> <option value={role}>{role}</option>)
                                                                }
                                                            </select>
                                                        </>
                                                    ) : (
                                                        <option value="A">A</option>
                                                    )
                                                }
                                                   
                                                
                                                <div className=" " style={{ textAlign: 'center', maxWidth: '60%', float: "right"  }}>
                                            <button type="submit" className="btn btn-primary">Add</button>
                                        </div>

                                        </form>
                                        <br />
                                        <br />
                                        <div style={{ textAlign: 'center', float: "right" }}>
                                            <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                                        </div>
                                    </div>
                                )
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default EOrgCom;

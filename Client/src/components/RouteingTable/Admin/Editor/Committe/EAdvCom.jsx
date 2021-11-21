import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
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
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                ></input>
            </td>


            <td>
                <button type="submit" class="btn btn-success" >Save</button>
                <button type="button" onClick={handleCancelClick} style={{marginLeft:'4%'}}  class="btn btn-secondary" >
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
                type="button" onClick={() => handleDeleteClick(contact._id)} style={{marginLeft:'4%'}}>
                    Delete
                </button>
            </td>
        </tr>
    );
};


const EAdvCom = () => {


    const format = {
        "displayNoticeStatus":false,
        "displayNoticeHeading":"",
        "displayNoticeContent":"",
        "maintenanceBreakStatus":false,
        "maintenanceBreakHeading":"",
        "maintenanceBreakContent":"",
        "advisoryList":[
            
        ]
    }

    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [displayNotice, setDisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');
    const [advisoryList, setAdvisoryList] = useState([]);

    const [finalData, setFinalData] = useState();
    const [finalMessage, setFinalMessage] = useState("");

    // const format = {
    //     "displayNoticeStatus":false,
    //     "displayNoticeHeading":"",
    //     "displayNoticeContent":"",
    //     "maintenanceBreakStatus":false,
    //     "maintenanceBreakHeading":"",
    //     "maintenanceBreakContent":"",
    //     "advisoryList":[
    //         {
    //             "name": ""
    //         }
    //     ]
    // }

    


    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/advisory"
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
        console.log(advisoryList)
    },[])

    useEffect(() => {
        if(!isLoading){
            setAdvisoryList(allData.advisoryList)
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
        if(advisoryList){
            console.log("hu")
            console.log(advisoryList)
        }
        
    }, [advisoryList])


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
        //  console.log('mB')
        // console.log(maintainanceBreak)
        // console.log(maintainanceBreakHead)
        // console.log(maintainanceBreakContent)
    }, [maintainanceBreak,maintainanceBreakHead,maintainanceBreakContent])
   

    const [addFormData, setAddFormData] = useState({
        name: "",


    });

    const [editFormData, setEditFormData] = useState({
        name: "",


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
            _id: nanoid(),
            name: addFormData.name
        };
        setAddFormData({name:""})
        const newContacts = [...advisoryList, newContact];
        setAdvisoryList(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            _id: editContactId,
            name: editFormData.name
        };

        const newContacts = [...advisoryList];

        const index = advisoryList.findIndex((contact) => contact._id === editContactId);

        newContacts[index] = editedContact;

        setAdvisoryList(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact._id);

        const formValues = {
            name: contact.name,
         

        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        endFormater()
        console.log(advisoryList);

    }

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...advisoryList];

        const index = advisoryList.findIndex((contact) => contact._id === contactId);

        newContacts.splice(index, 1);

        setAdvisoryList(newContacts);
    };

    const endFormater = () => {
        const advlist = []
        advisoryList.map((li)=>(
            advlist.push({"name":li.name})
        ))
        const final = {
            "displayNoticeStatus":displayNotice,
            "displayNoticeHeading":displayeNoticeHead,
            "displayNoticeContent":displayeNoticeContent,
            "maintenanceBreakStatus":maintainanceBreak,
            "maintenanceBreakHeading":maintainanceBreakHead,
            "maintenanceBreakContent":maintainanceBreakContent,
            "advisoryList":advlist
        }
        setFinalData(final)
        // console.log('Final data')
        // console.log(finalData)
    }



    const uploadContent = () => {
        const headers = { 
            'x-access-token': localStorage.getItem("x-access-token")
        };
        axios.put('put/advisory/61801c803668749496043b57', finalData, { headers })
            .then(response => console.log(response));
        //console.log('aaaa')
        //console.log(finalMessage)
    }
    
    return (
        <div>
            {
                isLoading ? (
                   <div>Loading...</div>
                ) : (
                    <div className="col-md-9">
                    <h2 className="classic-title"><span>Edit Advisory Committee </span></h2>
                        <div >
                            <form onSubmit={handleEditFormSubmit}>
                                <table className="table table-responsive table-condensed table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            advisoryList ? (
                                                advisoryList.map((contact) => (
                                                    <Fragment  key={contact._id}>
                                                        {editContactId === contact._id ? (
                                                            <EditableRow
                                                                editFormData={editFormData}
                                                                handleEditFormChange={handleEditFormChange}
                                                                handleCancelClick={handleCancelClick}
                                                                key={contact._id}
                                                            />
                                                        ) : (
                                                            <ReadOnlyRow
                                                                contact={contact}
                                                                handleEditClick={handleEditClick}
                                                                handleDeleteClick={handleDeleteClick}
                                                                key={contact._id}
                                                            />
                                                        )}
                                                    </Fragment>
                                                ))
                                            ) : null
                                        }
                                    </tbody>
                                </table>
                            </form>
                            <br />
                            <h2>Add a New Entry</h2>
                            <br />
                            <form onSubmit={handleAddFormSubmit}>
                                <div className="col-md-5">
                                    <input
                                        className="email"
                                        style={{ maxWidth: '100%' }}
                                        type="text"
                                        name="name"
                                        required="required"
                                        value={addFormData.name}
                                        placeholder="Enter a name..."
                                        onChange={handleAddFormChange}
                                    />
                                </div>
                                <div className=" " style={{marginLeft:'80%' }}>
                                    <button type="submit"  className="btn btn-primary">Add</button>
                                </div>

                            </form>

                            <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                            <NoticeBoard title={'Display Notice'} titleMessage={'Notice is : '} noticeState={displayNotice} noticeStateChange={setDisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                            <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />           
                                    
                            <br />
                            <br/>
                            <div className=" " style={{textAlign:'right'}}>
                            <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system"  style={{marginTop:'10px'}}>Update Content</button>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </div >

    );
};

export default EAdvCom;

import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import info from "../../../../../JSON/Authors/contributionTopics.json";
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
                    placeholder="Enter Topic"
                    name="topicName"
                    value={editFormData.topicName}
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

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.topicName}</td>


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


const CallFor = () => {
    

    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayNotice, setDisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');
    const [finalData, setFinalData] = useState();
    const [finalMessage, setFinalMessage] = useState("");
    const [list, setList] = useState([]);
    const [state, setState] = useState({
        topicInfo:info.data.paragraph

    });

    const [paragraph, setParagraph] = useState("");




    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/contributionTopics"
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
            setList(allData.data.topicList)
            setParagraph(allData.data.paragraph)
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
        if(list){
            console.log("useEffect after alldata")
            console.log(list)
            console.log(paragraph)
        }
    }, [list,paragraph])


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
        topicName: "",
    });

    const [editFormData, setEditFormData] = useState({
        topicName: "",
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
            topicName: addFormData.topicName,


        };
        setAddFormData({topicName:""})
        const newContacts = [...list, newContact];
        setList(newContacts);
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
            _id: editContactId,
            topicName: editFormData.topicName,


        };

        const newContacts = [...list];

        const index = list.findIndex((contact) => contact._id === editContactId);

        newContacts[index] = editedContact;

        setList(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact._id);

        const formValues = {
            topicName: contact.topicName,


        };

        setEditFormData(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       
        endFormater()
        //console.log(dataToSend);

    }

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...list];

        const index = list.findIndex((contact) => contact._id === contactId);

        newContacts.splice(index, 1);

        setList(newContacts);
    };


    const endFormater = () => {
        const topiclist = []
        var i=0;
        list.map((li)=>{
             topiclist.push({"id":i,"topicName":li.topicName});
             i=i+1;
        });
           
        
        const final = {
            "displayNoticeStatus":displayNotice,
            "displayNoticeHeading":displayeNoticeHead,
            "displayNoticeContent":displayeNoticeContent,
            "maintenanceBreakStatus":maintainanceBreak,
            "maintenanceBreakHeading":maintainanceBreakHead,
            "maintenanceBreakContent":maintainanceBreakContent,
            "data":{
                "paragraph":paragraph,
                "topicList":topiclist
            }
        }
        setFinalData(final)
        console.log('Final data')
        console.log(finalData)
    }



    const uploadContent = () => {
        const headers = { 
            'x-access-token': localStorage.getItem("x-access-token")
        };
        axios.put('put/contributionTopics/61824d66526d96edd615c586', finalData, { headers })
            .then(response => console.log(response));
        //console.log('aaaa')
        //console.log(finalMessage)
    }

    return (
        <div>
            <h2 className="classic-title"><span>Edit Contribution Info  </span></h2>
            <form  acceptCharset='UTF-8' >
                <input type='hidden' name='submitted' id='submitted' value='1' />

                <div className="form-group">
                    <div className="controls">
                        
                        <textarea type="text" value={paragraph} rows="7" name="topicInfo" className="email"
                            required="required" onChange={(e)=>{setParagraph(e.target.value)}} style={{}} />
                    </div>
                </div>
            </form>
            <h2 className="classic-title"><span>Edit Contribution Topics </span></h2>
            <div>
                <form onSubmit={handleEditFormSubmit}>
                    <table className="table table-responsive table-condensed table-bordered">
                        <thead>
                            <tr>
                                <th>Topic Name </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((contact) => (
                                <Fragment key={list._id}>
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
                <h2 className="classic-title"><span>Add New Entry </span></h2>
                <br />
                <form onSubmit={handleAddFormSubmit}>
                    <div className="col-md-5">
                        <input
                            className="email"
                            style={{ maxWidth: '100%' }}
                            type="text"
                            name="topicName"
                            required="required"
                            placeholder="Enter a topic name"
                            value={addFormData.topicName}
                            onChange={handleAddFormChange}
                        />
                    </div>
                    <div className=" " style={{ marginLeft: '80%' }}>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>

                </form>
                <br />
                <NoticeBoard title={'Display Notice'} titleMessage={'Display Notice is : '} noticeState ={displayNotice} noticeStateChange={setDisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />           
                <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                <div  style={{ textAlign: 'right' }}>
                    <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-system" style={{ marginTop: '10px' }}>Update Content</button>
                </div>
            </div>
        </div>
    );
};

export default CallFor;

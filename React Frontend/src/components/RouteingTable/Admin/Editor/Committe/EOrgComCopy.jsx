import React, { useState, Fragment, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import data from "../../../../../JSON/org_com.json";
import axios from "axios";
import { NoticeBoard } from "../../NoticeBoard";




const EOrgComCopy = () => {

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

    const [formInputContent, setFormInputContent] = useState({
        _id: null,
        name: "",
        roleId:null,
        designation:"",
        prevRoleId:null
    })

    const [newRole, setNewRole] = useState("");
    const EditFormFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

        return [ htmlElRef, setFocus ] 
    }
    const [editFormRef, setEditFormRef] = EditFormFocus()

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
            setOrgansingList(allData.organsingList)
            setDisplayNotice(allData.displayNoticeStatus)
            setDisplayeNoticeHead(allData.displayNoticeHeading)
            setDisplayeNoticeContent(allData.displayNoticeContent)
            setMaintainanceBreak(allData.maintenanceBreakStatus)
            setMaintainanceBreakHead(allData.maintenanceBreakHeading)
            setMaintainanceBreakContent(allData.maintenanceBreakContent)
            console.log('end of if')
            console.log(allData)
            if(allData.organsingList){
                let roles =[]
                allData.organsingList.map((roleLi)=>{
                    roles.push({
                        _id : roleLi._id,
                        role: roleLi.role
                    })
                })
                setRolesList(roles)
                setFormInputContent({
                    _id: null,
                    name: "",
                    roleId:roles[0]._id,
                    designation:"",
                    prevRoleId:null
                })
            }
            setIsLoading(false);
        }

    }, [allData])
    useEffect(() => {
       console.log(organsingList) 
    }, [isLoading,organsingList])


    useEffect(() => {
        if(finalData){
            console.log('useE')
            console.log(finalData)
            uploadContent()
        }
    }, [finalData])

    const handleFormChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...formInputContent };
        newFormData[fieldName] = fieldValue;
        console.log("new",newFormData)
        setFormInputContent(newFormData);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let newOrgansingList =[];
        if(formInputContent._id == null)
        {
            organsingList.map(roleLi => {
                if( roleLi._id == formInputContent.roleId ){
                    let tmp = roleLi
                    tmp.persons.push({_id:nanoid() , name: formInputContent.name, designation: formInputContent.designation})
                    newOrgansingList.push(tmp)
                }
                else{
                    newOrgansingList.push(roleLi)
                }
            })
        } 
        else {
            if(formInputContent.roleId === formInputContent.prevRoleId)
            {
                organsingList.map(roleLi => {
                    if( roleLi._id == formInputContent.roleId ){
                        let tmp = {...roleLi}
                        const index = tmp.persons.findIndex((person) => person._id === formInputContent._id);
                        tmp.persons.splice(index, 1,{ _id:formInputContent._id,name: formInputContent.name,designation: formInputContent.designation});
                        newOrgansingList.push(tmp)
                        console.log(tmp)
                    }
                    else{
                        newOrgansingList.push(roleLi)
                    }
                })
            }
            else{
                organsingList.map(roleLi => {
                    if( roleLi._id === formInputContent.prevRoleId ){
                        let tmp = {...roleLi}
                        const index = tmp.persons.findIndex((person) => person._id === formInputContent._id);
                        tmp.persons.splice(index, 1);
                        newOrgansingList.push(tmp)
                        console.log(tmp)
                    }
                    else if(formInputContent.roleId == roleLi._id){
                        let tmp = {...roleLi}
                        tmp.persons.push({_id:formInputContent._id,name: formInputContent.name,designation: formInputContent.designation})
                        newOrgansingList.push(tmp)
                        console.log(tmp)
                    }
                    else{
                        newOrgansingList.push(roleLi)
                    }
                })
            }
            
        }
        
        setFormInputContent({
            _id: null,
            name: "",
            roleId:rolesList[0]._id,
            designation:"",
            prevRoleId:null
        })
        setOrgansingList(newOrgansingList);
       
    };
    const handleEdit = (personData)=> {
        setFormInputContent(personData);
        setEditFormRef()
    }

    const handleDelete = (roleId,personId = null) => {
        let newOrgansingList = []
        organsingList.map((roleLi) =>{
            if(roleLi._id === roleId){
                let tmp = {...roleLi}
                const index = tmp.persons.findIndex((person) => person._id === personId);
                tmp.persons.splice(index, 1);
                newOrgansingList.push(tmp)
            }
            else{
                newOrgansingList.push(roleLi)
            }
        })
        setOrgansingList(newOrgansingList);
    };

    const handleAddNewRole = () => {
        let r = newRole.trim()
        let v = [...rolesList]
        rolesList.map(role => {
            if(role.role === r){
                alert("Inputed Role already exists in database");
                r=""
            }
        })
        if(r){
            let t = {role:r,_id:nanoid() }
            v.push(t)
            setRolesList(v)
            let tmpOrgansingList = [...organsingList ]
            tmpOrgansingList.push({role:r,persons:[],_id:t._id})
            setOrgansingList(tmpOrgansingList)
        }
        setNewRole("")
    }

    const handleRoleUp = (roleParameter) => {
        let tmpRoleList = [...rolesList]
        let tmpOrgansingList = [...organsingList ]
        const index = tmpRoleList.findIndex((role) => role._id === roleParameter._id);
        if(index!==0){
            let tmp = tmpOrgansingList[index]
            tmpRoleList.splice(index, 1);
            tmpOrgansingList.splice(index,1)
            tmpRoleList.splice(index-1, 0,{...roleParameter});
            tmpOrgansingList.splice(index-1, 0,{...tmp})
            setRolesList(tmpRoleList)
            setOrgansingList(tmpOrgansingList)
        }
    }

    const handleRoleDown = (roleParameter) => {
        let tmpRoleList = [...rolesList]
        let tmpOrgansingList = [...organsingList ]
        const index = tmpRoleList.findIndex((role) => role._id === roleParameter._id);
        if(index!==tmpRoleList.length){
            let tmp = tmpOrgansingList[index]
            tmpRoleList.splice(index, 1);
            tmpOrgansingList.splice(index,1)
            tmpRoleList.splice(index+1, 0,{...roleParameter});
            tmpOrgansingList.splice(index+1, 0,{...tmp})
            setRolesList(tmpRoleList)
            setOrgansingList(tmpOrgansingList)
        }
    }

    const endFormater = () => {
        let orglist = []
        organsingList.map((orgRole)=>{
            let  a = []
            orgRole.persons.map((person)=>{
                a.push({name: person.name, designation:person.designation})
            })
            orglist.push({role:orgRole.role,persons:a})
            
        })
        const final = {
            "displayNoticeStatus":displayNotice,
            "displayNoticeHeading":displayeNoticeHead,
            "displayNoticeContent":displayeNoticeContent,
            "maintenanceBreakStatus":maintainanceBreak,
            "maintenanceBreakHeading":maintainanceBreakHead,
            "maintenanceBreakContent":maintainanceBreakContent,
            "organsingList":orglist
        }
        setFinalData(final)
        console.log('Final data')
        console.log(finalData)
    }



    const uploadContent = () => {
        const headers = { 
            'x-access-token': localStorage.getItem("x-access-token")
        };
        axios.put('put/organization/617ff298460d102107fa5248', finalData, { headers })
            .then(response => console.log(response));
        //console.log('aaaa')
        //console.log(finalMessage)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        endFormater()
    }

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

                                        <form onSubmit={handleFormSubmit}>
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
                                                                organsingList.map((roleli) => (
                                                                    <>
                                                                        
                                                                        {
                                                                            roleli.persons.map((li)=>(
                                                                                <tr key={li._id}>
                                                                                    <td>{roleli.role}</td>
                                                                                    <td>{li.name}</td>
                                                                                    <td>{li.designation}</td>
                                                                                    <td >
                                                                                        <button
                                                                                            className="btn btn-primary"
                                                                                            type="button"
                                                                                            onClick={() => handleEdit( {...li, roleId : roleli._id, prevRoleId : roleli._id})}
                                                                                        >
                                                                                            Edit
                                                                                        </button>
                                                                                        <button
                                                                                            className="btn btn-secondary"
                                                                                            type="button" 
                                                                                            onClick={() => handleDelete(roleli._id,li._id)} 
                                                                                            style={{ marginTop: '4%' }}
                                                                                            >
                                                                                            Delete
                                                                                        </button>
                                                                                    </td>
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                        <tr style={{backgroundColor:"#38cbcb"}}>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                        </tr>
                                                                    </>
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
                                        
                                        <h3 className="classic-title"><span>Add a New Entry</span></h3>
                                        <form onSubmit={handleFormSubmit} style={{ justifyContent: 'space-between',marginBottom:"5%" }}>   
                                            {
                                                formInputContent.name ? (
                                                    <label>Name</label>
                                                ) : null
                                            }
                                            
                                            <input
                                                className="email"
                                                style={{ maxWidth: '100%' }}
                                                type="text"
                                                name="name"
                                                required="required"
                                                placeholder="Enter a name"
                                                onChange={handleFormChange}
                                                value={formInputContent.name}
                                                ref={editFormRef}
                                            />
                                            {
                                                formInputContent.designation ? (
                                                    <label>Designation</label>
                                                ) : null
                                            }
                                            
                                            <input
                                                className="email"
                                                style={{ maxWidth: '100%' }}
                                                type="text"
                                                name="designation"
                                                required="required"
                                                placeholder="Enter a designation"
                                                onChange={handleFormChange}
                                                value={formInputContent.designation}
                                            />
                                            <label>Role </label>
                                            {
                                                rolesList ? (
                                                    <>
                                                        
                                                            {
                                                                rolesList.map((role)=> (
                                                                    <div className="radio" key={role._id}>
                                                                        <label>
                                                                            <input
                                                                            type="radio"
                                                                            value={role._id}
                                                                            name="roleId"
                                                                            checked={formInputContent.roleId === role._id}
                                                                            onChange={handleFormChange}
                                                                            />
                                                                            {role.role} 
                                                                           
                                                                        </label>
                                                                    </div>
                                                                ))
                                                            }
                                
                                                    </>
                                                ) : (
                                                    <div> Add Roles</div>
                                                )
                                            }
                                                
                                               
                                                   
                                                
                                            <div  style={{ textAlign: 'center' }}>
                                                <button type="submit" className="btn btn-primary">Add New Entry </button>
                                            </div>

                                        </form>
                                        <div style={{margin:"10px"}}>
                                        <h3 className="classic-title"><span>Add a New Role (<small>You can arrange the order of roles here with arrows</small>)</span></h3>
                                        <ol>
                                            {
                                                rolesList.map((role,id)=> (
                                                    <li key={role._id}>
                                                        {role.role} 
                                                      
                                                        <span style={{margin:'5px'}}>
                                                            {
                                                                id===0? (
                                                                    <button className="btn btn-primary" style={{margin:'5px'}} disabled><i className="fa fa-arrow-up"></i></button>
                                                                ): (
                                                                    <button className="btn btn-primary" style={{margin:'5px'}} onClick={() =>handleRoleUp(role)}><i className="fa fa-arrow-up"></i></button>
                                                                )
                                                            }
                                                            {
                                                                id===((rolesList.length)-1) ? (
                                                                    <button className="btn btn-primary" disabled><i className="fa fa-arrow-down" ></i></button>
                                                                ) : (
                                                                    <button className="btn btn-primary"><i className="fa fa-arrow-down" onClick={() =>handleRoleDown(role)}></i></button>
                                                                )
                                                            }
                                                            
                                                            
                                                        </span>
                                                       
                                                    </li>
                                                ))
                                            }
                                        </ol>
                                        <div>
                                            {
                                                newRole ? (
                                                    <label>New Role</label>
                                                ) : null
                                            }
                                            
                                            <input
                                                className="email"
                                                style={{ maxWidth: '100%' }}
                                                type="text"
                                                name="newRole"
                                                placeholder="Enter a new Role"
                                                onChange={(e) => setNewRole(e.target.value)}
                                                value={newRole}
                                            />
                                            {
                                                newRole ? (
                                                    <div  style={{ textAlign: 'center'  }} onClick={handleAddNewRole}>
                                                        <button type="button" className="btn btn-primary">Add New Role</button>
                                                    </div>
                                                ) : (
                                                    <div  style={{ textAlign: 'center'  }}>
                                                        <button type="button" className="btn btn-primary" disabled>Add New Entry</button>
                                                    </div>
                                                )
                                            }
                                            
                                        </div>
                                        </div>

                                        <div className="hr5" style={{ marginTop: '20px', marginBottom: '20px' }}></div>
                                        <NoticeBoard title={'Display Notice'} titleMessage={'Notice is : '} noticeState={displayNotice} noticeStateChange={setDisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                                        <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />
                                                
                                        
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

export default EOrgComCopy;

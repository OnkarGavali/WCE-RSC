
import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";


import { NoticeBoard } from "../../NoticeBoard";
import axios from "axios";

function EPosterPre() {

    const [sizeLayout, setSizeLayout] = useState();
    const [orgIdea, setOrgIdea] = useState();
    const [format, setFormat] = useState();
    const [presentation, setPresentation] = useState();
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [displayNotice, setDisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintenanceBreak, setMaintenanceBreak] = useState(false);
    const [maintenanceBreakHead, setMaintenanceBreakHead] = useState('');
    const [maintenanceBreakContent, setMaintenanceBreakContent] = useState('');
    const [finalData, setFinalData] = useState(null);
    const [finalMessage, setFinalMessage] = useState("");

    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/posterPresentation"
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
    },[])


    useEffect(() => {
        if(!isLoading){
            setDisplayNotice(allData.displayNoticeStatus)
            setDisplayeNoticeHead(allData.displayeNoticeHeading)
            setDisplayeNoticeContent(allData.displayeNoticeContent)
            setMaintenanceBreak(allData.maintenanceBreakStatus)
            setMaintenanceBreakHead(allData.maintenanceBreakHeading)
            setMaintenanceBreakContent(allData.maintenanceBreakContent)
            if(allData.data){
              setSizeLayout(allData.data.sizeAndLayout)
              setOrgIdea(allData.data.organisationOfIdeas)
              setFormat(allData.data.format)
              setPresentation(allData.data.presentation)


            }      
        }
    }, [allData])

    const endFormater = () => {
        const final = {
            "displayNoticeStatus":displayNotice,
            "displayNoticeHeading":displayeNoticeHead,
            "displayNoticeContent":displayeNoticeContent,
            "maintenanceBreakStatus":maintenanceBreak,
            "maintenanceBreakHeading":maintenanceBreakHead,
            "maintenanceBreakContent":maintenanceBreakContent,
            "data":{
               "sizeAndLayout": sizeLayout,
               "organisationOfIdeas":orgIdea,
               "format":format,
               "presentation":presentation

            }
        }
        setFinalData(final)
    }

    
    const uploadContent = () => {
        const headers = { 
            'x-access-token': localStorage.getItem("x-access-token")
        };
        axios.put('put/posterPresentation/618e38ec67d01ef1b504194f', finalData, { headers })
            .then(response => console.log(response));
    }

    useEffect(() => {
        if(finalData){
            uploadContent()
        }
    }, [finalData])

    const handleSubmit = evt=>{
       evt.preventDefault();
       endFormater();



    }


    return (
        <div>

                            
                            <h2 className="classic-title"><span>Edit Poster Presentation </span></h2>


                            <form id='login' acceptCharset='UTF-8' onSubmit={handleSubmit}>
                                <input type='hidden' name='submitted' id='submitted' value='1' />

                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Size & Layout </span></h2>
                                    <textarea type="text" value={sizeLayout} rows="10"  name="sizeLayout" className="email"
                                            required="required"  onChange={(e)=>setSizeLayout(e.target.value)} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Organization of Ideas </span></h2>

                                        <textarea type="text" value={orgIdea} rows="10"   name="orgIdea" className="email"
                                            required="required"  onChange={(e)=>setOrgIdea(e.target.value)} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Format </span></h2>

                                        <textarea type="text" value={format} rows="10" name="format" className="email"
                                            required="required"  onChange={(e)=>setFormat(e.target.value)} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Presentation </span></h2>

                                        <textarea type="text" value={presentation} rows="10"   name="presentation" className="email"
                                            required="required"  onChange={(e)=>setPresentation(e.target.value)} style={{}}/>
                                    </div>
                                </div>
                              
                                <NoticeBoard title={'Display Notice'} titleMessage={'Notice is : '} noticeState ={displayNotice} noticeStateChange={setDisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                                <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState ={maintenanceBreak} noticeStateChange={setMaintenanceBreak} noticeHead={maintenanceBreakHead} noticeHeadChange={setMaintenanceBreakHead} noticeContent={maintenanceBreakContent} noticeContentChange={setMaintenanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />           

                                <div  style={{ textAlign: 'right' }}>
                                <button type="submit" id="submit" className="btn-system btn-large">Update Content</button>
                                </div>
                                <br />
                                <br />
                            </form>


                        </div>
        
    );

}


export default EPosterPre;


import React, {useState } from 'react'
import info from '../../../../../JSON/Programs/posterPresentation.json'
import { NoticeBoard } from '../../NoticeBoard';

function EPosterPre() {
    const [state, setState] = useState({
       sizeLayout: info.data.sizeAndLayout,
       orgIdea: info.data.organisationOfIdeas,
       format:info.data.format,
       presentation:info.data.presentation 
        
    });
    const [displayNotice, setdisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintainanceBreak, setMaintainanceBreak] = useState(false);
    const [maintainanceBreakHead, setMaintainanceBreakHead] = useState('');
    const [maintainanceBreakContent, setMaintainanceBreakContent] = useState('');


    const handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = evt=>{
       evt.preventDefault();
        let dataToSend = {
           sizeLayout: state.sizeLayout,
            


        };
        console.log(JSON.stringify(dataToSend));



    }


    return (
        <div>

                            
                            <h2 className="classic-title"><span>Edit Poster Presentation </span></h2>


                            <form id='login' acceptCharset='UTF-8' onSubmit={handleSubmit}>
                                <input type='hidden' name='submitted' id='submitted' value='1' />

                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Size & Layout </span></h2>
                                    <textarea type="text" value={state.sizeLayout} rows="10" placeholder={state.sizeLayout} name="sizeLayout" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Organization of Ideas </span></h2>

                                        <textarea type="text" value={state.orgIdea} rows="10"   name="orgIdea" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Format </span></h2>

                                        <textarea type="text" value={state.format} rows="10" name="format" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                    <h2 className="classic-title"><span>Presentation </span></h2>

                                        <textarea type="text" value={state.presentation} rows="10"   name="presentation" className="email"
                                            required="required"  onChange={handleChange} style={{}}/>
                                    </div>
                                </div>
                              
                                <NoticeBoard title={'Display Notice'} titleMessage={'Notice is : '} noticeState ={displayNotice} noticeStateChange={setdisplayNotice} noticeHead={displayeNoticeHead} noticeHeadChange={setDisplayeNoticeHead} noticeContent={displayeNoticeContent} noticeContentChange={setDisplayeNoticeContent} headLabel={'Notice Heading'} contentLabel={'Notice Content'} />
                                <NoticeBoard title={'Maintainance Break'} titleMessage={'Maintainance break is : '} noticeState ={maintainanceBreak} noticeStateChange={setMaintainanceBreak} noticeHead={maintainanceBreakHead} noticeHeadChange={setMaintainanceBreakHead} noticeContent={maintainanceBreakContent} noticeContentChange={setMaintainanceBreakContent} headLabel={'Maintainance Break Heading'} contentLabel={'Maintainance Break Message Content'} />           

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

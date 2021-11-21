import React from 'react'
import Toggle from 'react-toggle'

export const NoticeBoard = ({title,titleMessage,noticeState,noticeStateChange,noticeHead,noticeHeadChange,noticeContent,noticeContentChange,headLabel,contentLabel}) => {
    
    
    return (
        <div style={{width:'100%'}}>
            <h2 className="classic-title"><span>{title}</span></h2>
           

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span >{titleMessage} {noticeState ? "ON" : "OFF"} </span>
            <Toggle
                checked={noticeState}
                onChange={() => {
                    noticeStateChange(!noticeState)
                }} 
            />
            </div>
         
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{width:"100%"}}>
                    <label className="accent-color">{headLabel}</label>
                    <input
                        className="email"
                        style={{ width: '100%' }}
                        type="text"
                        name="noticehead"
                        
                        value={noticeHead}
                        placeholder="Enter a Notice Heading"
                        onChange={(e)=>{
                            noticeHeadChange(e.target.value)
                        }
                       }
                    />
                  
                    <label className="accent-color">{contentLabel}</label>
                    <textarea
                        className="email"
                        style={{ width: '100%' }}
                        type="text"
                        rows="3"
                        name="noticecontent"
                      
                        placeholder="Enter Notice Content"
                        value={noticeContent}
                        onChange={(e)=>{
                            noticeContentChange(e.target.value)
                        }}
                    />
                   
                </div>
            
            </div>
        </div>
    )
}


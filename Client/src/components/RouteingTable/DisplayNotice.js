import React from 'react'

export const DisplayNotice = ({heading,message}) => {
    return (
        <div className="call-action call-action-boxed call-action-style2 clearfix " style={{backgroundColor:'#0bb586',margin:'10px'}}>
            <h2 className="primary" style={{color:'#fff'}}><strong>{heading}</strong></h2>
            <p style={{color:'#fff'}}>{message}</p>
        </div>
    )
}

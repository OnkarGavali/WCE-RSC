import React from 'react'

export const MaintenanceBreak = ({message}) => {
    return (
        <div className="call-action call-action-boxed call-action-style2 clearfix " style={{backgroundColor:'#0bb586'}}>
            <h2 className="primary" style={{color:'#fff'}}><strong>{message}</strong></h2>
            <p style={{color:'#fff'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    )
}

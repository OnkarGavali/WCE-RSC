import React from 'react'

const MaintenanceBreak = ({heading,message}) => {
    return (
        <div className="call-action call-action-boxed call-action-style2 clearfix " style={{backgroundColor:'#ee3733',margin:'10px'}}>
            <h2 className="primary" style={{color:'#fff'}}><strong>{heading}</strong></h2>
            <p style={{color:'#fff'}}>{message}</p>
        </div>
    )
}
 export default MaintenanceBreak;
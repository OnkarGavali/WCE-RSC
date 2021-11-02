import React from 'react'

export const CollegeGoogleMap = () => {
    return (
         <div className="mapouter" style={{'position':'relative','textAlign':'right','width':'100%','height':'450'}}>
            <div className="gmap_canvas" style={{'overflow':'hidden','background':'none','width':'100%','height':'450px'}}>
                <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=Walchand College of of Engineering, Sangli&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{'height':'450px'}} ></iframe>
            </div>
        </div>
    )
}

import React from 'react'

export const LocateUs = () => {
    return (
        <div>
            {/* <!-- Classic Heading --> */}
            <h4 className="classic-title"><span>Locate Us</span></h4>
            
            <div className="mapouter" style={{'position':'relative','textAlign':'right','width':'100%','height':'450'}}>
                <div className="gmap_canvas" style={{'overflow':'hidden','background':'none','width':'100%','height':'450px'}}>
                    <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=Walchand College of of Engineering, Sangli&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{'height':'450px'}} ></iframe>
                </div>
            </div>
        </div>
    )
}

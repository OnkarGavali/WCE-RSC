

import React from 'react'

export const GalleryImages = ({key,path,alt}) => {
    return (
        <div className="portfolio-item item col-md-4" style={{"overflow":"hidden",'height':"300px","margin":'10px'}}  >
            <div className="portfolio-border">
                <div className="portfolio-thumb">
                    <img alt={alt} src={path} style={{ "width": "100%","height": '100%','backgroundPosition':'center','backgroundSize':'cover','backgroundOrigin':'borderBox'}}/>
                </div>
                <div className="portfolio-details">
                <a href="#">
                    <h4>Image {key}</h4>
                    <span> Image</span>
                    
                </a>
                </div>
            </div>
        </div>
    )
}

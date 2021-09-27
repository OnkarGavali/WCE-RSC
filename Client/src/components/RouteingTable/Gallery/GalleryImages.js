import React from 'react'

export const GalleryImages = ({key,path,alt}) => {
    return (
        <div className="portfolio-item item " style={{"overflow":"hidden","margin":'10px'}}  >
            <div className="portfolio-border">
                <div className="portfolio-thumb">
                    <img alt={alt} src={path} style={{ 'backgroundPosition':'center','backgroundSize':'cover','backgroundOrigin':'borderBox','maxHeight':'300px'}}/>
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
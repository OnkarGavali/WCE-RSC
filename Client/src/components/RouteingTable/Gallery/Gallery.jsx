import React, { useEffect, useState } from 'react';
import { GalleryImages } from './GalleryImages';

import galleryImgs from '../../../JSON/gallaryImages.json'
import PageBanner from '../PageBanner';
import { G } from './G';

function Gallery ()
{
    const [isImages, setIsImages] = useState(false);

    useEffect(() => {
        
        if(galleryImgs!=null)
            setIsImages(true)
    })
    
    return (
      <React.Fragment>
        <PageBanner name="Gallery" head="Gallery" />
        <div className="contenti">
          <div className="container">
            {/* <div className="recent-projects">
              <h4 className="title"><span>Gallery</span></h4>
              <div className="projects-carousel touch-carousel">
                
                  {isImages?
                    (
                        galleryImgs.map(
                            (img) => <GalleryImages key={img.id} path={img.imagePath} alt={img.alt}/>
                        ) 
                      )
                    
                    : 
                    (<div className="post-row item">

                      <h3 className="post-title"><a href="#">No Information Available Currently</a></h3>
                      
                    </div>)
                  }
                  
                </div>
              </div> */}
               <G/>
            </div>
          </div>
          
         
        </React.Fragment>
    );
}

export default Gallery;

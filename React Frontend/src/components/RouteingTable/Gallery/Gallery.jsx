import React, { useEffect, useState } from 'react';
import { GalleryImages } from './GalleryImages';

import galleryImgs from '../../../JSON/gallaryImages.json'
import PageBanner from '../PageBanner';

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
           <div className="row">
                
                  {isImages?
                    (
                        galleryImgs.map(
                            (img) => <GalleryImages key={img.id} path={img.url} alt={img.name}/>
                        ) 
                      )
                    
                    : 
                    (<div className="post-row item">

                      <h3 className="post-title"><a href="#">No Information Available Currently</a></h3>
                      
                    </div>)
                  }
                  
                
              </div>
            </div>
          </div>
          
         
        </React.Fragment>
    );
}

export default Gallery;

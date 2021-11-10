import React, { useEffect, useState } from 'react'

import galleryImgs from '../../../JSON/gallaryImages.json'

export const G = () => {
    
    const [isImages, setIsImages] = useState(false);

    useEffect(() => {
        
        if(galleryImgs!=null)
            setIsImages(true)
    })
    
    return (

        <div className="row">

            {isImages?
                   (
                      galleryImgs.map(
                          (img) => (<div className="col-md-4" key={img.id} style={{border :'1px solid black', margin:'10px', height:"300px"}}>
                                <div className="card" >
                                <div style={{height:'200px'}}>
                                <img alt="Card image cap" className="card-img-top img-fluid" src={img.imagePath} style={{maxHeight:'200px', width:'100%',padding:'5px'}}/>
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">Brownie Delight</h4>

                                    <p className="card-text">Our customer favorite chocolate ice cream jam packed with pieces of brownies and fudge</p>
                                </div>
                                </div>
                            </div>
                          )
                      ) 
                    )
                  
                  : 
                  (<div classNameName="post-row item">

                    <h3 classNameName="post-title"><a href="#">No Information Available Currently</a></h3>
                    
                  </div>)
                }
           

           
        </div>
    )
}

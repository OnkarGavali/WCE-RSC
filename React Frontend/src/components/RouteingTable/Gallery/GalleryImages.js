import React from 'react'
import './styles.css'
export const GalleryImages = ({key,path,alt}) => {
    return (
        <div className="col-md-5 card-container" key={key} style={{}}>
            <div className="card" >
                <div className='img-body' style={{height:'200px',margin:'0px', padding:"0px"}} >
                    <img alt={alt} className="card-img-top img-fluid" src={path} style={{maxHeight:'200px'}}/>
                </div>
                {/* <div className="card-body" style={{paddingTop:'10px'}}>
                    <h4 className="card-title">Brownie Delight</h4>
                    <p className="card-text">Our customer favorite chocolate ice cream jam packed with pieces of brownies and fudge</p>
                </div> */}
            </div>
        </div>
    )
}
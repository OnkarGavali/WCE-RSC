import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import data from '../../../JSON/Images.json';

function Slider() {


 const sliderImg = data.sliderImg   
 


    return (













        <div>
            <section id="home">

                <div id="main-slide" className="carousel slide" data-ride="carousel" style={{ marginTop: "-50px", marginBottom: "20px" }}>


                    <ol className="carousel-indicators">
                        <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                        {
                             sliderImg.map((entry) =>
                             
                                <li data-target="#main-slide" data-slide-to={entry.id}></li>
                             
                         )

                        }
                      
                    </ol>

                    <div className="carousel-inner" style={{ maxHeight: '450px' }}>
                        <div className="item active">
                            <img className="img-responsive" src="/images/slider/1.jpg" alt="slider" />
                        </div>
                        {
                            sliderImg.map((entry) =>
                                <div className="item">
                                    <img className="img-responsive" src={entry.url} alt="slider" />
                                </div>
                            )

                        }




                    </div>

                    <a className="left carousel-control" href="#main-slide" data-slide="prev">
                        <span><i className="fa fa-angle-left"></i></span>
                    </a>
                    <a className="right carousel-control" href="#main-slide" data-slide="next">
                        <span><i className="fa fa-angle-right"></i></span>
                    </a>
                </div>

            </section>


        </div>


    );
}

export default Slider;

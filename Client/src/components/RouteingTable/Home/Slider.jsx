import React, { Components, useState } from 'react';



function Slider() {
    return (
        <div>
            <section id="home">
                
                <div id="main-slide" class="carousel slide" data-ride="carousel" style={{marginTop:"-50px", marginBottom:"20px"}}>

                   
                    <ol class="carousel-indicators">
                        <li data-target="#main-slide" data-slide-to="0" class="active"></li>
                        <li data-target="#main-slide" data-slide-to="1"></li>
                        <li data-target="#main-slide" data-slide-to="2"></li>
                        <li data-target="#main-slide" data-slide-to="3"></li>
                        <li data-target="#main-slide" data-slide-to="4"></li>
                        <li data-target="#main-slide" data-slide-to="5"></li>
                        <li data-target="#main-slide" data-slide-to="6"></li>
                    </ol>
                   
                    <div class="carousel-inner" style={{maxHeight:'450px'}}>
                        <div class="item active">
                            <img class="img-responsive" src="images/slider/1.jpg" alt="slider"/>
                        </div>
                       
                        <div class="item">
                            <img class="img-responsive" src="images/slider/2.jpg" alt="slider"/>
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="images/slider/3.jpg" alt="slider"/>
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="images/slider/4.jpg" alt="slider"/>
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="images/slider/5.jpg" alt="slider"/>
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="images/slider/6.jpg" alt="slider"/>
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="images/slider/7.jpg" alt="slider"/>
                        </div>

                       
                    </div>
                    
                    <a class="left carousel-control" href="#main-slide" data-slide="prev">
                        <span><i class="fa fa-angle-left"></i></span>
                    </a>
                    <a class="right carousel-control" href="#main-slide" data-slide="next">
                        <span><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
               
            </section>
           

        </div>
    );
}

export default Slider;

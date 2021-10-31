import React from 'react';



function Slider() {
    return (
        <div>
            <section id="home">
                
                <div id="main-slide" className="carousel slide" data-ride="carousel" style={{marginTop:"-50px", marginBottom:"20px"}}>

                   
                    <ol className="carousel-indicators">
                        <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                        <li data-target="#main-slide" data-slide-to="1"></li>
                        <li data-target="#main-slide" data-slide-to="2"></li>
                        <li data-target="#main-slide" data-slide-to="3"></li>
                        <li data-target="#main-slide" data-slide-to="4"></li>
                        <li data-target="#main-slide" data-slide-to="5"></li>
                        <li data-target="#main-slide" data-slide-to="6"></li>
                    </ol>
                   
                    <div className="carousel-inner" style={{maxHeight:'450px'}}>
                        <div className="item active">
                            <img className="img-responsive" src="/images/slider/1.jpg" alt="slider"/>
                        </div>
                       
                        <div className="item">
                            <img className="img-responsive" src="/images/slider/2.jpg" alt="slider"/>
                        </div>
                        <div className="item">
                            <img className="img-responsive" src="/images/slider/3.jpg" alt="slider"/>
                        </div>
                        <div className="item">
                            <img className="img-responsive" src="/images/slider/4.jpg" alt="slider"/>
                        </div>
                        <div className="item">
                            <img className="img-responsive" src="/images/slider/5.jpg" alt="slider"/>
                        </div>
                        <div className="item">
                            <img className="img-responsive" src="/images/slider/6.jpg" alt="slider"/>
                        </div>
                        <div className="item">
                            <img className="img-responsive" src="/images/slider/7.jpg" alt="slider"/>
                        </div>

                       
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

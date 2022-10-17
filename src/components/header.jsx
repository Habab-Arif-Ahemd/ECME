import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import React, { Component } from "react";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "", right: "59px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: "99", left: "256px" }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
};
export const Header = (props) => {
  
  return (
    
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
            
              <div className='col-xs-6 col-md-5  intro-text'>
                <p className="ps" style={{color:"#BB7222" }} >
                CELEBRATE YOUR ESSENCE
                </p>
                <span className="span">
                  {props.data ? props.data.title : 'Loading'}
                  <span> </span>
                </span>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                {/* <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '} */}
              </div>

              <div className="col-2 col-xs-4 col-md-6">
            {" "}
              
{/*             <img src="img/homepagewomern.png" className="img-responsive-Header" alt="" />{" "}
 */}

<div className='dd'>
<Carousel {...settings}>
                <div>
                <img src="img/homepagewomern.png" className="img-responsive-Header" alt="" />{" "}                    <p className="legend">ECME
 1</p>
                </div>
                <div>
                <img src="img/homepagewomern.png" className="img-responsive-Header" alt="" />{" "}                    <p className="legend">ECME
 2</p>
                </div>
                <div>
                <img src="img/homepagewomern.png" className="img-responsive-Header" alt="" />{" "}                    <p className="legend">ECME
 3</p>
                </div>
            </Carousel>
</div>



          </div>
          <div className="col-xs-2 col-md-1">
          <img src="img/MATURE GLAM OH GLAM.png" className="img--GLAM" alt="" />{" "}

            {" "}
          </div>
          
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

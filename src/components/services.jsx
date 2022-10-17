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

function SampleNextArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "", right: "-44px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: "99", left: "-59px" }}
      onClick={onClick}
    />
  );
}
class Services extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
    const settings2 = {
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow2 />,
      nextArrow: <SampleNextArrow2 />,
      Width:90,
    };
    return (
      <div id="services" className="text-center">
        <div className="">
          <div className="section-title">
            <Slider {...settings}>
              <div>
                <img src="img/slider/slide1.png" className="" />
              </div>
              <div>
                <img src="img/slider/slide2.png" className="" />
              </div>
              <div>
                <img src="img/slider/slide3.png" className="" />
              </div>
              <div>
                <img src="img/slider/slide5.png" className="" />
              </div>
              <div>
                <img src="img/slider/slide2.png" className="" />
              </div>
              <div>
                <img src="img/slider/slide5.png" className="" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="hi">
          <div className="">
            <div className="container">
              <h2>Packages of the Products </h2>
              <div className="section-title ">
                  <Slider {...settings2}>
                    
                    <div class="card ">
                      <div class="card-header">
                        <img src="img/slider/card.png" alt="rover" />
                        <span class="tag tag-teal up">10%OFF</span>

                      </div>
                      <div class="card-body">
                        <h4>
                        Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis                         </h4>
                        
                        <div class="section-title ">
                          
                        <button className="tag tag-teal bb "> ADD To CARD</button>
                        </div>
                      </div>
                    </div>
                    <div class="card ">
                      <div class="card-header">
                        <img src="img/slider/card.png" alt="rover" />
                        <span class="tag tag-teal up">10%OFF</span>

                      </div>
                      <div class="card-body">
                        <h4>
                        Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis                         </h4>
                        
                        <div class="section-title ">
                          
                        <button className="tag tag-teal bb "> ADD To CARD</button>
                        </div>
                      </div>
                    </div>
                    <div class="card ">
                      <div class="card-header">
                        <img src="img/slider/card.png" alt="rover" />
                        <span class="tag tag-teal up">10%OFF</span>

                      </div>
                      <div class="card-body">
                        <h4>
                        Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis                         </h4>
                        
                        <div class="section-title ">
                          
                        <button className="tag tag-teal bb "> ADD To CARD</button>
                        </div>
                      </div>
                    </div>
                    <div class="card ">
                      <div class="card-header">
                        <img src="img/slider/card.png" alt="rover" />
                        <span class="tag tag-teal up">10%OFF</span>

                      </div>
                      <div class="card-body">
                        <h4>
                        Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis                         </h4>
                        
                        <div class="section-title ">
                          
                        <button className="tag tag-teal bb "> ADD To CARD</button>
                        </div>
                      </div>
                    </div>
                    <div class="card ">
                      <div class="card-header">
                        <img src="img/slider/card.png" alt="rover" />
                        <span class="tag tag-teal up">10%OFF</span>

                      </div>
                      <div class="card-body">
                        <h4>
                        Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis                         </h4>
                        
                        <div class="section-title ">
                          
                        <button className="tag tag-teal bb "> ADD To CARD</button>
                        </div>
                      </div>
                    </div>
                   
                  </Slider>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;

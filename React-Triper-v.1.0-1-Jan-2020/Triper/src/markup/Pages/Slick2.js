import React, { Component } from 'react'
import Slider from "react-slick";
// import { Link } from 'react-router-dom';


const destination = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        bg: require('./../../images/tour/pic1.jpg'),
        title: 'Eiffel Tower'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        bg: require('./../../images/tour/pic3.jpg'),
        title: 'South America'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        bg: require('./../../images/tour/pic6.jpg'),
        title: 'Australia '
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        bg: require('./../../images/tour/pic3.jpg'),
        title: 'South America'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        bg: require('./../../images/tour/pic6.jpg'),
        title: 'Australia '
    },
]


var bg1 = require('./../../images/background/bg1.jpg');

function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div className="la la-angle-right nav-right"  onClick={onClick}/>
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div className="la la-angle-left nav-left" onClick={onClick}/>
  );
}


class Slick2 extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            speed: 2000,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
            // className: "center",
            // centerMode: true,
            // centerPadding: "60px",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <div>
                <div className="section-full bg-white content-inner-1 testimonial-one-area overlay-black-dark" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                    <div className="container">
                        <div className="section-head style1 text-center text-white">
                            <h2 className="box-title">What Our Users Say</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider className="testimonial-center nav-btn-center-lr white" {...settings}>
                                    {destination.map((item, index) => (
                                        <div className="item">
                                            <div className="testimonial-1 style-2" style={{ backgroundImage: "url(" + item.bg + ")" }}>
                                                <div className="testimonial-detail clearfix">
                                                    <div className="testimonial-pic radius">
                                                        <img src={item.image} width="100" height="100" alt="" />
                                                    </div>
                                                    <strong className="testimonial-name text-primary">Harry Parker</strong>
                                                    <span className="testimonial-position">South America</span>
                                                </div>
                                                <div className="testimonial-text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Slick2;
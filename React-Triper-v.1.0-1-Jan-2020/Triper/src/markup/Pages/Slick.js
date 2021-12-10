import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const destination = [
    {
        image: require('./../../images/gallery/destinations/pic1.jpg'),
        title: 'Eiffel Tower'
    },
    {
        image: require('./../../images/gallery/destinations/pic2.jpg'),
        title: 'South America'
    },
    {
        image: require('./../../images/gallery/destinations/pic3.jpg'),
        title: 'Australia '
    },
    {
        image: require('./../../images/gallery/destinations/pic4.jpg'),
        title: 'India'
    },
    {
        image: require('./../../images/gallery/destinations/pic5.jpg'),
        title: 'Philippines '
    },
    {
        image: require('./../../images/gallery/destinations/pic3.jpg'),
        title: 'Australia'
    },
]


class Slick extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 5,
            infinite: true,
            autoplay: false,
            speed: 2000,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 2,
				  }
				}
			]
        };
        return (
            <div>
                <div className="bg-white content-inner-1">
                    <div className="container">
                        <div className="section-head d-flex text-black">
                            <div className="flex-grow-1">
                                <h2 className="text-uppercase m-b0">Popular Destinations</h2>
                                <p className="m-b0">CHOOSE YOUR NEXT DESTINATION</p>
                            </div>
                            <div className="align-self-center">
                                <Link to={'/packages'} className="site-button button-md pull-right m-t5">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="section-content">
                        <Slider className="destination" {...settings}>
                            {destination.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect zoom-slow dlab-img-overlay2">
                                            <img src={item.image} alt="" />
                                            <div className="dlab-info-has p-a20 no-hover ">
                                                <div className="dlab-info-has-text">
                                                    <h3 className="text-white">{item.title} <span className="text-primary pull-right">4 tours</span></h3>
                                                    <Link to={'/packages'} className="site-button-link">View All Tours</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        )
    }
}
export default Slick;
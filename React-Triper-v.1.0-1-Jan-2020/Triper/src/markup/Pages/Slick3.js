import React, { Component } from 'react'
import Slider from "react-slick";
// import { Link } from 'react-router-dom';

const destination = [
    {
        image: require('./../../images/background/bg1.jpg'),
        title: 'Eiffel Tower'
    },
    {
        image: require('./../../images/background/bg2.jpg'),
        title: 'South America'
    },
    {
        image: require('./../../images/background/bg3.jpg'),
        title: 'Australia '
    },
]




class Slick3 extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
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
            <Slider className="slider-carousel" {...settings}>
                {destination.map((item, index) => (
                    <div class="item" key={index}>
                        <div class="dlab-box overlay-black-middle">
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                ))}
            </Slider>

        )
    }
}
export default Slick3;
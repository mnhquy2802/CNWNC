import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';


const aboutBlog = [
    {
        image: require('./../../images/blog/grid/pic1.jpg'),
        date: 'September 10, 2017',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
        date: 'September 10, 2017',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic3.jpg'),
        date: 'September 10, 2017',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic4.jpg'),
        date: 'September 10, 2017',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
]

var bg1 = require('./../../images/background/bg1.jpg');
var bg3 = require('./../../images/banner/bnr1.jpg');

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="la la-angle-right nav-right"  onClick={onClick}/>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="la la-angle-left nav-left" onClick={onClick}/>
  );
}

class About extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 3,
            infinite: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
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
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">About Us</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Home</Link></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-block">
                    <div className="section-full content-inner overlay-white-middle">
                        <div className="container">
                            <div className="row align-items-start m-b20">
                                <div className="col-md-12 col-lg-6">
                                    <h2>Hello. Our agency has been present for over 20 years. We make the best for all our customers.</h2>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 m-b30 col-12"><img src={require('./../../images/blog/default/thum2.jpg')} alt="" /></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 m-b30 col-12"><img src={require('./../../images/blog/default/thum3.jpg')} alt="" /></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6 m-b30">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon ti-bar-chart text-primary"></i>
                                            <span className="counter">7652</span>
                                        </div>
                                        <span className="counter-text">Completed Projects</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6 m-b30">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon ti-user text-primary"></i>
                                            <span className="counter">4562</span>
                                        </div>
                                        <span className="counter-text">Happy Clients</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6 m-b30">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon ti-headphone-alt text-primary"></i>
                                            <span className="counter">3569</span>
                                        </div>
                                        <span className="counter-text">Questions Answered</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6 m-b30">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon ti-cup text-primary"></i>
                                            <span className="counter">2089</span>
                                        </div>
                                        <span className="counter-text">Awards's</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-full bg-white content-inner-2 bgeffect overlay-black-middle" style={{ backgroundImage: "url(" + bg1 + ")", backgroundSize: 'cover' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center col-md-12">
                                    <div className="add-area">
                                        <h3>1000 $ for person - 6 nights</h3>
                                        <h2>Discount <span className="text-primary">10-30%</span> Off</h2>
                                        <p>If you’re looking for a truly memorable family break here you find the lowest price on the right hotel for you. It's indescribable. Stay up to date and check out the deals for these trending destinations.</p>
                                        <Link className="site-button white">See Promotion Tours</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-inner-2 overlay-white-middle">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="text-uppercase m-b0">Our Latest Blog</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                            </div>
                            <Slider className="blog-carousel nav-btn-center-lr btn-1" {...settings}>
                                {aboutBlog.map((item, index) => (
                                    <div className="item p-3" key={index}>
                                        <div className="blog-post blog-grid blog-style-1">
                                            <div className="dlab-post-media dlab-img-effect radius-sm">
                                                <Link><img src={item.image} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-date">{item.date}</li>
                                                        <li className="post-comment"><Link>{item.comment}</Link> </li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-title ">
                                                    <h5 className="post-title font-20"><Link to={'./blogdetails'}>{item.title}</Link></h5>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <Link to={'./blogdetails'} title="READ MORE" rel="bookmark" className="site-button-link border-link black">READ MORE</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default About;
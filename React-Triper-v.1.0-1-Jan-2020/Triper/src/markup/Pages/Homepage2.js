import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Slick2 from './Slick2';
import HomeBlog from './../Element/HomeBlog';
import { Link } from 'react-router-dom';

import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Tab2 from './../Pages/Tab2';

const content = [
    {
        button: '-25% OFF ONLY THIS MONTH',
        title: 'SEA TOURS ONLY THIS MONTH',
		description: 'Discover amzaing places at exclusive deals',
        image: require('./../../images/main-slider/slide1.jpg'),
    },
    {
        button: '-25% OFF ONLY THIS MONTH',
        title: 'SEA TOURS ONLY THIS MONTH',
		description: 'Discover amzaing places at exclusive deals',
        image: require('./../../images/main-slider/slide2.jpg'),
    },
    {
        button: '-25% OFF ONLY THIS MONTH',
        title: 'SEA TOURS ONLY THIS MONTH',
		description: 'Discover amzaing places at exclusive deals',
        image: require('./../../images/main-slider/slide3.jpg'),
    }
];




var bg1 = require('./../../images/background/bg1.jpg');



class Homepage2 extends Component {

    render() {
		
		const settings = {
		  dots: false,
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  
		};
		
        return (
            <div>
                <Header2 />
                <Slider className="slider-wrapper" {...settings}>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <button className="site-button react-slide-btn">{item.button}</button>
                                <h1 className="react-slide-title">{item.title}</h1>
                                <p className="react-slide-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="content-block" id="page_content">
                    <Tab2 />

                    <div className="section-full bg-white content-inner-2">
                        <div className="container">
                            <div className="section-head style1 text-black text-center">
                                <h2>Popular Destinations</h2>
                                <div className="dlab-separator bg-primary"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="featured-bx style2">
                                        <div className="featured-media">
                                            <img src={require('./../../images/featured/pic1.jpg')} alt="" />
                                            <div className="featured-tag">5 Days</div>
                                        </div>
                                        <div className="featured-content text-white">
                                            <div>
                                                <h2 className="title"><Link to={'packages'}>Westorn Europe</Link></h2>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="featured-bx style2">
                                        <div className="featured-media">
                                            <img src={require('./../../images/featured/pic2.jpg')} alt="" />
                                            <div className="featured-tag">7 Days</div>
                                        </div>
                                        <div className="featured-content text-white">
                                            <div>
                                                <h2 className="title"><Link to={'packages'}>Philippines</Link></h2>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="featured-bx style2">
                                        <div className="featured-media">
                                            <img src={require('./../../images/featured/pic3.jpg')} alt="" />
                                            <div className="featured-tag">3 Days</div>
                                        </div>
                                        <div className="featured-content text-white">
                                            <div>
                                                <h2 className="title"><Link to={'packages'}>Friendly Santorini</Link></h2>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="featured-bx style2">
                                        <div className="featured-media">
                                            <img src={require('./../../images/featured/pic4.jpg')} alt="" />
                                            <div className="featured-tag">2 Days</div>
                                        </div>
                                        <div className="featured-content text-white">
                                            <div>
                                                <h2 className="title"><Link to={'packages'}>Australia</Link></h2>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="featured-bx style2">
                                        <div className="featured-media">
                                            <img src={require('./../../images/featured/pic5.jpg')} alt="" />
                                            <div className="featured-tag">6 Days</div>
                                        </div>
                                        <div className="featured-content text-white">
                                            <div>
                                                <h2 className="title"><Link to={'packages'}>South America </Link></h2>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="section-full content-inner bg-img-fix overlay-black-middle" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                        <div className="container">
                            <div className="video-banner-box">
                                <div>
                                    <Link to={'https://www.youtube.com/watch?v=Dj6CKxQue7U'} className="popup-youtube video play-btn"><i className="fa fa-play"></i></Link>
                                    <h2 className="title">Traveling Highlight</h2>
                                    <h4 className="sub-title">Your New Traveling Idea</h4>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-full content-inner bg-gray">
                        <div className="container">
                            <div className="section-head style1 text-black text-left text-center">
                                <h2>Best Holiday Packages</h2>
                                <div className="dlab-separator bg-primary"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="dlab-box packages-bx">
                                        <div className="dlab-media">
                                            <Link to={'listing-details-1'}><img src={require('./../../images/gallery/img5.jpg')} alt="" /></Link>
                                            <span className="tag yellow">Best Seller</span>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="head-title">
                                                <span className="time">2 Days 3 Night</span>
                                                <h4 className="dlab-title"><Link to={'listing-details-1'}>Weekdays in South America</Link></h4>
                                                <span className="location">Peelamedu, Cbe, South America</span>
                                            </div>
                                            <div className="package-content">
                                                <div className="review-bx">
                                                    <ul className="rating-star">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <span>(5 Review)</span>
                                                </div>
                                                <div className="price-bx">
                                                    <del className="price-del">$700</del>
                                                    <span className="price-main">$550</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="col-lg-6">
                                    <div className="dlab-box packages-bx">
                                        <div className="dlab-media">
                                            <Link to={'listing-details-1'}><img src={require('./../../images/gallery/img2.jpg')} alt="" /></Link>
                                            <span className="tag yellow">Best Seller</span>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="head-title">
                                                <span className="time">8 Days 7 Night</span>
                                                <h4 className="dlab-title"><Link to={'listing-details-1'}>Weekdays in India</Link></h4>
                                                <span className="location">Peelamedu, Cbe, India</span>
                                            </div>
                                            <div className="package-content">
                                                <div className="review-bx">
                                                    <ul className="rating-star">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <span>(4 Review)</span>
                                                </div>
                                                <div className="price-bx">
                                                    <del className="price-del">$457</del>
                                                    <span className="price-main">$350</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="dlab-box packages-bx">
                                        <div className="dlab-media">
                                            <Link to={'listing-details-1'}><img src={require('./../../images/gallery/img3.jpg')} alt="" /></Link>
                                            <span className="tag yellow">Best Seller</span>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="head-title">
                                                <span className="time">8 Days 7 Night</span>
                                                <h4 className="dlab-title"><Link to={'listing-details-1'}>Weekdays in Australia</Link></h4>
                                                <span className="location">Peelamedu, Cbe, Australia</span>
                                            </div>
                                            <div className="package-content">
                                                <div className="review-bx">
                                                    <ul className="rating-star">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <span>(2 Review)</span>
                                                </div>
                                                <div className="price-bx">
                                                    <del className="price-del">$250</del>
                                                    <span className="price-main">$200</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="dlab-box packages-bx">
                                        <div className="dlab-media">
                                            <Link to={'listing-details-1'}><img src={require('./../../images/gallery/img4.jpg')} alt="" /></Link>
                                            <span className="tag yellow">Best Seller</span>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="head-title">
                                                <span className="time">8 Days 7 Night</span>
                                                <h4 className="dlab-title"><Link to={'listing-details-1'}>Weekdays in Philippines</Link></h4>
                                                <span className="location">Weekdays in Philippines</span>
                                            </div>
                                            <div className="package-content">
                                                <div className="review-bx">
                                                    <ul className="rating-star">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <span>(8 Review)</span>
                                                </div>
                                                <div className="price-bx">
                                                    <del className="price-del">$840</del>
                                                    <span className="price-main">$710</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slick2 />
                    <HomeBlog />




                </div>

                <Footer />
























                {/* <header className="site-header mo-left header header-2">
                    <div className="top-bar">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-between">
                                <div className="dlab-topbar-left">
                                    <ul>
                                        <li><Link className="site-button-link" to={'hotel'}>Hotels</Link></li>
                                        <li><Link className="site-button-link" to={'place'}>Places</Link></li>
                                        <li><Link className="site-button-link" to={'packages'}>Packages</Link></li>
                                    </ul>
                                </div>
                                <div className="dlab-topbar-right top-login">
                                    <ul>
                                        <li><Link to={'login'} className="site-button-link">Login</Link></li>
                                        <li><Link to={'register'} className="site-button-link">Register</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header navbar-expand-lg main-bar-wraper">
                        <div className="main-bar clearfix onepage">
                            <div className="container-fluid clearfix">
                                <div className="logo-header mostion">
                                    <Link to={'index'}><img src={require('./../../images/logo-2.png')} alt="" /></Link>
                                </div>
                                <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <button id="quik-search-btn" type="button" className="site-button outline black"><i className="fa fa-search"></i></button>
                                        <Link to={'add-listing'} className="site-button outline m-l5">Book Now</Link>
                                    </div>
                                </div>
                                <div className="dlab-quik-search bg-primary search-style-1">
                                    <form action="#">
                                        <input name="search" value="" type="text" className="form-control" placeholder="Type to search" />
                                        <span id="quik-search-remove"><i className="ti-close"></i></span>
                                    </form>
                                </div>
                                <div className="header-nav navbar-collapse collapse navbar myNavbar justify-content-center" id="navbarNavDropdown">
                                    <ul className="nav navbar-nav">
                                        <li><Link to={' '}>Home <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to={'index'} className="dez-page">Home 1</Link></li>
                                                <li><Link to={'index-2'} className="dez-page">Home 2 <span className="new-page menu-new">New</span></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to={' '}>Pages <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to={' '}>Listing <i className="fa fa-angle-right"></i> <span className="new-page menu-new">New</span></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link to={'add-listing'} className="dez-page">Add Listing<span className="new-page menu-new">New</span></Link></li>
                                                        <li><Link to={'hotel'}>Hotels Listing</Link></li>
                                                        <li><Link to={'place'}>Places Listing</Link></li>
                                                        <li><Link to={'packages'}>Tour Packages</Link></li>
                                                        <li><Link to={'listing-details-1'} className="dez-page">Listing Details 1<span className="new-page menu-new">New</span></Link></li>
                                                        <li><Link to={'listing-details-2'} className="dez-page">Listing Details 2<span className="new-page menu-new">New</span></Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to={'about-us'} className="dez-page">About Us</Link></li>
                                                <li><Link to={'booking-details'}>Booking Details</Link></li>
                                                <li><Link to={'gallery'}>Gallery</Link></li>
                                                <li><Link to={'calendar'}>Calendar <span className="new-page menu-new">New</span></Link></li>
                                                <li><Link to={'coming-soon'} className="dez-page">Coming Soon</Link></li>
                                                <li><Link to={'error-404'} className="dez-page">Error 404</Link></li>
                                                <li><Link to={'login'} className="dez-page">Login</Link></li>
                                                <li><Link to={' '}>Register <i className="fa fa-angle-right"></i> <span className="new-page menu-new">New</span></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link to={'register'} className="dez-page">Register</Link></li>
                                                        <li><Link to={'register-2'} className="dez-page">Register 2 <span className="new-page menu-new">New</span></Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link to={' '}>Hotels <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to={'hotel'} className="dez-page">Hotel</Link></li>
                                                <li><Link to={'hotel-booking'} className="dez-page">Hotel Booking</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to={' '}>Blog <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to={'blog-classic'} className="dez-page">Classic</Link></li>
                                                <li><Link to={'blog-classic-sidebar'} className="dez-page">Classic Sidebar</Link></li>
                                                <li><Link to={'blog-detailed-grid'} className="dez-page">Detailed Grid</Link></li>
                                                <li><Link to={'blog-detailed-grid-sidebar'} className="dez-page">Detailed Grid Sidebar</Link></li>
                                                <li><Link to={'blog-left-img'} className="dez-page">Left Image Sidebar</Link></li>
                                                <li><Link to={'blog-details'} className="dez-page">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to={' '}>Our Portfolio <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to={'portfolio-grid-2'} className="dez-page">Portfolio Grid 2 </Link></li>
                                                <li><Link to={'portfolio-grid-3'} className="dez-page">Portfolio Grid 3 </Link></li>
                                                <li><Link to={'portfolio-grid-4'} className="dez-page">Portfolio Grid 4 </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to={'contact'} className="dez-page">Contact Us</></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header> */}
            </div>
        )
    }
}
export default Homepage2;
import React, { useState } from 'react'
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import { Link } from 'react-router-dom';
import { TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';


var bg3 = require('./../../images/banner/bnr1.jpg');

    const ListingDetails = (props) => {
        const [activeTab, setActiveTab] = useState('1');
    
        const toggle = tab => {
            if (activeTab !== tab) setActiveTab(tab);
        }
    
        return (
            <div>
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Add Listing</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to={''}>Home</Link></li>
                                    <li>Add Listing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing-details-head">
                    <div className="container">
                        <div className="listing-info-box">
                            <div className="listing-theme-logo">
                                <img src={require('./../../images/gallery/img1.jpg')} alt="" />
                            </div>
                            <div className="listing-info">
                                <div className="listing-info-left">
                                    <h3 className="title">Listing Directory</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className="listing-info-right text-center">
                                    <Link to={''} className="site-button gray mr-3"><i className="la la-heart-o m-r5"></i>  Favorite </Link>
                                    <div className="dropdown dropdown-btn">
                                        <button className="site-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="la la-share m-r5"></i>  Share
								</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing-details-nav">
                    <div className="container">
                        <ul className="listing-nav nav justify-content-center">
                            <li>
                                <Link className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}><i className="la la-home"></i><span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}><i className="la la-file-text"></i><span>Description</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}><i className="la la-list-alt"></i><span>Listing Features</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}><i className="la la-image"></i><span>Photos</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={classnames({ active: activeTab === '5' })}
                                    onClick={() => { toggle('5'); }}><i className="la la-video-camera"></i><span>Videos</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={classnames({ active: activeTab === '6' })}
                                    onClick={() => { toggle('6'); }}><i className="la la-calendar-check-o"></i><span>Events</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={classnames({ active: activeTab === '7' })}
                                    onClick={() => { toggle('7'); }}><i className="la la-star-o"></i><span>Reviews</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>



                <div className="section-full listing-details-content">
                    <div className="container">
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7 col-md-12">
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-star-o m-r5"></i> average reviews</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="average-reviews-box">
                                                    <div className="average-reviews-single">
                                                        <div className="average-reviews-info">
                                                            <h4 className="average-reviews">7.7</h4>
                                                            <div className="clearfix m-b5">
                                                                <h4 className="average-reviews-in">/ 10</h4>
                                                                <span>Quality</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="average-reviews-list">
                                                        <ul>
                                                            <li>
                                                                <div className="average-reviews-info">
                                                                    <span>Quality</span>
                                                                    <h4 className="average-reviews">8.5</h4>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="average-reviews-info">
                                                                    <span>Location</span>
                                                                    <h4 className="average-reviews">7.5</h4>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="average-reviews-info">
                                                                    <span>Space</span>
                                                                    <h4 className="average-reviews">7.4</h4>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="average-reviews-info">
                                                                    <span>Service</span>
                                                                    <h4 className="average-reviews">7.9</h4>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="average-reviews-info">
                                                                    <span>Price</span>
                                                                    <h4 className="average-reviews">7.4</h4>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-footer content-btn">
                                                <Link data-toggle="modal" data-target="#favorite" to={''} className="site-button"><i className="la la-star-o m-r5"></i> ADD A REVIEW</Link>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-file-text m-r5"></i> description</h3>
                                            </div>
                                            <div className="content-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
                                                <p>eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>


                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-list-alt m-r5"></i>listing features</h3>
                                            </div>
                                            <div className="content-body">
                                                <ul className="icon-box-list list-col-4">
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-life-buoy"></i>
                                                        </div>
                                                        <span>Expert</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-cutlery"></i>
                                                        </div>
                                                        <span>Restaurant</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-shopping-cart"></i>
                                                        </div>
                                                        <span>Shopping</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-line-chart"></i>
                                                        </div>
                                                        <span>State Street</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-lemon-o"></i>
                                                        </div>
                                                        <span>Tea Tasting</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-wifi"></i>
                                                        </div>
                                                        <span>Wifi</span>
                                                    </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-file-image-o"></i> photos</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="widget widget_gallery gallery-grid-4 lightgallery">
                                                    <ul>
                                                        <li>
                                                            <span className="check-km" title="Light Gallery Grid 1">
                                                                <Link to={''}>
                                                                    <div className="dlab-post-thum"><img src={require('./../../images/gallery/img1.jpg')} alt="" /></div>
                                                                </Link>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="check-km" title="Light Gallery Grid 1">
                                                                <Link to={''}>
                                                                    <div className="dlab-post-thum"><img src={require('./../../images/gallery/img2.jpg')} alt="" /></div>
                                                                </Link>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="check-km" title="Light Gallery Grid 1">
                                                                <Link to={''}>
                                                                    <div className="dlab-post-thum"><img src={require('./../../images/gallery/img3.jpg')} alt="" /></div>
                                                                </Link>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="check-km" title="Light Gallery Grid 1">
                                                                <Link to={''}>
                                                                    <div className="dlab-post-thum"><img src={require('./../../images/gallery/img4.jpg')} alt="" /></div>
                                                                    <div className="more-images">
                                                                        <div>
                                                                            <strong>6</strong>
                                                                            <span>Images</span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="content-footer content-btn">
                                                <Link to={''} className="site-button">See All</Link>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-video-camera m-r5"></i>videos</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="widget widget_video video-grid-4">
                                                    <ul>
                                                        <li>
                                                            <div className="dlab-post-thum video-bx">
                                                                <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                                                <div className="video-play-icon">
                                                                    <Link to={''} className="popup-youtube video"><i className="la la-play"></i></Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="content-footer content-btn">
                                                <Link to={''} className="site-button">See All</Link>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title"><i className="la la-calendar-check-o m-r5"></i>events</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="listing-bx event-listing m-b10">
                                                            <div className="listing-media">
                                                                <Link to={''}>
                                                                    <img src={require('./../../images/featured/pic3.jpg')} alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="listing-info">
                                                                <h3 className="title"><Link to={''}>Moments To Remember From Directory</Link></h3>
                                                                <ul className="event-meta">
                                                                    <li className="event-date"><span>SEP</span> <strong>04</strong></li>
                                                                    <li>Tuesday 08:00</li>
                                                                    <li>Sydney NSW, Australia</li>
                                                                    <li>44 people interested</li>
                                                                </ul>
                                                            </div>
                                                            <div className="event-bottom">
                                                                <ul>
                                                                    <li className="event-hosted"><span>Hosted By </span> <Link to={''}>John Smith</Link></li>
                                                                    <li><Link to={''}><i className="la la-star-o"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="listing-bx event-listing m-b10">
                                                            <div className="listing-media">
                                                                <Link to={''}>
                                                                    <img src={require('./../../images/featured/pic2.jpg')} alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="listing-info">
                                                                <h3 className="title"><Link to={''}>Moments To Remember From Directory</Link></h3>
                                                                <ul className="event-meta">
                                                                    <li className="event-date"><span>SEP</span> <strong>04</strong></li>
                                                                    <li>Tuesday 08:00</li>
                                                                    <li>Sydney NSW, Australia</li>
                                                                    <li>44 people interested</li>
                                                                </ul>
                                                            </div>
                                                            <div className="event-bottom">
                                                                <ul>
                                                                    <li className="event-hosted"><span>Hosted By </span> <Link to={''}>John Smith</Link></li>
                                                                    <li><Link to={''}><i className="la la-star-o"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-footer content-btn">
                                                <Link to={''} className="site-button">See All</Link>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="add-reviews">
                                                <h5 className="title m-b0"><span className="text-primary">24 </span>Reviews For Triper</h5>
                                                <Link data-toggle="modal" data-target="#favorite" to={''} className="site-button"><i className="la la-star-o m-r5"></i> Add a review</Link>
                                            </div>
                                        </div>

                                        <div className="comments-review-area">
                                            <div className="comments-review-box">
                                                <div className="review-header">
                                                    <div className="review-comment-author">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="comment-info">
                                                            <div className="info-group">
                                                                <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                            </div>
                                                            <span className="comment-date">July 25, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix d-flex">
                                                        <div className="average-reviews-single">
                                                            <div className="average-reviews-info">
                                                                <h4 className="average-reviews">7.7</h4>
                                                                <div className="clearfix">
                                                                    <h4 className="average-reviews-in">/ 10</h4>
                                                                    <span>Quality</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                            <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="fa fa-ellipsis-v"></i>
                                                            </button>
                                                            <div className="dropdown-menu  dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                                <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-body">
                                                    <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                    <p className="review-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                                </div>
                                                <div className="review-footer">
                                                    <div className="review-btn">
                                                        <ul>
                                                            <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                            <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                            <li>
                                                                <div className="dropdown dropdown-btn">
                                                                    <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="la la-share-square-o m-r5"></i>  Share
															</button>
                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                            <i className="fa fa-facebook"></i>
                                                                            <span>Facebook</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                            <i className="fa fa-twitter"></i>
                                                                            <span> Twitter</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                            <i className="fa fa-pinterest"></i>
                                                                            <span> Pinterest</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                            <i className="fa fa-linkedin"></i>
                                                                            <span> Linkedin</span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="review-meta">
                                                            <li>4 Liked</li>
                                                            <li>4 Shared</li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-list">
                                                        <ul>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic3.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <span className="comment-date">July 25, 2019</span>
                                                                        </div>
                                                                        <p className="comment-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic2.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <span className="comment-date">July 25, 2019</span>

                                                                        </div>
                                                                        <p className="comment-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-form">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="form-area">
                                                            <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comments-review-box">
                                                <div className="review-header">
                                                    <div className="review-comment-author">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="comment-info">
                                                            <div className="info-group">
                                                                <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                            </div>
                                                            <span className="comment-date">July 25, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix d-flex">
                                                        <div className="average-reviews-single">
                                                            <div className="average-reviews-info">
                                                                <h4 className="average-reviews">7.7</h4>
                                                                <div className="clearfix">
                                                                    <h4 className="average-reviews-in">/ 10</h4>
                                                                    <span>Quality</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                            <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="fa fa-ellipsis-v"></i>
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                                <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-body">
                                                    <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                    <p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                </div>
                                                <div className="review-footer">
                                                    <div className="review-btn">
                                                        <ul>
                                                            <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                            <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                            <li>
                                                                <div className="dropdown dropdown-btn">
                                                                    <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="la la-share-square-o m-r5"></i>  Share
															</button>
                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                            <i className="fa fa-facebook"></i>
                                                                            <span>Facebook</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                            <i className="fa fa-twitter"></i>
                                                                            <span> Twitter</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                            <i className="fa fa-pinterest"></i>
                                                                            <span> Pinterest</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                            <i className="fa fa-linkedin"></i>
                                                                            <span> Linkedin</span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="review-meta">
                                                            <li>4 Liked</li>
                                                            <li>4 Shared</li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-list">
                                                        <ul>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic3.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <span className="comment-date">July 25, 2019</span>
                                                                        </div>
                                                                        <p className="comment-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic2.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <span className="comment-date">July 25, 2019</span>

                                                                        </div>
                                                                        <p className="comment-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-form">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="form-area">
                                                            <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comments-review-box">
                                                <div className="review-header">
                                                    <div className="review-comment-author">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="comment-info">
                                                            <div className="info-group">
                                                                <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                            </div>
                                                            <span className="comment-date">July 25, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix d-flex">
                                                        <div className="average-reviews-single">
                                                            <div className="average-reviews-info">
                                                                <h4 className="average-reviews">7.7</h4>
                                                                <div className="clearfix">
                                                                    <h4 className="average-reviews-in">/ 10</h4>
                                                                    <span>Quality</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                            <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="fa fa-ellipsis-v"></i>
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                                <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-body">
                                                    <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                    <p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <div className="row gallery-img">
                                                        <div className="col-lg-4">
                                                            <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-footer">
                                                    <div className="review-btn">
                                                        <ul>
                                                            <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                            <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                            <li>
                                                                <div className="dropdown dropdown-btn">
                                                                    <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="la la-share-square-o m-r5"></i>  Share
															</button>
                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                            <i className="fa fa-facebook"></i>
                                                                            <span>Facebook</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                            <i className="fa fa-twitter"></i>
                                                                            <span> Twitter</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                            <i className="fa fa-pinterest"></i>
                                                                            <span> Pinterest</span>
                                                                        </Link>
                                                                        <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                            <i className="fa fa-linkedin"></i>
                                                                            <span> Linkedin</span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="review-meta">
                                                            <li>4 Liked</li>
                                                            <li>4 Shared</li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-list">
                                                        <ul>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic3.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <span className="comment-date">July 25, 2019</span>
                                                                        </div>
                                                                        <p className="comment-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic2.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <span className="comment-date">July 25, 2019</span>

                                                                        </div>
                                                                        <p className="comment-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-form">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="form-area">
                                                            <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-xl-4 col-lg-5 col-md-12 sticky-top">
                                        <aside className="side-bar listing-side-bar">
                                            <div className="content-box">
                                                <div className="content-header">
                                                    <h3 className="title"><i className="la la-bullhorn m-r5"></i>Best Seller</h3>
                                                </div>
                                                <div className="content-body">
                                                    <div className="tour-booking-form">
                                                        <div className="tour-booking-head">
                                                            <del>$700</del>
                                                            <span>$650</span>
                                                        </div>
                                                        <form className="row sp15">
                                                            <div className="form-group col-md-6">
                                                                <input type="text" className="form-control" placeholder="Name" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="text" className="form-control" placeholder="Surname" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="email" className="form-control" placeholder="Email" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="text" className="form-control" placeholder="Guests" />
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <input type="text" className="form-control" placeholder="Phone" />
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <textarea className="form-control" placeholder="Message"></textarea>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <button className="site-button btn-block text-uppercase button-md">Submit Enquiry</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="content-header">
                                                    <h3 className="title"><i className="la la-bullhorn m-r5"></i>listing sidebar promotion</h3>
                                                </div>
                                                <div className="content-body">
                                                    <div className="widget recent-posts-entry posts-style1 posts-column-2">
                                                        <div className="widget-post-bx">
                                                            <div className="widget-post clearfix">
                                                                <div className="dlab-post-media">
                                                                    <img src={require('./../../images/blog/recent-blog/pic1.jpg')} width="200" height="143" alt="" />
                                                                    <span className="abb-bx">Add</span>
                                                                </div>
                                                                <div className="dlab-post-info">
                                                                    <div className="dlab-post-header">
                                                                        <h6 className="post-title"><Link to={''}>Moments To Remember From Directory</Link></h6>
                                                                        <div className="dlab-post-meta">
                                                                            <ul>
                                                                                <li className="post-rating">
                                                                                    <span className="average-rating">7.0 </span>
                                                                                    <span className="rating-star">
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="widget-post-bx">
                                                            <div className="widget-post clearfix">
                                                                <div className="dlab-post-media">
                                                                    <img src={require('./../../images/blog/recent-blog/pic2.jpg')} width="200" height="143" alt="" />
                                                                    <span className="abb-bx">Add</span>
                                                                </div>
                                                                <div className="dlab-post-info">
                                                                    <div className="dlab-post-header">
                                                                        <h6 className="post-title"><Link to={''}>A Thing Of The Past</Link></h6>
                                                                        <div className="dlab-post-meta">
                                                                            <ul>
                                                                                <li className="post-rating">
                                                                                    <span className="average-rating">7.0 </span>
                                                                                    <span className="rating-star">
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="widget-post-bx">
                                                            <div className="widget-post clearfix">
                                                                <div className="dlab-post-media">
                                                                    <img src={require('./../../images/blog/recent-blog/pic3.jpg')} width="200" height="143" alt="" />
                                                                    <span className="abb-bx">Add</span>
                                                                </div>
                                                                <div className="dlab-post-info">
                                                                    <div className="dlab-post-header">
                                                                        <h6 className="post-title"><Link to={''}>Ten Things Your Competitors</Link></h6>
                                                                        <div className="dlab-post-meta">
                                                                            <ul>
                                                                                <li className="post-rating">
                                                                                    <span className="average-rating">7.0 </span>
                                                                                    <span className="rating-star">
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="widget-post-bx">
                                                            <div className="widget-post clearfix">
                                                                <div className="dlab-post-media">
                                                                    <img src={require('./../../images/blog/recent-blog/pic1.jpg')} width="200" height="143" alt="" />
                                                                    <span className="abb-bx">Add</span>
                                                                </div>
                                                                <div className="dlab-post-info">
                                                                    <div className="dlab-post-header">
                                                                        <h6 className="post-title"><Link to={''}>Remember From Directory</Link></h6>
                                                                        <div className="dlab-post-meta">
                                                                            <ul>
                                                                                <li className="post-rating">
                                                                                    <span className="average-rating">7.0 </span>
                                                                                    <span className="rating-star">
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                        <i className="fa fa-star"></i>
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="content-header">
                                                    <h3 className="title"><i className="la la-map-signs m-r5"></i>business info</h3>
                                                </div>
                                                <div className="content-body">
                                                    <ul className="icon-box-list">
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-envelope"></i>
                                                            </div>
                                                            <span>info@example.com</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-phone"></i>
                                                            </div>
                                                            <span>+91 1 234 5648</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-globe"></i>
                                                            </div>
                                                            <span>https://triper.dexignlab.com/</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-map-marker"></i>
                                                            </div>
                                                            <span>Demo Address #8901 Marmora Road</span>
                                                        </Link></li>
                                                    </ul>
                                                    <ul className="list-inline m-tb20">
                                                        <li><Link to={''} className="site-button sharp"><i className="fa fa-facebook"></i></Link></li>
                                                        <li><Link to={''} className="site-button sharp"><i className="fa fa-google-plus"></i></Link></li>
                                                        <li><Link to={''} className="site-button sharp"><i className="fa fa-linkedin"></i></Link></li>
                                                        <li><Link to={''} className="site-button sharp"><i className="fa fa-instagram"></i></Link></li>
                                                        <li><Link to={''} className="site-button sharp"><i className="fa fa-twitter"></i></Link></li>
                                                    </ul>
                                                    <Link to={''} className="site-button  btn-block gray"><i className="fa fa-envelope"></i> Inbox</Link>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="content-header">
                                                    <h3 className="title"><i className="la la-sitemap m-r5"></i>categories</h3>
                                                </div>
                                                <div className="content-body">
                                                    <ul className="icon-box-list list-col-2">
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-green">
                                                                <i className="la la-life-buoy"></i>
                                                            </div>
                                                            <span>Food & Drink</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-red">
                                                                <i className="la la-cutlery"></i>
                                                            </div>
                                                            <span>Shopping</span>
                                                        </Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="content-header">
                                                    <h3 className="title"><i className="la la-bar-chart m-r5"></i>statistic</h3>
                                                </div>
                                                <div className="content-body">
                                                    <ul className="icon-box-list list-col-2">
                                                        <li>
                                                            <div className="icon-box-info">
                                                                <div className="icon-cell bg-gray">
                                                                    <i className="la la-eye"></i>
                                                                </div>
                                                                <span>13164 Views</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon-box-info">
                                                                <div className="icon-cell bg-gray">
                                                                    <i className="la la-star-o"></i>
                                                                </div>
                                                                <span>24 Ratings</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon-box-info">
                                                                <div className="icon-cell bg-gray">
                                                                    <i className="la la-heart-o"></i>
                                                                </div>
                                                                <span>102 Favorites</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon-box-info">
                                                                <div className="icon-cell bg-gray">
                                                                    <i className="la la-share"></i>
                                                                </div>
                                                                <span>58 Shares</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="content-header">
                                                    <h3 className="title"><i className="la la-tags m-r5"></i>tags</h3>
                                                </div>
                                                <div className="content-body">
                                                    <ul className="icon-box-list list-col-2">
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-life-buoy"></i>
                                                            </div>
                                                            <span>Expert</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-cutlery"></i>
                                                            </div>
                                                            <span>Restaurant</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-shopping-cart"></i>
                                                            </div>
                                                            <span>Shopping</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-line-chart"></i>
                                                            </div>
                                                            <span>State Street</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-lemon-o"></i>
                                                            </div>
                                                            <span>Tea Tasting</span>
                                                        </Link></li>
                                                        <li><Link to={''} className="icon-box-info">
                                                            <div className="icon-cell bg-gray">
                                                                <i className="la la-wifi"></i>
                                                            </div>
                                                            <span>Wifi</span>
                                                        </Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="content-header">
                                                    <h3 className="title"><i className="la la-map-marker m-r5"></i>map</h3>
                                                </div>
                                                <div className="content-body">
                                                    <div id="map3" className="align-self-stretch"></div>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="content-header">
                                                    <h3 className="title">claim listing</h3>
                                                </div>
                                                <div className="content-body">
                                                    <h5>Is this your business?</h5>
                                                    <p>Claim listing is the best way to manage and protect your business.</p>
                                                    <Link to={''} className="site-button m-t5">Claim Now</Link>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>

                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title">description</h3>
                                            </div>
                                            <div className="content-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
                                                <p>eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="3">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title">listing features</h3>
                                            </div>
                                            <div className="content-body">
                                                <ul className="icon-box-list list-col-4">
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-life-buoy"></i>
                                                        </div>
                                                        <span>Expert</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-cutlery"></i>
                                                        </div>
                                                        <span>Restaurant</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-shopping-cart"></i>
                                                        </div>
                                                        <span>Shopping</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-line-chart"></i>
                                                        </div>
                                                        <span>State Street</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-lemon-o"></i>
                                                        </div>
                                                        <span>Tea Tasting</span>
                                                    </Link></li>
                                                    <li><Link to={''} className="icon-box-info">
                                                        <div className="icon-cell bg-gray">
                                                            <i className="la la-wifi"></i>
                                                        </div>
                                                        <span>Wifi</span>
                                                    </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="4">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title">photos</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="widget widget_gallery gallery-grid-4 lightgallery">
                                                    <ul>
                                                        <li>
                                                            <span className="check-km" title="Light Gallery Grid 1">
                                                                <img src={require('./../../images/gallery/img1.jpg')} alt="" />
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="check-km" title="Light Gallery Grid 1">
                                                                <img src={require('./../../images/gallery/img2.jpg')} alt="" />
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="check-km" title="Light Gallery Grid 1">
                                                                <img src={require('./../../images/gallery/img3.jpg')} alt="" />
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="check-km" title="Light Gallery Grid 1">
                                                                <img src={require('./../../images/gallery/img4.jpg')} alt="" />
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="5">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title">videos</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="widget widget_video video-grid-4">
                                                    <ul>
                                                        <li>
                                                            <div className="dlab-post-thum video-bx">
                                                                <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                                                <div className="video-play-icon">
                                                                    <Link to={''} className="popup-youtube video"><i className="la la-play"></i></Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="6">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title">events</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="listing-bx event-listing m-b30">
                                                            <div className="listing-media">
                                                                <Link to={''}>
                                                                    <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="listing-info">
                                                                <h3 className="title"><Link to={''}>Moments To Remember From Directory</Link></h3>
                                                                <ul className="event-meta">
                                                                    <li className="event-date"><span className="text-primary">SEP</span> <strong>04</strong></li>
                                                                    <li>Tuesday 08:00</li>
                                                                    <li>Sydney NSW, Australia</li>
                                                                    <li>44 people interested</li>
                                                                </ul>
                                                            </div>
                                                            <div className="event-bottom">
                                                                <ul>
                                                                    <li className="event-hosted"><span>Hosted By </span> <Link to={''}>John Smith</Link></li>
                                                                    <li><Link to={''}><i className="la la-star-o"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="7">
                                <div className="row">
                                    <div className="col-xl-8">

                                        <div className="comments-review-area">
                                            <div className="comments-review-box">
                                                <div className="review-header">
                                                    <div className="review-comment-author">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="comment-info">
                                                            <div className="info-group">
                                                                <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                            </div>
                                                            <span className="comment-date">July 25, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix d-flex">
                                                        <div className="average-reviews-single">
                                                            <div className="average-reviews-info">
                                                                <h4 className="average-reviews">7.7</h4>
                                                                <div className="clearfix">
                                                                    <h4 className="average-reviews-in">/ 10</h4>
                                                                    <span>Quality</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                            <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="la la-ellipsis-h"></i>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-body">
                                                    <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                    <p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <ul className="review-meta">
                                                        <li>4 Liked</li>
                                                        <li>4 Shared</li>
                                                    </ul>
                                                </div>
                                                <div className="review-footer">
                                                    <div className="review-btn">
                                                        <ul>
                                                            <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                            <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                            <li>
                                                                <div className="dropdown dropdown-btn">
                                                                    <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="la la-share-square-o m-r5"></i>  Share
															</button>
                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                            <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                        <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                            <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                        <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                            <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                        <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                            <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-list">
                                                        <ul>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                        </div>
                                                                        <span className="comment-date">July 25, 2019</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                        </div>
                                                                        <span className="comment-date">July 25, 2019</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-form">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="form-area">
                                                            <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comments-review-box">
                                                <div className="review-header">
                                                    <div className="review-comment-author">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="comment-info">
                                                            <div className="info-group">
                                                                <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                            </div>
                                                            <span className="comment-date">July 25, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix d-flex">
                                                        <div className="average-reviews-single">
                                                            <div className="average-reviews-info">
                                                                <h4 className="average-reviews">7.7</h4>
                                                                <div className="clearfix">
                                                                    <h4 className="average-reviews-in">/ 10</h4>
                                                                    <span>Quality</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                            <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="fa fa-ellipsis-h"></i>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-body">
                                                    <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                    <p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <ul className="review-meta">
                                                        <li>4 Liked</li>
                                                        <li>4 Shared</li>
                                                    </ul>
                                                </div>
                                                <div className="review-footer">
                                                    <div className="review-btn">
                                                        <ul>
                                                            <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                            <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                            <li>
                                                                <div className="dropdown dropdown-btn">
                                                                    <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="la la-share-square-o m-r5"></i>  Share
															</button>
                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                            <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                        <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                            <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                        <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                            <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                        <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                            <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-list">
                                                        <ul>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                        </div>
                                                                        <span className="comment-date">July 25, 2019</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                        </div>
                                                                        <span className="comment-date">July 25, 2019</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-form">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="form-area">
                                                            <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comments-review-box">
                                                <div className="review-header">
                                                    <div className="review-comment-author">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="comment-info">
                                                            <div className="info-group">
                                                                <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                            </div>
                                                            <span className="comment-date">July 25, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix d-flex">
                                                        <div className="average-reviews-single">
                                                            <div className="average-reviews-info">
                                                                <h4 className="average-reviews">7.7</h4>
                                                                <div className="clearfix">
                                                                    <h4 className="average-reviews-in">/ 10</h4>
                                                                    <span>Quality</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                            <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="fa fa-ellipsis-v"></i>
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                                <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-body">
                                                    <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                    <p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <ul className="review-meta">
                                                        <li>4 Liked</li>
                                                        <li>4 Shared</li>
                                                    </ul>
                                                </div>
                                                <div className="review-footer">
                                                    <div className="review-btn">
                                                        <ul>
                                                            <li><Link to={''}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                                            <li><Link to={''}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                                            <li>
                                                                <div className="dropdown dropdown-btn">
                                                                    <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="la la-share-square-o m-r5"></i>  Share
															</button>
                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <Link className="dropdown-item site-button-link facebook" to={''}>
                                                                            <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                        <Link className="dropdown-item site-button-link twitter" to={''}>
                                                                            <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                        <Link className="dropdown-item site-button-link pinterest" to={''}>
                                                                            <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                        <Link className="dropdown-item site-button-link linkedin" to={''}>
                                                                            <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-list">
                                                        <ul>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                        </div>
                                                                        <span className="comment-date">July 25, 2019</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-comment-author">
                                                                    <div className="review-avatar">
                                                                        <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                                    </div>
                                                                    <div className="comment-info">
                                                                        <div className="info-group">
                                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link></h3>
                                                                            <p className="comment-text">Lorem Ipsum is simply dummy text</p>
                                                                        </div>
                                                                        <span className="comment-date">July 25, 2019</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-comments-form">
                                                        <div className="review-avatar">
                                                            <img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
                                                        </div>
                                                        <div className="form-area">
                                                            <textarea className="form-control" placeholder="Type To Message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-4">
                                        <div className="content-box">
                                            <div className="content-header">
                                                <h3 className="title">24 REVIEWS FOR triper</h3>
                                            </div>
                                            <div className="content-body">
                                                <div className="average-reviews-list bar-rating">
                                                    <ul>
                                                        <li>
                                                            <div className="average-reviews-info">
                                                                <span>Quality</span>
                                                                <div className="bar">
                                                                    <div className="bar-rat bg-primary"></div>
                                                                </div>
                                                                <h4 className="average-reviews">8.5</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="average-reviews-info">
                                                                <span>Location</span>
                                                                <div className="bar">
                                                                    <div className="bar-rat bg-primary"></div>
                                                                </div>
                                                                <h4 className="average-reviews">7.5</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="average-reviews-info">
                                                                <span>Space</span>
                                                                <div className="bar">
                                                                    <div className="bar-rat bg-primary"></div>
                                                                </div>
                                                                <h4 className="average-reviews">7.4</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="average-reviews-info">
                                                                <span>Service</span>
                                                                <div className="bar">
                                                                    <div className="bar-rat bg-primary"></div>
                                                                </div>
                                                                <h4 className="average-reviews">7.9</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="average-reviews-info">
                                                                <span>Price</span>
                                                                <div className="bar">
                                                                    <div className="bar-rat bg-primary"></div>
                                                                </div>
                                                                <h4 className="average-reviews">7.4</h4>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
                <Footer />
            </div>
    );
}
export default ListingDetails;
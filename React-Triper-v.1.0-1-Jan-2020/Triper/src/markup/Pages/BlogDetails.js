import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';

var bg3 = require('./../../images/banner/bnr1.jpg');
class BlogDetails extends Component {

    render() {
        return (
            <div>
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Blog Details</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Home</Link></li>
                                    <li>Blog Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full content-inner-2 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 m-b10">
                                <div className="blog-post blog-single blog-style-1">
                                    <div className="dlab-post-meta">
                                        <ul className="d-flex align-items-center">
                                            <li className="post-date">September 18, 2017</li>
                                            <li className="post-author">By <Link>demongo</Link> </li>
                                            <li className="post-comment"><Link>5k</Link> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-title">
                                        <h4 className="post-title m-t0"><Link>World’s largest Muslim group denounces Islamist extremism</Link></h4>
                                    </div>
                                    <div className="dlab-post-media dlab-img-effect zoom-slow m-t20"> <Link><img src={require('./../../images/blog/default/thum1.jpg')} alt="" /></Link> </div>
                                    <div className="dlab-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum
                                            is simply dummy text of the printing and typesetting  printer a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen  It has urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            It was popularised in 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text
                                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                                        <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimencenturies.</blockquote>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text
                                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                                        <h5>Completely Responsive</h5>
                                        <img className="alignleft wow fadeIn blog-side-img" data-wow-delay="0.2s" src={require('./../../images/blog/grid/pic4.jpg')} alt="" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                            Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release</p>
                                        <div className="dlab-divider bg-gray-dark"></div>
                                        <img className="alignright wow fadeIn blog-side-img" data-wow-delay="0.2s" src={require('./../../images/blog/grid/pic1.jpg')} alt="" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                            Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release</p>
                                    </div>
                                    <div className="dlab-post-tags clear">
                                        <div className="post-tags"> <Link>Child </Link> <Link>Eduction </Link> <Link>Money </Link> <Link>Resturent </Link> </div>
                                    </div>
                                    <div className="dlab-divider bg-gray-dark op4"><i className="icon-dot c-square"></i></div>
                                    <div className="share-details-btn">
                                        <ul>
                                            <li><h5 className="m-a0">Share Post</h5></li>
                                            <li><Link className="site-button facebook button-sm"><i className="fa fa-facebook"></i> Facebook</Link></li>
                                            <li><Link className="site-button google-plus button-sm"><i className="fa fa-google-plus"></i> Google Plus</Link></li>
                                            <li><Link className="site-button linkedin button-sm"><i className="fa fa-linkedin"></i> Linkedin</Link></li>
                                            <li><Link className="site-button instagram button-sm"><i className="fa fa-instagram"></i> Instagram</Link></li>
                                            <li><Link className="site-button twitter button-sm"><i className="fa fa-twitter"></i> Twitter</Link></li>
                                            <li><Link className="site-button whatsapp button-sm"><i className="fa fa-whatsapp"></i> Whatsapp</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="clear" id="comment-list">
                                    <div className="comments-area" id="comments">
                                        <h2 className="comments-title">8 Comments</h2>
                                        <div className="clearfix m-b20">
                                            <ol className="comment-list">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard"> <img className="avatar photo" src={require('./../../images/testimonials/pic1.jpg')} alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                        <div className="comment-meta"> <Link>October 6, 2015 at 7:15 am</Link> </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
                                                    Nam vitae neque vitae sapien malesuada aliquet. </p>
                                                        <div className="reply"> <Link className="comment-reply-link">Reply</Link> </div>
                                                    </div>
                                                    <ol className="children">
                                                        <li className="comment odd parent">
                                                            <div className="comment-body">
                                                                <div className="comment-author vcard"> <img className="avatar photo" src={require('./../../images/testimonials/pic2.jpg')} alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                                <div className="comment-meta"> <Link>October 6, 2015 at 7:15 am</Link> </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                    In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                            ac elementum ligula blandit ac.</p>
                                                                <div className="reply"> <Link className="comment-reply-link">Reply</Link> </div>
                                                            </div>
                                                            <ol className="children">
                                                                <li className="comment odd parent">
                                                                    <div className="comment-body">
                                                                        <div className="comment-author vcard"> <img className="avatar photo" src={require('./../../images/testimonials/pic3.jpg')} alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                                        <div className="comment-meta"> <Link>October 6, 2015 at 7:15 am</Link> </div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                            In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                    ac elementum ligula blandit ac.</p>
                                                                        <div className="reply"> <Link className="comment-reply-link">Reply</Link> </div>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard"> <img className="avatar photo" src={require('./../../images/testimonials/pic1.jpg')} alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                        <div className="comment-meta"> <Link>October 6, 2015 at 7:15 am</Link> </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                            In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                    ac elementum ligula blandit ac.</p>
                                                        <div className="reply"> <Link className="comment-reply-link">Reply</Link> </div>
                                                    </div>
                                                </li>
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard"> <img className="avatar photo" src={require('./../../images/testimonials/pic2.jpg')} alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                        <div className="comment-meta"> <Link>October 6, 2015 at 7:15 am</Link> </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                            In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                    ac elementum ligula blandit ac.</p>
                                                        <div className="reply"> <Link className="comment-reply-link">Reply</Link> </div>
                                                    </div>
                                                </li>
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard"> <img className="avatar photo" src={require('./../../images/testimonials/pic3.jpg')} alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                        <div className="comment-meta"> <Link>October 6, 2015 at 7:15 am</Link> </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                            In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                    ac elementum ligula blandit ac.</p>
                                                        <div className="reply"> <Link className="comment-reply-link">Reply</Link> </div>
                                                    </div>
                                                </li>
                                            </ol>
                                            <div className="comment-respond" id="respond">
                                                <h4 className="comment-reply-title" id="reply-title">Leave a Reply <small> <Link id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> </h4>
                                                <form className="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
                                                    <p className="comment-form-author">
                                                        <label>Name <span className="required">*</span></label>
                                                        <input type="text"  name="Author" placeholder="Author" id="author" />
                                                    </p>
                                                    <p className="comment-form-email">
                                                        <label>Email <span className="required">*</span></label>
                                                        <input type="text"  placeholder="Email" name="email" id="email" />
                                                    </p>
                                                    <p className="comment-form-url">
                                                        <label>Website</label>
                                                        <input type="text"  placeholder="Website" name="url" id="url" />
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <label>Comment</label>
                                                        <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                    </p>
                                                    <p className="form-submit">
                                                        <input type="submit"  className="submit" id="submit" name="submit" />
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 sticky-top">
                                <aside className="side-bar">
                                    <div className="widget">
                                        <h6 className="widget-title style-1">Search</h6>
                                        <div className="search-bx style-1">
                                            <form role="search" method="post">
                                                <div className="input-group">
                                                    <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                                                    <span className="input-group-btn">
                                                        <button type="submit" className="fa fa-search text-primary"></button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget recent-posts-entry">
                                        <h6 className="widget-title style-1">Recent Posts</h6>
                                        <div className="widget-post-bx">
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic1.jpg')} width="200" height="143" alt="" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h6 className="post-title"><Link href="blog-details.html">World’s largest Muslim group denounces Islamist extremism</Link></h6>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul className="d-flex align-items-center">
                                                            <li className="post-date">Sep 18, 2017</li>
                                                            <li className="post-comment"><Link>5k</Link> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic2.jpg')} width="200" height="160" alt="" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h6 className="post-title"><Link href="blog-details.html">Five Solomon islands swallowed by the sea</Link></h6>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul className="d-flex align-items-center">
                                                            <li className="post-date">Sep 18, 2017</li>
                                                            <li className="post-comment"><Link>5k</Link> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src={require('./../../images/blog/recent-blog/pic3.jpg')} width="200" height="160" alt="" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h6 className="post-title"><Link href="blog-details.html">U.S. destroyer sails near disputed Chinese island</Link></h6>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul className="d-flex align-items-center">
                                                            <li className="post-date">Sep 18, 2017</li>
                                                            <li className="post-comment"><Link>5k</Link> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget widget_gallery gallery-grid-3">
                                        <h6 className="widget-title style-1">Our services</h6>
                                        <ul>
                                            <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic2.jpg')} alt="" /></Link></div></li>
                                            <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic1.jpg')} alt="" /></Link></div></li>
                                            <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic5.jpg')} alt="" /></Link></div></li>
                                            <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic7.jpg')} alt="" /></Link></div></li>
                                            <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic8.jpg')} alt="" /></Link></div></li>
                                            <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('./../../images/gallery/pic9.jpg')} alt="" /></Link></div></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_archive">
                                        <h6 className="widget-title style-1">Categories List</h6>
                                        <ul>
                                            <li><Link>aciform</Link></li>
                                            <li><Link>championship</Link></li>
                                            <li><Link>chastening</Link></li>
                                            <li><Link>clerkship</Link></li>
                                            <li><Link>disinclination</Link></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget-newslatter">
                                        <h6 className="widget-title style-1">Newsletter</h6>
                                        <div className="news-box">
                                            <p>Enter your e-mail and subscribe to our newsletter.</p>
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
                                                    <button name="submit" value="Submit" type="submit" className="site-button btn-block radius-no">Subscribe Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default BlogDetails;
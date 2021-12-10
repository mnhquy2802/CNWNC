import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';

const gridBlog = [
    {
        image: require('./../../images/blog/grid/pic1.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic3.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic4.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic1.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',

    },
]


var bg3 = require('./../../images/banner/bnr1.jpg');
class BlogGrid extends Component {

    render() {
        return (
            <div>
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Blog Detailed Grid</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Home</Link></li>
                                    <li>Blog Detailed Grid</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full content-inner-2 bg-white">
                    <div className="container">
                        <div className="dlab-blog-grid-3 row" id="masonry" >
                            {gridBlog.map((item, index) => (
                                <div className="post card-container col-lg-4 col-md-6 col-sm-6" key={index}>
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

                        </div>
                        <div className="pagination-bx clearfix text-center">
                            <ul className="pagination">
                                <li className="previous"><Link><i className="ti-arrow-left"></i> Prev</Link></li>
                                <li className="active"><Link>1</Link></li>
                                <li><Link>2</Link></li>
                                <li><Link>3</Link></li>
                                <li className="next"><Link>Next <i className="ti-arrow-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default BlogGrid;
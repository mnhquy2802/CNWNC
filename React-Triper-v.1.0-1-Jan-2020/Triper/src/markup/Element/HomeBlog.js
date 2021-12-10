import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


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

class HomeBlog extends Component {

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
                
                <div className="content-block">
                    

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
            </div>
        )
    }
}
export default HomeBlog;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';

const placeList = [
    {
        image: require('./../../images/tour/pic1.jpg'),
        title: 'Mathura Kusum Sarovar',
        address: '441 Dickerson Pike Nashville, TN 37207',
    },
    {
        image: require('./../../images/tour/pic2.jpg'),
        title: 'Buguon Beach',
        address: '441 Dickerson Pike Nashville, TN 37207',
    },
    {
        image: require('./../../images/tour/pic3.jpg'),
        title: 'Buguon Beach',
        address: '441 Dickerson Pike Nashville, TN 37207',
    },
    {
        image: require('./../../images/tour/pic4.jpg'),
        title: 'Buguon Beach',
        address: '441 Dickerson Pike Nashville, TN 37207',
    },
    {
        image: require('./../../images/tour/pic5.jpg'),
        title: 'Taj Mahal',
        address: '441 Dickerson Pike Nashville, TN 37207',
    },
    {
        image: require('./../../images/tour/pic6.jpg'),
        title: 'Buguon Beach',
        address: '441 Dickerson Pike Nashville, TN 37207',
    },
]

var bg3 = require('./../../images/banner/bnr1.jpg');
class Place extends Component {

    render() {
        return (
            <div>
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Place</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Home</Link></li>
                                    <li>Place</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full bg-white content-inner dlab-about-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                                <div className="widget widget_gallery">
                                    <h5 className="widget-title font-weight-400">Our Gallery</h5>
                                    <ul className="clearfix">
                                        <li className="img-effect2"> <Link><img src={require('./../../images/gallery/img1.jpg')} alt="" /></Link> </li>
                                        <li className="img-effect2"> <Link><img src={require('./../../images/gallery/img2.jpg')} alt="" /></Link> </li>
                                        <li className="img-effect2"> <Link><img src={require('./../../images/gallery/img3.jpg')} alt="" /></Link> </li>
                                        <li className="img-effect2"> <Link><img src={require('./../../images/gallery/img4.jpg')} alt="" /></Link> </li>
                                        <li className="img-effect2"> <Link><img src={require('./../../images/gallery/img5.jpg')} alt="" /></Link> </li>
                                        <li className="img-effect2"> <Link><img src={require('./../../images/gallery/img6.jpg')} alt="" /></Link> </li>
                                    </ul>
                                </div>
                                <div className="widget">
                                    <h5 className="font-weight-400 widget-title">Popular Attractions in Pattaya</h5>
                                    <ul className="list-check black">
                                        <li>Baia dos Porcos</li>
                                        <li>Baia do Sueste</li>
                                        <li>Cacimba do Padre Beach</li>
                                        <li>Atalaia Beach</li>
                                        <li>Baia do Sueste Beach</li>
                                        <li>Leao Beach</li>
                                        <li>Conceicao Beach</li>
                                        <li>Forte Sao Pedro do Boldro</li>
                                        <li>Projeto Tamar</li>
                                    </ul>
                                </div>

                                {/* <div className="widget">
                                <img src={require('./../../images/add.jpg')} alt="" />
                            </div> */}
                                <div className="widget">
                                    <h5 className="font-weight-400 widget-title">FAQ's</h5>
                                    <ul className="list-check black">
                                        <li>Baia dos Porcos</li>
                                        <li>Baia do Sueste</li>
                                        <li>Cacimba do Padre Beach</li>
                                        <li>Atalaia Beach</li>
                                        <li>Baia do Sueste Beach</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 col-sm-7">
                                <div className="m-b10">
                                    <form>
                                        <div className="form-group">
											<div className="input-group">
												<input type="text" className="form-control" placeholder="Search for..." />
												<span className="input-group-btn p-l15">
													<button className="site-button" type="button">Search</button>
												</span>
											</div>
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 m-b15">
                                        <h3 className="m-b5">Places in :</h3>
                                        <div className="dlab-separator bg-primary"></div>
                                    </div>

                                    {placeList.map((item, index) => (
                                        <div className="col-md-12 col-lg-6 col-sm-12 m-b30" key={index}>
                                            <div className="dlab-box place-bx">
                                                <div className="dlab-media"> <Link><img src={item.image} alt="" /></Link> </div>
                                                <div className="dlab-info p-tb30 p-lr10 text-center bg-gray">
                                                    <h4 className="dlab-title m-t0"><Link>{item.title}</Link></h4>
                                                    <p className="m-b10">{item.address}</p>
                                                    <Link to={'./booking'} className="site-button outline radius-xl m-lr5">View Details</Link>
                                                    <Link to={'./booking'} className="site-button outline radius-xl m-lr5">View Map</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Place;
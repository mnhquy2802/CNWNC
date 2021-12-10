import React, { Component } from 'react';
import Popupss from './Tab';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';

var bg3 = require('./../../images/banner/bnr1.jpg');
class PortfolioGrid2 extends Component {

    render() {
        return (
            <div>
                <Header2 />
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Blog Classic</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link>Home</Link></li>
                                    <li>Blog Classic</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-block">
                    <div className="section-full content-inner bg-white portfolio-box">
                        <div className="container">
                            <div className="section-head text-black text-center m-b20">
                                <h2 className="m-b10">Our Portfolio</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                            <Popupss />
                        </div>
                    </div>
                </div >

                <Footer />
            </div >
        )
    }
}
export default PortfolioGrid2;
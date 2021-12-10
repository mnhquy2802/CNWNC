import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import TourDetail from '../../api/tourdetail';


var bg3 = require('./../../images/banner/bnr1.jpg');

const Hotel = () => {
    const [tourDetail, setTourDetail] = useState([])
    const history = useHistory();

    const booking = (event, id) => {
        if (event) {
            event.preventDefault();
          }
        console.log(id);
        localStorage.setItem("tourDetailId", id);
        history.push("./tourbooking");
    }

    useEffect(() => {
        const getTour = async () => {
            try {
              let id = localStorage.getItem("touridExist");
              console.log('id : ------------> ', id)
              let obj = {
                tourid : id
              }
              const tours = await TourDetail.ListTourDetail(obj);
              console.log(tours?.data?.data);
              setTourDetail(tours?.data?.data || []);
            } catch (error) {
              console.log(error);
            }
          };
          getTour();
    }, [])

    return (
        <div>
            <Header2 />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Hotel</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Hotel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white content-inner dlab-about-1">
                <div className="container">
                    <div className="section-head text-black text-center">
                        <h2 className="m-b0 text-uppercase">Popular hotel destinations</h2>
                        <p className="font-18">If you’re looking for a truly memorable family break, here you find the lowest price on the right hotel for you. It's indescribable.</p>
                    </div>
                    <div className="row">
                        {tourDetail.map((item, index) => (
                            <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={index}>
                                <div className="dlab-box hotal-box" data-tilt data-tilt-max="10" data-tilt-speed="1">
                                    <div className="dlab-media dlab-img-effect dlab-img-overlay2">
                                        <img src={require('./../../images/gallery/img7.jpg')} alt="" />
                                        <div className="dlab-info-has p-a20 text-white no-hover">
                                            <h4 className="m-t0 m-b10">{item._tittle}</h4>
                                            <span>{item.title}</span>
                                            <h2 className="m-t10 m-b20">$ {item._price}</h2>
                                            <button onClick={(event) => booking(event, item._id)} to={'./tourbooking'} className="site-button outline outline-2 radius-xl">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Hotel;
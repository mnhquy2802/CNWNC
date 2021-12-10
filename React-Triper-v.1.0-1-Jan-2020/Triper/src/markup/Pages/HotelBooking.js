import React, { Component, useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import OrderApi from '../../api/order';
import TourDetail from '../../api/tourdetail';
const hotelSlider = [
    {
        image: require('./../../images/hotel/pic1.jpg'),
    },
    {
        image: require('./../../images/hotel/pic2.jpg'),
    },
    {
        image: require('./../../images/hotel/pic3.jpg'),
    },
    {
        image: require('./../../images/hotel/pic4.jpg'),
    },
    {
        image: require('./../../images/hotel/pic5.jpg'),
    },
    {
        image: require('./../../images/hotel/pic6.jpg'),
    },
    {
        image: require('./../../images/hotel/pic7.jpg'),
    },
    {
        image: require('./../../images/hotel/pic8.jpg'),
    },
    {
        image: require('./../../images/hotel/pic9.jpg'),
    },
    {
        image: require('./../../images/hotel/pic10.jpg'),
    },
]
var bg3 = require('./../../images/banner/bnr1.jpg');
const HotelBooking = () => {

    var settings = {
        dots: false,
        slidesToShow: 1,
        infinite: true,
    };


    const [price, setPrice] = useState(0);
    const [content1, setContent1] = useState("Content 1")
    const [content2, setContent2] = useState("Content 2")
    const [content3, setContent3] = useState("Content 3")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [totalPeople, setTotalPeople] = useState(1)
    const [totalChildren, setTotalChildren] = useState(1)

    const [tourDetailId, setTourDetailId] = useState(undefined)
    const [tourId, setTourId] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [address, setAddress] = useState("Address")
    const [customerName, setCustomerName] = useState("Address")
    const [phonenumber, setPhonenumber] = useState("Address")

    useEffect(() => {
        const getTourDetail = async () => {
            try {
                setTourDetailId(localStorage.getItem("tourDetailId"));
                console.log("tourDetailId : --- > ", localStorage.getItem("tourDetailId"));
                let obj = {
                    tourDetailId: localStorage.getItem("tourDetailId")
                }
                const tourDetail = await TourDetail.FindTourDetail(obj);
                console.log("tourdetail : ----> ", tourDetail)
                setTourId(tourDetail?.data?.data?._id || undefined);
                setPrice(tourDetail?.data?.data?._price || undefined);
                setContent1(tourDetail?.data?.data?._content1 || "Content not found");
                setContent2(tourDetail?.data?.data?._content2 || "Content not found");
                setContent3(tourDetail?.data?.data?._content3 || "Content not found");

            } catch (error) {
                console.log(error);
            }
        };
        getTourDetail();
        let NameCustomer = localStorage.getItem("user");
        // NameCustomer = JSON.parse(NameCustomer);
        setCustomerName(NameCustomer || "")
    }, [])

    const submitTour = async (event) => {
        if (event) {
            event.preventDefault();
          }
        let people = (totalChildren-1)*0.5 + totalPeople;
        let obj = {
            totalPrice: people*price,
            quantiny: people,
            createTime: startDate,
            endTime: endDate,
            tourDetailID: tourDetailId,
        }
        console.log("toursubmit : ----> ", obj)
        localStorage.setItem("toursubmit", obj)
        const message = await OrderApi.CreateOrder(obj);
        console.log("obj", obj);
        console.log(message.data);
    }

    return (
        <div>
            <Header2 />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Hotal Booking</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Hotal Booking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-block">
                <div className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row m-b30">
                            <div className="col-lg-8">
                                <div className="d-flex info-bx m-b30">
                                    <div className="tour-title">
                                        <h2>FabHotel RMS Comforts</h2>
                                        <p><i className="fa fa-map-marker m-r5"></i>Yeshwanthpur, Bangalore <Link className="text-primary">View on Map</Link></p>
                                        <p><span className="site-button button-sm button-gray">Hotel</span> <span className="site-button button-sm">Bar</span> Tour</p>
                                    </div>
                                    <div className="tour-price ml-auto">
                                        <span>Per Room Per Night</span>
                                        <h2 className="price">{price}</h2>
                                        {/* <h4 className="actual-price">Rs.1,23,990</h4> */}
                                    </div>
                                </div>
                                <div className="product-gallery on-show-slider">
                                    <Slider {...settings}>
                                        {hotelSlider.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="dlab-box">
                                                    <div className="dlab-thum-bx">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>

                                </div>
                                <div className="tour-days">
                                    <h2 className="m-b10">About Hotel</h2>
                                    <p>{content1}</p>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 col-sm-12">
                                            <ul className="list-hand-point primary">
                                                <li>Closeness to ISRO (1.6 km) and BEL (2.4 km)</li>
                                                <li>Cozy rooms with modern interiors</li>
                                                <li>In-house restaurant serving tasty dishes</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-sm-12">
                                            <h5>Where we are Located</h5>
                                            <p>{content2}</p>
                                            {/* <ul className="list-hand-point primary">
                                                <li>The FabHotel RMS Comforts is situated on 5th Main in the Mathikere Extension area</li>
                                                <li>Yeshwantpur Junction Railway Station is 1.8 km, while Krantivira Sangolli Rayanna Railway Station is 7.3 km from the hotel</li>
                                                <li>Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</li>
                                                <li>Some of the prominent landmarks near the hotel include BBMP Office (700 m), Ramaiah Institute of Technology (750 m), Indian Institute of Science (950 m), BEL-THALES Systems Limited (1.5 km), ISRO (1.6 km), RTO Office Yeshwanthpura (1.8 km), Antrix Corporation Limited (1.9 km), Bharat Electronics Limited (2.1 km) and Professional Tax Office (2.5 km)</li>
                                                <li>Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</li>
                                            </ul> */}
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-sm-12">
                                            <h5>Where to Eat</h5>
                                            <p>{content3}</p>
                                            {/* <ul className="list-hand-point primary">
                                                <li>The hotel has a restaurant that treats you with a wide range of dishes across multiple cuisines</li>
                                                <li>Sri Krishna Bhavan (53 m), Shree Sagar (63 m), Delight (72 m), Reddy Mess (140 m), Star Biryani Center (290 m) and Indira Canteen (300 m) are among many dining options around the hotel</li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sticky-top">
                                    <form className="hotel-booking">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="" type="date" onChange={(event) => { setStartDate(event.target.value); setError(undefined); }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="" type="date" onChange={(event) => { setEndDate(event.target.value); setError(undefined); }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="quantity btn-quantity">
                                                        <input value={totalPeople} className="form-control" id="demo_vertical2" type="number" onChange={(event) => { let value = event.target.value; if (value >0) {setTotalPeople(event.target.value); setError(undefined);}}}/>
                                                    </div>
                                                    <span className="font-12">Adults</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-6">
                                                <div className="form-group">
                                                    <div className="quantity btn-quantity">
                                                        <input value={totalChildren} className="form-control" id="demo_vertical2" type="number" name="demo_vertical2" onChange={(event) => { let value = event.target.value; if (value >0) {setTotalChildren(event.target.value); setError(undefined);}}}/>
                                                    </div>
                                                    <span className="font-12">Children</span>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="quantity btn-quantity">
                                                        <input value={customerName} className="form-control" id="demo_vertical2" type="text" name="demo_vertical2" onChange={(event) => { let value = event.target.value; if (value >0) {setCustomerName(event.target.value); setError(undefined);}}}/>
                                                    </div>
                                                    <span className="font-12">Name</span>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="quantity btn-quantity">
                                                        <input value={phonenumber} className="form-control" id="demo_vertical2" type="number" name="demo_vertical2" onChange={(event) => { let value = event.target.value; if (value >0) {setPhonenumber(event.target.value); setError(undefined);}}}/>
                                                    </div>
                                                    <span className="font-12">Phone Number</span>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <div className="quantity btn-quantity">
                                                        <input value={address} className="form-control" id="demo_vertical2" type="Text" name="demo_vertical2" onChange={(event) => { let value = event.target.value; if (value >0) {setAddress(event.target.value); setError(undefined);}}}/>
                                                    </div>
                                                    <span className="font-12">Address</span>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <div className="booking-total">
                                                    <h3 className="d-flex"> {price*totalPeople + price*(totalChildren-1)*0.5} <span>Sub Total1 room for 1 night</span></h3>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                <button type="submit" className="site-button btn-block" onClick={(event) => {submitTour(event);}}>Book Now</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="m-t30">
                                        <img src={require('./../../images/add/add-bnr.jpg')} className="d-md-none d-xl-block d-lg-block" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default HotelBooking;
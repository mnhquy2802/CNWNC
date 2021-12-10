import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import TourApi from '../../api/tour';

const places = [
    {
        price: 1200,
        image: require('./../../images/our-work/pic1.jpg'),
        title: 'Japan Tokyo',
        description:
            'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
        link: 'booking',
    },
    {
        price: 1200,
        image: require('./../../images/our-work/pic2.jpg'),
        title: 'Spain Madrid',
        description:
            'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
        link: 'booking',
    },
    {
        price: 1200,
        image: require('./../../images/our-work/pic3.jpg'),
        title: 'Italy',
        description:
            'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
        link: 'booking',
    },
    {
        price: 1200,
        image: require('./../../images/our-work/pic4.jpg'),
        title: 'UK city',
        description:
            'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
        link: 'booking',
    },
    {
        price: 1200,
        image: require('./../../images/our-work/pic5.jpg'),
        title: 'Europe City',
        description:
            'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
        link: 'booking',
    },
    {
        price: 1200,
        image: require('./../../images/our-work/pic6.jpg'),
        title: 'Hong Kong City',
        description:
            'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
        link: 'booking',
    },

];

const TopPlaces = () => {
    const [newsList, setNewsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(3);
    const [tourValue, setTourValue] = useState([])
    useEffect(() => {
        const getTour = async () => {
            try {
              const tours = await TourApi.ListTour();
              console.log(tours);
              setNewsList(tours?.data?.data || []);
            } catch (error) {
              console.log(error);
            }
          };
          getTour();
    }, [])

    const set_TourId = (id) => {
      console.log(11111111111111111111111111222);
      localStorage.setItem("touridExist", id);
    }


    const chosePage = (event) => {
        setCurrentPage(event.target.id);

    }

    const select = (event) => {
        setNewsPerPage(event.target.value);
    }

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((item, index) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6 m-b30 card-container" key={index}>
                            <div className="dlab-box">
                                <div className="dlab-media">
                                    <Link to={'./booking'}>
                                        <img src={require('./../../images/our-work/pic3.jpg')} alt="" />
                                    </Link>
                                    {/* <div className="tr-price">
                                        <span>{item.price} USD</span>
                                    </div> */}
                                </div>
                                <div className="dlab-info p-a20 border-1 text-center">
                                    <h4 className="dlab-title m-t0"><Link to={'./hotel'}>{item._tourName}</Link></h4>
                                    <p>{item._description}</p>

                                    <div className="tr-btn-info">
                                        <Link to={'./hotel'} className="site-button radius-no" onClick={() => set_TourId(item._id)}><i className="fa fa-location-arrow" aria-hidden="true" ></i> Bookingsss </Link>
                                        <Link to={'./booking'} className="site-button bg-primary-dark radius-no"><i className="fa fa-info-circle" aria-hidden="true"></i>  Relax </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <div className="section-full bg-white content-inner dlab-about-1 promotions" id="about-us">
            <div className="container">
                <div className="section-head text-center">
                    <h2 className="text-uppercase m-b0">TOP PLACES</h2>
                    <p className="font-18">BEST TRAVEL PACKAGES AVAILABLE</p>
                </div>
                <div className="row d-flex">
                    <div className="col-md-8 col-sm-8 col-lg-9 form-group align-self-center text-left">
                        <button className="site-button m-b5 mr-1">India</button>
                        <button className="site-button m-b5 mr-1">Uk</button>
                        <button className="site-button m-b5 mr-1">China</button>
                        <button className="site-button m-b5 mr-1">Swaziland</button>
                        <button className="site-button m-b5 mr-1">India</button>
                        <button className="site-button m-b5 mr-1">Uk</button>
                        <button className="site-button m-b5 mr-1">China</button>
                        <button className="site-button m-b5 mr-1">Swaziland</button>
                        <button className="site-button m-b5 mr-1">India</button>
                        <button className="site-button m-b5 mr-1">Uk</button>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-3 form-group">
                        <select className="form-control">
                            <option>Relevent</option>
                            <option>High to Low</option>
                            <option>Low to High</option>
                        </select>
                    </div>
                </div>
                <div className="row" id="masonry">
                    {renderTodos}
                </div>
                <div className="pagination-custom">
                    <ul id="page-numbers">
                        {
                            pageNumbers.map(number => {
                                if (currentPage === number) {
                                    return (
                                        <li key={number} id={number} className="active">
                                            {number}
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={number} id={number} onClick={(event) => chosePage(event)} >
                                            {number}
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TopPlaces;
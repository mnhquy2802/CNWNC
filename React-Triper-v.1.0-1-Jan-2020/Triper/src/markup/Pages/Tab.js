import React, { useState } from 'react';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Popupss = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <div tabs>

                <div className="site-filters style1 clearfix center">
                    <ul className="filters">
                        <li
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}>
                            <input type="radio" />
                            <Link><span>London</span></Link>
                        </li>
                        <li className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}>
                            <input type="radio" />
                            <Link><span>Berlin</span></Link>
                        </li>
                        <li className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}>
                            <input type="radio" />
                            <Link><span>Dubai</span></Link>
                        </li>
                        <li className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}>
                            <input type="radio" />
                            <Link><span>Rome</span></Link>
                        </li>
                        <li className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}>
                            <input type="radio" />
                            <Link><span>Cuba</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <div className="row">
                        <div className="web design card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="advertising branding photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                    <Link> <img src={require('./../../images/gallery/pic2.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="branding design photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic3.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web design card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic4.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web branding card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic5.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className="row">
                        <div className="web design card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic2.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="advertising branding photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                    <Link> <img src={require('./../../images/gallery/pic3.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <div className="row">
                        <div className="web photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic9.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="advertising branding card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic1.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="4">
                    <div className="row">
                        <div className="advertising design photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                    <Link> <img src={require('./../../images/gallery/pic6.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web branding card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic7.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="advertising design photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                                    <Link> <img src={require('./../../images/gallery/pic8.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="5">
                    <div className="row">
                        <div className="branding design photography card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic3.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web design card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic4.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="web branding card-container col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="dlab-box dlab-gallery-box">
                                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link> <img src={require('./../../images/gallery/pic5.jpg')} alt="" /> </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Popupss;
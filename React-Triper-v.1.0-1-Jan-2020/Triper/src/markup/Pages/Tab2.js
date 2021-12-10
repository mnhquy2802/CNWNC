import React, { useState } from 'react';
import { TabContent, TabPane,Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

const Tab2 = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <div className="section-full search-filter">
                <div className="container">
                    <Nav pills>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}>Hotels</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}>Packages</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}>Places</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>

            <div className="search-form-bx">
                <div className="container">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <form className="row sp20">
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <input type="text" className="form-control" placeholder="Keywords" />
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Activity</option>
                                        <option>City Tours</option>
                                        <option>Cultural &amp; Thematic Tours</option>
                                        <option>Family Friendly Tours</option>
                                        <option>Holiday &amp; Seasonal Tours</option>
                                        <option>Indulgence &amp; Luxury Tours</option>
                                        <option>Outdoor Activites</option>
                                        <option>Relaxation Tours</option>
                                        <option>Wild &amp; Adventure Tours</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Destination</option>
                                        <option>Africa</option>
                                        <option>America</option>
                                        <option>Asia</option>
                                        <option>Eastern Europe</option>
                                        <option>Europe</option>
                                        <option>South America</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Duration</option>
                                        <option>1 Day Tour</option>
                                        <option>2-4 Days Tour</option>
                                        <option>5-7 Days Tour</option>
                                        <option>7+ Days Tour</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <input type="text" className="form-control" id='datetimepicker1' placeholder="Date" />
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <button type="button" onclick="location.href='place.html'" className="site-button btn-block">SEARCH</button>
                                </div>
                            </form>
                        </TabPane>
                        <TabPane tabId="2">
                            <form className="row sp20">
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <input type="text" className="form-control" placeholder="Keywords" />
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Activity</option>
                                        <option>City Tours</option>
                                        <option>Cultural &amp; Thematic Tours</option>
                                        <option>Family Friendly Tours</option>
                                        <option>Holiday &amp; Seasonal Tours</option>
                                        <option>Indulgence &amp; Luxury Tours</option>
                                        <option>Outdoor Activites</option>
                                        <option>Relaxation Tours</option>
                                        <option>Wild &amp; Adventure Tours</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Destination</option>
                                        <option>Africa</option>
                                        <option>America</option>
                                        <option>Asia</option>
                                        <option>Eastern Europe</option>
                                        <option>Europe</option>
                                        <option>South America</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Duration</option>
                                        <option>1 Day Tour</option>
                                        <option>2-4 Days Tour</option>
                                        <option>5-7 Days Tour</option>
                                        <option>7+ Days Tour</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <input type="text" className="form-control" id='datetimepicker2' placeholder="Date" />
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <button type="button" onclick="location.href='place.html'" className="site-button btn-block">SEARCH</button>
                                </div>
                            </form>
                        </TabPane>
                        <TabPane tabId="3">
                            <form className="row sp20">
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <input type="text" className="form-control" placeholder="Keywords" />
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Activity</option>
                                        <option>City Tours</option>
                                        <option>Cultural &amp; Thematic Tours</option>
                                        <option>Family Friendly Tours</option>
                                        <option>Holiday &amp; Seasonal Tours</option>
                                        <option>Indulgence &amp; Luxury Tours</option>
                                        <option>Outdoor Activites</option>
                                        <option>Relaxation Tours</option>
                                        <option>Wild &amp; Adventure Tours</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Destination</option>
                                        <option>Africa</option>
                                        <option>America</option>
                                        <option>Asia</option>
                                        <option>Eastern Europe</option>
                                        <option>Europe</option>
                                        <option>South America</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <select className="form-control">
                                        <option>Duration</option>
                                        <option>1 Day Tour</option>
                                        <option>2-4 Days Tour</option>
                                        <option>5-7 Days Tour</option>
                                        <option>7+ Days Tour</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <input type="text" className="form-control" id='datetimepicker3' placeholder="Date" />
                                </div>
                                <div className="form-group col-lg-2 col-md-4 col-sm-6 col-6">
                                    <button type="button" onclick="location.href='place.html'" className="site-button btn-block">SEARCH</button>
                                </div>
                            </form>
                        </TabPane>
                    </TabContent>
                </div>
            </div>

        </div>
    );
}

export default Tab2;
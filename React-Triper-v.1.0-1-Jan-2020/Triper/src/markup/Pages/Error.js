import React, { Component } from 'react'

var bg3 = require('./../../images/background/bg5.jpg');


class Error404 extends Component {

    render() {
        return (
            <div className="section-full content-inner-3 error-page"  style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 m-b30 align-self-center text-center">
                            <h2 className="dz_error text-secondry">404</h2>
                            <h3>OOPS!</h3>
                            <h4>Page Not Found</h4>
                            <a href="index.html" className="site-button">Back To Home</a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img src={require('./../../images/collage.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Error404;
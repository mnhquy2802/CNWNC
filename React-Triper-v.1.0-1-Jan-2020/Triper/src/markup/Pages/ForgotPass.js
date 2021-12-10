import React, { Component } from 'react';
// import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Slick3 from './Slick3';



class ForgotPass extends Component {

    render() {


        return (
            <div>
                <div class="page-content dlab-login font-roboto">
                    <div class="container-fluid p-lr0">
                        <div class="row m-lr0 login-form-box">
                            <div class="col-lg-4 p-lr0">
                                <div class="login-form">
                                    <div class="logo logo-header">
                                    <Link to={'./'}><img src={require('./../../images/logo-2.png')} alt="" /></Link>
                                    </div>
                                    <div id="forgot-password" class="tab-pane">
                                        <form class="dlab-form">
                                            <div class="form-head">
                                                <h3 class="form-title m-t0">Find Your<span class="text-primary"> Account</span></h3>
                                                <p class="title-text">Welcome back, please login<br /> to your account</p>
                                            </div>
                                            <div class="form-group-bx">
                                                <div class="form-group input-form">
                                                    <label>Email Id</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="info123@example.com" type="text" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <button class="site-button black m-r10">Submit</button>
                                                <Link to={'./login'} class="site-button outline">Back</Link>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-8 p-lr0">
                                <Slick3 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ForgotPass;
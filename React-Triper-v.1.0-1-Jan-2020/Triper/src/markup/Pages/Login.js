// import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Slick3 from './Slick3';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthApi from "../../api/auth";
import React from 'react';



const Login = () => {
    const history = useHistory();
    const {user, setUser} = useState("");

    const [rememberMe, setRememberMe] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(undefined);
    // const [buttonText, setButtonText] = useState("Sign in");
    const handleSetRememberMe = () => setRememberMe(!rememberMe);

    const login = async (event) => {
      try{
        var u = JSON.parse(user);
        u = Object.entries(u);
      } catch (error) {
        console.log(error)
      }
      if (event) {
        event.preventDefault();
      }
      if (u && u.token) {
        history.push("/");
      }
      if (email === "") {
        setError("You must enter your email.");
      }
      if (password === "") {
        setError("You must enter your password.");
      }
      // setButtonText("Signing in");
      try {
        const obj = {
          username: email,
          password: password,
        };
        console.log("Obj send login : ----> ", obj);
        let response = await AuthApi.Login(obj);
        console.log(response.data);
        if (response.data && response.data.status_code === 400) {
          // setError(response.data.msg);
          console.log(33333333333);
        } else {
          localStorage.setItem("x_access_token", response.data.x_access_token);
          localStorage.setItem("role", JSON.stringify(response.data.role));

          setProfile(response)
        }
      } catch (err) {
      //   setButtonText("Sign in");
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    const setProfile = async (response) => {
      let users = { ...response };
      
      users.token = response.data["x_access_token"];
      users = JSON.stringify(users);
      console.log("users : ---------> ", users)
      localStorage.setItem("user", users);
      return history.push("/");
    };

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
                                <div id="login" class="tab-pane">
                                    <form class="dlab-form">
                                        <div class="form-head">
                                            <h3 class="form-title m-t0">We Are <span class="text-primary">Triper</span></h3>
                                            <p class="title-text">Welcome back, please login<br /> to your account</p>
                                        </div>
                                        <div class="form-group-bx">
                                            <div class="form-group input-form">
                                                <label>Email Address</label>
                                                <input 
                                                    class="form-control" 
                                                    placeholder="info123@example.com" 
                                                    type="text" 
                                                    onChange={(event) => {
                                                        setEmail(event.target.value);
                                                        setError(undefined);
                                                }}
                                                />
                                            </div>
                                            <div class="form-group input-form">
                                                <label>Password</label>
                                                <input 
                                                    class="form-control " 
                                                    type="password" 
                                                    value={password} 
                                                    onChange={(event) => {
                                                        setPassword(event.target.value);
                                                        setError(undefined);
                                                }}/>
                                            </div>
                                        </div>
                                        <div class="form-group field-btn text-left">
                                            <div class="input-block">
                                                <input id="check1" type="checkbox" checked={rememberMe} onChange={handleSetRememberMe}/>
                                                <label htmlfor="check1">Remember me</label>
                                            </div>
                                            <Link to={'./forgot'} class="btn-link forgot-password"> Forgot Password</Link>
                                        </div>
                                        {error}
                                        <div>
                                            <button class="site-button black m-r10" onClick={(event) => login(event)}>login</button>
                                            <Link to={'./register'} class="site-button outline">Sign Up</Link>
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
export default Login;
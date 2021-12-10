import React, { Component,useState } from 'react'
import AuthApi from '../../api/auth';
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();
    const[username, setUsername] = useState("username");
    const[error, setError] = useState("Error!");
    const[password, setPassword] = useState("Password");
    const[passverifiy, setPassverify] = useState("Repeat Password");
    const[open, setOpen] = useState(false);
    const register = async (event) => {
        if (event) {
            event.preventDefault();
        }
        if (username === "") {
            return setError("You must enter your username.");
        }
        if (password === "") {
            return setError("You must enter your password");
        }
        try {
            console.log("username : ----> ", username);
            console.log("password : ----> ", password);
            console.log("passverifiy : ----> ", passverifiy);

            const obj = {
                username: username,
                password: password,
            };
            console.log(1111111111111111111)
            let response = await AuthApi.RegisterClient(obj);
            console.log(response.data);
            if (response.data && response.data.status_code === 400) {
                return setError(response.data.msg);
            }
            return history.push("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="section-full content-inner-2 shop-account bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="font-weight-700 m-t0 m-b20">Create An Account</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="p-a30 border-1  max-w500 m-auto">
                            <div className="tab-content">
                                <form id="login" className="tab-pane active">
                                    <h4 className="font-weight-700">PERSONAL INFORMATION</h4>
                                    <p className="font-weight-600">If you have an account with us, please log in.</p>
                                    <div className="form-group">
                                        <label className="font-weight-700">Username *</label>
                                        <input value={username} name="dzName" required="" className="form-control" placeholder="First Name" type="text" onChange={(event) => {setUsername(event.target.value)}}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-700">PASSWORD *</label>
                                        <input value={password} name="dzName" required="" className="form-control " placeholder="Type Password" type="password" onChange={(event) => {setPassword(event.target.value)}}/>
                                    </div>
                                    <div className="text-left">
                                        <button className="site-button button-lg radius-no outline outline-2" onClick={(event) => register(event)}>CREATE</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;
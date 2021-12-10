import axios from "./index";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${base}/loginclient`, data);
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static RegisterClient = (data) => {
    return axios.post(`${base}/registerclient`, data);
  };
  
  static Logout = (data) => {
    return axios.post(`${base}/logout`, data);
  };

  static UserList = async () => {
    let token = await localStorage.getItem("x_access_token");
    return axios.get(`${base}/get-users`, { headers: { x_access_token: token } });
  };

  static Products = async (data) => {
    let token = await localStorage.getItem("x_access_token");
    return axios.get(`${base}/get-tour/`, { headers: { x_access_token: token }, data });
  };
}

let base = "http://localhost:8088";

export default AuthApi;

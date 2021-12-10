import axios from "./index";

class OrderApi {
  static ListOrder = (skip, limit) => {
    let token = localStorage.getItem("x_access_token");
    return axios.get(`${base}/get-orderCustomer/?skip=${skip}&limit=${limit}`, { headers: { x_access_token: token } });
  };

  static CreateOrder = (data) => {
    let token = localStorage.getItem("x_access_token");
    console.log("token : -----> ", token)
    return axios.post(`${base}/create-order`, data, { headers: { x_access_token: token } });
  };

  static DeleteOrder = (data) => {
    let token = localStorage.getItem("x_access_token");
    console.log("token : -----> ", token)
    return axios.post(`${base}/delete-order`, data, { headers: { x_access_token: token } });
  }
}

let base = "http://localhost:8088";

export default OrderApi;

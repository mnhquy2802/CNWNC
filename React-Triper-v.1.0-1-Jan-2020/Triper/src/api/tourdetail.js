import axios from "./index";

class TourDetail {
  static ListTourDetail = (data) => {
    let token = localStorage.getItem("x_access_token");
    return axios.post(`${base}/tours`, data, { headers: { x_access_token: token } });
  };

  static FindTourDetail = (data) => {
    console.log("FindTourDetail : ----> ", data);
    let token = localStorage.getItem("x_access_token");
    return axios.post(`${base}/findtour`, data, { headers: { x_access_token: token } });
  };

  static CreateTourDetail = (data) => {
    let token = localStorage.getItem("x_access_token");
    return axios.post(`${base}/create-tour`, data, { headers: { x_access_token: token } });
  }
}

let base = "http://localhost:8088";

export default TourDetail;

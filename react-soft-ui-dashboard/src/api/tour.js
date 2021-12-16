import axios from "./index";

class TourApi {
  static ListTour = () => {
    return axios.get(`${base}/get-tour`);
  };

  static CreateTour = (item) => {
    let token = localStorage.getItem("x_access_token");
    return axios.post(`${base}/create-tour`, { headers: { x_access_token: token }, data: item });
  };

  static DeleteTour = (item) => {
    let token = localStorage.getItem("x_access_token");
    return axios.post(`${base}/logout`, { headers: { x_access_token: token }, data: item });
  };

  static UpdateTour = async () => {
    let token = await localStorage.getItem("x_access_token");
    return axios.get(`${base}/get-users`, { headers: { x_access_token: token } });
    // axios
    //   .get(`${base}/get-users`, { headers: { x_access_token: token } })
    //   .then(function (response) {
    //     console.log("AAAAA -- : ---->", response.data);
    //     return response;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
}

let base = "http://7cbe-14-177-203-51.ngrok.io";

export default TourApi;

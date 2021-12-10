import axios from "./index";

class TourApi {
  static ListTour = () => {
    return axios.get(`${base}/get-tour`);
  };

  static CreateTour = (data) => {
    let token = localStorage.getItem("x_access_token");
    console.log("token : -----> ", token)
    return axios.post(`${base}/create-tour`, data, { headers: { x_access_token: token } });
  };

  static DeleteTour = (data) => {
    let token = localStorage.getItem("x_access_token");
    return axios.post(`${base}/delete-tour`, data, { headers: { x_access_token: token } });
  };

  static UpdateTour = async (data) => {
    let token = await localStorage.getItem("x_access_token");
    return axios.post(`${base}/update-tour`, data, { headers: { x_access_token: token } });
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

let base = "http://localhost:8088";

export default TourApi;

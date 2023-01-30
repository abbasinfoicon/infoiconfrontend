import axios from "axios";

const axiosCall = (url) => {
  return axios.get(`http://localhost:3034/${url}`);
};

export default axiosCall;

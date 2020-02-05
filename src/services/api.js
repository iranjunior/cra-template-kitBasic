import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.REACT_APP_GITHUB_BASEURL,
  timeout: process.env.REACT_APP_GITHUB_TIMEOUT,
});

export default api;

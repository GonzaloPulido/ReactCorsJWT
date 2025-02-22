import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://fastapicorsjwt.onrender.com/',
  mode: "cors",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*",
  },
});

export default axiosInstance;

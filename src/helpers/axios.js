const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 5000
});

module.exports = axiosInstance;

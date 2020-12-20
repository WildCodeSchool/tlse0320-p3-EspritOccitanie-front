const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000
});

console.log(axiosInstance.baseURL);

module.exports = axiosInstance;

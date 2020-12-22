const axios = require('axios');
const { SERVER_URL } = require('../env');

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000
});

module.exports = axiosInstance;

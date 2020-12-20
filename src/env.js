require('dotenv').config();

const { NODE_ENV, REACT_APP_PRODUCTION_SERVER_URL, REACT_APP_DEV_SERVER_URL, PORT } = process.env;

const SERVER_URL =
  NODE_ENV === 'production' ? REACT_APP_PRODUCTION_SERVER_URL : REACT_APP_DEV_SERVER_URL;

module.exports = {
  SERVER_URL,
  PORT
};

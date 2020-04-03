import axios from 'axios';
// import process from 'process';
import { base_api as api } from './MathdroUrl';
import { history_api as hapi } from './Covid19api';

// const urlWithMode = () => {
//   // const mode = process.env.NODE_ENV;
//   // if (mode === 'production') {
//   //   return '';
//   // }
//   return 'https://cors-anywhere.herokuapp.com/';
// };

export const ApiGet = ({ path, params }) => {
  return axios({
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
      origin: 'x-requested-with',
    },
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/${api}${path}`,
    params,
    timeout: 20000,
  });
};

export const ApiGetTHToday = () => {
  return axios({
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
    },
    method: 'GET',
    url: `https://covid19.th-stat.com/api/open/today`,
    timeout: 20000,
  });
};

export const ApiGetHistory = ({ path, params }) => {
  return axios({
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
    },
    method: 'GET',
    url: `${hapi}${path}`,
    params,
    timeout: 5000,
  });
};

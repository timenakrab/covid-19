import axios from 'axios';
import process from 'process';
import { base_api as api } from './MathdroUrl';

const urlWithMode = () => {
  const mode = process.env.NODE_ENV;
  if (mode === 'production') {
    return '';
  }
  return 'https://cors-anywhere.herokuapp.com/';
};

export const ApiGet = ({ path, params }) => {
  return axios({
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
    },
    method: 'GET',
    url: `${urlWithMode()}${api}${path}`,
    params,
    timeout: 20000,
  });
};

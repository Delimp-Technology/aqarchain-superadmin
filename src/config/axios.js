import axios from 'axios';
import {defaultOptions} from '.';

import {store} from '../redux/store';

export const authAxios = () => {
  let token = store.getState('state').auth.token;
  return axios.create({
    baseURL: defaultOptions.baseUrl,
    headers: {
      Authorization: `${token ? `Bearer ${token}` : null}`,
    },
  });
};

export const withoutAuthAxios = () => {
  return axios.create({
    baseURL: defaultOptions.baseUrl,
  });
};

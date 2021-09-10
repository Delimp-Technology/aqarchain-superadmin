import {authAxios, withoutAuthAxios} from '../../config/axios';

import {SAVE_TOKEN, USER_DATA_SAVE} from './types';

export const userLogin = data => dispatch => {
  return new Promise((resolve, reject) => {
    withoutAuthAxios()
      .post('admin/adminuser/login', data)
      .then(
        response => {
          dispatch({
            type: USER_DATA_SAVE,
            payload: response.data.data,
          });
          dispatch({
            type: SAVE_TOKEN,
            payload: response.data.data.token,
          });
          resolve(response.data);
        },
        error => {
          reject(error.response);
        },
      )
      .catch(error => {
        reject(error);
      });
  });
};

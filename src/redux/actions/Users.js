import {authAxios} from '../../config/axios';

export const getUsersList = data => async dispatch => {
  return new Promise(async (resolve, reject) => {
    await authAxios()
      .get('/admin/adminuser/')
      .then(
        response => {
          resolve(response.data);
        },
        error => {
          reject(error);
        },
      )
      .catch(error => reject(error));
  });
};

import {authAxios} from '../../config/axios';

export const getPropertyList = data => async dispatch => {
  return new Promise(async (resolve, reject) => {
    authAxios()
      .post('/admin/property/list', data)
      .then(
        response => resolve(response.data),
        error => reject(error),
      )
      .catch(error => reject(error));
  });
};

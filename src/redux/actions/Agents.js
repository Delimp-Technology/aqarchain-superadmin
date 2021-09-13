import {authAxios} from '../../config/axios';

export const getAgentsList = () => async dispatch => {
  return new Promise(async (resolve, reject) => {
    await authAxios()
      .get('/admin/agent/list')
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

export const getAgentCount = () => async dispatch => {
  return new Promise(async (resolve, reject) => {
    await authAxios()
      .get('/admin/agent/count')
      .then(
        response => {
          resolve(response.data);
        },
        error => {
          reject(error);
        },
      )
      .catch(error => {
        reject(error);
      });
  });
};

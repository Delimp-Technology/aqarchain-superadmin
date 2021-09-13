import {authAxios} from '../../config/axios';

export const getRequestsList = () => async dispatch => {
  return new Promise(async (resolve, reject) => {
    await authAxios()
      .get('/admin/dashboard/approvals/')
      .then(
        response => {
          resolve(response.data);
        },
        error => {
          reject(error.response.data);
        },
      )
      .catch(error => {
        reject(error);
      });
  });
};

export const approvedUser = id => async dispatch => {
  return new Promise(async (resolve, reject) => {
    await authAxios()
      .delete('/admin/dashboard/admin/' + id)
      .then(
        response => {
          resolve(response.data);
        },
        error => {
          reject(error.response.data);
        },
      )
      .catch(error => {
        reject(error);
      });
  });
};

export const approvedProperty = id => async dispatch => {
  return new Promise(async (resolve, reject) => {
    await authAxios()
      .delete('/admin/dashboard/property/' + id)
      .then(
        response => {
          resolve(response.data);
        },
        error => {
          reject(error.response.data);
        },
      )
      .catch(error => {
        reject(error);
      });
  });
};

export const getLogsList = () => async dispatch => {
  return new Promise(async (resolve, reject) => {
    await authAxios()
      .get('/admin/dashboard/logs')
      .then(
        response => {
          resolve(response.data);
        },
        error => {
          reject(error.response.data);
        },
      )
      .catch(error => {
        reject(error);
      });
  });
};

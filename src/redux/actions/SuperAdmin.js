import {authAxios} from '../../config/axios';
import {SAVE_ROLES} from './types';
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

export const getRolesList = () => async dispatch => {
  return new Promise(async (resolve, reject) => {
    await authAxios()
      .get('/admin/role')
      .then(
        response => {
          resolve(response.data);
          dispatch({type: SAVE_ROLES, payload: response.data.data});
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

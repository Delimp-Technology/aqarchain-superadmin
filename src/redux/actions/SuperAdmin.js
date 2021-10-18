import {authAxios} from '../../config/axios';
import {SAVE_ROLES} from './types';

export const uploadImage = (data) => dispatch => {
	return new Promise((resolve, reject) => {
		authAxios()
			.post('/upload/property/image',data)
			.then(
				response => {
					resolve(response.data);
				},
				error => {
					console.log(error);
					reject(error);
				},
			)
			.catch(error => {
				reject(error);
			});
	});
};

export const submitProperty = (data, id) => dispatch => {
	return new Promise((resolve, reject) => {
		authAxios()
			.patch('/admin/tokenized-property/'+id, data)
			.then(
				response => {
					resolve(response.data);
				},
				error => {
					reject(error.response?.data);
				},
			)
			.catch(error => {
				reject(error);
			});
	});
};

export const getPropertyTypeList = (data) => dispatch => {
	return new Promise((resolve, reject) => {
		authAxios()
			.get('/config/propertyType')
			.then(
				response => {
					resolve(response.data);
				},
				error => {
					reject(error.response?.data);
				},
			)
			.catch(error => {
				reject(error);
			});
	});
};

export const initiaPropertySubmit = (data) => async dispatch => {
	return new Promise((resolve, reject) => {
		authAxios()
			.post('/admin/tokenized-property/',data)
			.then(
				(response) => {
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

import { authConstants } from './constants';
import axiosInstance from '../helpers/axios';

export const login = (user) => {
  console.log('user', user);
  return async (dispatch) => {
    const res = await axiosInstance.post('/admin/signin', {
      ...user,
    });
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};

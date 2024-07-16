import { axiosInstance } from 'utility/constants'; //  Getting the Constants from utiltiy/constants (Basic System Settings)

const loginAPI = `/api/auth/v1/login`;

export const LoginWithID = (loginId, password) =>
  axiosInstance({
    method: 'POST',
    url: loginAPI,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      loginId,
      password,
    },
  });

export const Logout = () =>
  axiosInstance({
    method: 'POST',
    url: `/api/auth/v1/logout`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const ReturnNewSession = () =>
  axiosInstance({
    method: 'GET',
    url: `/api/auth/v1/check`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const GetAuthInfo = () =>
  axiosInstance({
    method: 'GET',
    url: `/api/auth/v1/auth-info`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const GetAuthInfoWithToken = (token) =>
  axiosInstance({
    method: 'GET',
    url: `/api/auth/v1/auth-info`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const GetUserDelegationLink = () =>
  axiosInstance({
    method: 'GET',
    url: ` /api/user-picklist/applications?page=0&pageSize=1&code=BSSIAM`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

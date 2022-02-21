import axios from 'axios';
import { toast } from 'react-toastify';

const errorMessage = 'Something went wrong, please try again later';

export const ADMIN_BASEURL =
  'https://altmalldashbkndv3.sterlingapps.p.azurewebsites.net';
/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  //baseURL: 'http://localhost:3000',
  baseURL: 'https://altmallv3customer-be.sterlingapps.p.azurewebsites.net/api',
  headers: {
    'x-auth-token':
      localStorage.getItem('jwtToken') ?? ''
        ? JSON.parse(localStorage.getItem('jwtToken') ?? '')
        : '',
    // 'Content-Type': 'application/json',
  },
  // auth: { Authorization: 'Bearer ' +  }
});

const requestHandler = request => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  request.headers['x-auth-token'] =
    localStorage.getItem('jwtToken') ?? ''
      ? JSON.parse(localStorage.getItem('jwtToken') ?? '')
      : '';

  return request;
};

// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRmN2M4YzRiMzk4ZDc5ZWE4YzMwNGIiLCJlbWFpbCI6Im95aW5iYXlvZGU3NUBnbWFpbC5jb20iLCJpYXQiOjE2NDIwNzkwNjR9.ivbKRu3psiFJCTLmJoesBbC9dGxQMWmUTgmvVi6DMUQ'

const AxiosInstance = axios.create({
  baseURL: 'https://altmallv3customer-be.sterlingapps.p.azurewebsites.net/api',
});

export const apiCallAdmin = function (
  method,
  route,
  body = {},
  token = '',
  contentType = '',
) {
  const onSuccess = function (response) {
    console.debug('Request Successful!', response);
    return response;
  };

  const onError = function (error) {
    console.error('Request Failed:', error.config);
    let message: string = '';
    let statusCode: number;

    if (error.response) {
      const {
        data: { message: msg },
        status,
      } = error.response;
      message = msg;
      statusCode = status;
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      statusCode = 405;
      message = error.message || errorMessage;
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }
    toast.error(message);
    return { message, statusCode };
  };

  if (token === '') {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWY1N2NkZTJlZTQ2YzlmMDNjOGIwNCIsIm5hbWUiOiJJc3JhZWwgRW1vaXRvbG9nYSIsImVtYWlsIjoiSXNyYWVsLkVtb2l0b2xvZ2FAc3RlcmxpbmcubmciLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJpYXQiOjE2NDI2MjU1MzAsImV4cCI6MTY3NDE4MzEzMH0.zh5NKULmGRTk6CEklkqsuJy273Qzqij_f0ERpsYFZ3k';
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  if (contentType !== '') {
    AxiosInstance.defaults.headers.common['Content-Type'] = contentType;
  }

  return AxiosInstance({
    method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError);
};

client.interceptors.request.use(request => requestHandler(request));

export const apiCall = function (method, route, body = null, token = null) {
  const onSuccess = function (response) {
    console.debug('Request Successful!', response);
    return response.data;
  };

  const onError = function (error) {
    console.error('Request Failed:', error.config);
    let message: string = '';
    let statusCode: number;

    if (error.response) {
      const {
        data: { message: msg },
        status,
      } = error.response;
      message = msg;
      statusCode = status;
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', error.response.status);
      console.error('Dat:', error.response.data);
      console.error('Headers:', error.response.headers);
      toast.error(error.response.data, {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      statusCode = 405;
      message = error.message || errorMessage;
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return { message, statusCode };
  };

  return client({
    method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError);
};

export default client;

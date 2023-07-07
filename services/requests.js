import { axiosInstance } from './api';

const postAPI = (endPoint, body) =>
  axiosInstance
    ?.post(endPoint, body)
    .then(response => response.data)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

const getAPI = (endPoint, body) =>
  axiosInstance
    ?.get(endPoint, body)
    .then(response => response.data)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

const putAPI = (endPoint, body) =>
  axiosInstance
    ?.put(endPoint, body)
    .then(response => response.data)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

export { getAPI, postAPI, putAPI };

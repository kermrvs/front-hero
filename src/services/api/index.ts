import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://app-heromangment.herokuapp.com/hero/',
});

export default api;

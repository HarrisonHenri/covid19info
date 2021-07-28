import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid-19.dataflowkit.com/v1',
});

export default api;

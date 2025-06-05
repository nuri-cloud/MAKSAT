import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://6832bc87c3f2222a8cb354a1.mockapi.io/',
  timeout: 5000,
});
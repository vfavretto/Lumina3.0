/* eslint-disable no-useless-catch */
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const setToken = (token) => {
  localStorage.setItem('token', token);
};
  
  const getToken = () => {
    return localStorage.getItem('jwtToken');
  };
  
  
  export const isAuthenticated = () => {
    const token = getToken();
    return !!token;
  };
  
  export const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      if (response.data.token) {
        setToken(response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const register = async (name, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      if (response.data.token) {
        setToken(response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Configurar o Axios para enviar o token em todas as requisições
  axios.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
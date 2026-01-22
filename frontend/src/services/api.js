import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  login: (username, password) =>
    api.post('/token/', { username, password }),
  
  refreshToken: (refresh) =>
    api.post('/token/refresh/', { refresh }),
};

export const serviceService = {
  getServices: () =>
    api.get('/services/'),
  
  getServiceById: (id) =>
    api.get(`/services/${id}/`),
};

export const userService = {
  getUsers: () =>
    api.get('/users/'),
  
  getUserProfile: () =>
    api.get('/users/profile/'),
};

export default api;

import axios from 'axios';

// Create an Axios instance for the base API setup
const API = axios.create({
  baseURL: 'http://127.0.0.1:8000', // FastAPI backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register User API call
export const registerUser = async (data) => {
  try {
    const response = await API.post('/users/register', data);
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error.response?.data);
    throw error.response?.data || 'Error during registration';
  }
};

// Login User API call
export const loginUser = async (data) => {
  try {
    const response = await API.post('/users/login', data);
    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response?.data);
    throw error.response?.data || 'Error during login';
  }
};

// Default export for general API requests
export default API;

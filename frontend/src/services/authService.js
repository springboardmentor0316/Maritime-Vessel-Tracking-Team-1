import axios from 'axios';

// Real Authentication Service

export const login = async (username, password) => {
  try {
    const response = await axios.post('/api/token/', { username, password });
    const { access, refresh } = response.data;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    return { token: access, role: 'user' }; // Adjust role as needed
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Login failed');
  }
};

export const register = async (username, email, password, role = 'OPERATOR') => {
  try {
    const response = await axios.post('/api/accounts/register/', { username, password, role });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Registration failed');
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await axios.get('/api/accounts/profile/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Failed to fetch profile');
  }
};

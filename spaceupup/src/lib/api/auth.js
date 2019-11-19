import client from './client';

export const login = ({ user_Id, user_password }) =>
  client.post('/api/auth/login', { user_Id, user_password });

export const register = ({ user_Id, user_password, user_Name, user_Department}) =>
  client.post('/api/auth/register', { user_Id, user_password, user_Name, user_Department });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
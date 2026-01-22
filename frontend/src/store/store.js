import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import serviceReducer from './serviceSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    services: serviceReducer,
    users: userReducer,
  },
});

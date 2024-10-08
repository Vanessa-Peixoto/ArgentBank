import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/formSlice';
import { authApi } from '../services/authApi';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

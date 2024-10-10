import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/formSlice';
import { authApi } from '../services/authApi';
import authReducer from '../features/authSlice';
import { profileApi } from '../services/profileApi';

export const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, profileApi.middleware),
});

import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/formSlice';
import { authApi } from '../services/authApi';
import authReducer from '../features/authSlice';
import { profileApi } from '../services/profileApi';
import { updateProfileApi } from '../services/updateProfileApi';

export const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [updateProfileApi.reducerPath]: updateProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, profileApi.middleware, updateProfileApi.middleware),
});

import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/formSlice';
import { authApi } from '../services/authApi';

export const store = configureStore({
  reducer: {
    form: formReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/formSlice';
import { authApi } from '../services/authApi';
import authReducer from '../features/authSlice';
import { profileApi } from '../services/profileApi';
import { updateProfileApi } from '../services/updateProfileApi';

/**
 * @description Configuring the Redux store
 * 
 * @property {Function} reducer.form - Reducer for form management
 * @property {Function} reducer.auth - Reducer for authentication management
 * @property {Function} reducer[authApi.reducerPath] - Reducer for the authentication API
 * @property {Function} reducer[profileApi.reducerPath] - Reducer for the profile management API
 * @property {Function} reducer[updateProfileApi.reducerPath] - Reducer for the update profile management API.
 * 
 * @returns {Store} Return redux store
 */
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

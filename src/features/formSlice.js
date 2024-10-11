import { createSlice } from '@reduxjs/toolkit';

/**
 * @description Manages the state of a user login form
 */

/**
 * @property {string} username - username
 * @property {string} password - password
 * @property {boolean} rememberMe - Indicates whether the "remember me" option is enabled.
 */
const initialState = {
  username: '',
  password: '',
  rememberMe: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
  }
});

//Export actions to use them in the component
export const { updateUsername, updatePassword, toggleRememberMe } = formSlice.actions;

//Export of the reducer for the store
export default formSlice.reducer;
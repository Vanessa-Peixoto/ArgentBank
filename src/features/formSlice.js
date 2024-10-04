import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  rememberMe: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  //Modify state based on action sent
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
    submitForm: (state) => {
      console.log('Formulaire soumis :', state);
      // A remplir pour rediriger l'utilisateur si connexion reussi
    }
  }
});

//Export actions to use them in the component
export const { updateUsername, updatePassword, toggleRememberMe, submitForm } = formSlice.actions;

//Export of the reducer for the store
export default formSlice.reducer;
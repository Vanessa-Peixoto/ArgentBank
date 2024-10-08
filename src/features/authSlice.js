import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isConnected: false,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isConnected = true,
            state.user = action.payload
        },
        logout: (state) => {
            state.isConnected = false,
            state.user = null
        } 
    }
})

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
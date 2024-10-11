import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isConnected: !!sessionStorage.getItem('token'),
    user: JSON.parse(sessionStorage.getItem('user')) || null,
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
            state.user = null,
            sessionStorage.removeItem('token');
        },
        restoreSession: (state, action) => {
            state.isConnected = true;
            state.user = action.payload;
        }
    }
})

export const { loginSuccess, logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
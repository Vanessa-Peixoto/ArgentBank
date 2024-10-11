import { createSlice } from "@reduxjs/toolkit";

/**
 * @description Manages user authentication status
*/

//Initial state of authentication
/**
 * @property {boolean} isConnected - Indicates whether the user is logged in or not
 * @property {Object|null} user - Contain info of user logged
 */
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
'use client';

import { createSlice } from '@reduxjs/toolkit';

interface UserType {
  username: string
}

export interface AuthState {
  user: UserType,
  token: string,
  isAuthenticated: boolean,

}

const initialState: AuthState = {
  user: { username: '' },
  token: '',
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { username: action.payload.user.username};
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    register: (state, action) => {
      state.user = { username: action.payload.user.username};
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = { username: ''};
      state.token = '';
      state.isAuthenticated = false;
    }
  }
})

export const { login, register, logout } = authSlice.actions;

export default authSlice.reducer;
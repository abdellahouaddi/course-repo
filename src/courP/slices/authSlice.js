import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    role: null, // admin or user
    status: 'idle', // can be 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    login: (state, action) => {
      const { user, role } = action.payload;
      state.user = user;
      state.role = role;
      state.status = 'succeeded';
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.status = 'idle';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

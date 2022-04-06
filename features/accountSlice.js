import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    user: {},
    isLoggedIn: false,
    username: '',
    password: '',
  },
  reducers: {
    setUsername: (state, action) => (state.username = action.payload),
    clearUsername: (state) => (state.username = ''),
    setPassword: (state, action) => (state.password = action.payload),
    clearPassword: (state) => (state.password = ''),
    setIsLoggedIn: (state, action) => (state.isLoggedIn = action.payload),
  },
});

export const {
  setUsername,
  clearUsername,
  setPassword,
  clearPassword,
  setIsLoggedIn,
} = accountSlice.actions;
export default accountSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    username: "DemoUser",
    email: "minhhieu@gmail.com",
    role: "teacher", // test
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = {
        username: action.payload.username,
        role: action.payload.role,
      };
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setRole(state, action) {
      // Giả sử rằng user đã được xác thực trước khi thay đổi role
      if (state.user) {
        state.user.role = action.payload;
      }
    },
  },
});

export const { login, logout, setRole } = authSlice.actions;
export default authSlice.reducer;

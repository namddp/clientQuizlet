// Action creator khi đăng nhập thành công hoặc đăng ký thành công
export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  // Action creator khi đăng xuất
  export const logout = () => ({
    type: 'LOGOUT',
  });
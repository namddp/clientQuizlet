import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from 'react-redux';
import store from '../redux/store';
import React, { useEffect } from 'react';
import { loginSuccess } from "@/redux/actions/usersActions";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Nếu có token trong LocalStorage, bạn có thể gọi API để lấy thông tin user sau khi đăng nhập thành công.
      // Trong ví dụ này, mình giả định rằng bạn đã lưu thông tin user vào localStorage với key là 'user'.
      const user = JSON.parse(localStorage.getItem('user'));

      // Gọi action creator loginSuccess để khôi phục thông tin user vào Redux store
      store.dispatch(loginSuccess(user));
    }
  }, []);


  return (
    <Provider store = {store}>
      <ChakraProvider>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}

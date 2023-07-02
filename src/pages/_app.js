import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App({ Component, pageProps }) {
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

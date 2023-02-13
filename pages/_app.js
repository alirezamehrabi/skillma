import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/DatePicker.css";
// import "../styles/Calendar.css";
import { useEffect, useState } from "react";
import { DataProvider } from "../src/Context/DataContext";
import Loader from "../src/components/Loader/Loader2";
import Router from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import store from "./api/redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
    
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (<>
  <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  <Provider store={store}><DataProvider>{loading && <Loader />}<Component {...pageProps} /></DataProvider></Provider></>);
}

export default MyApp;

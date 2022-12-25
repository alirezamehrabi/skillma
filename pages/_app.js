import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/DatePicker.css";
import "../styles/Calendar.css";
import { useEffect, useState } from "react";
import { DataProvider } from "../src/Context/DataContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (<>
  <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  <DataProvider><Component {...pageProps} /></DataProvider></>);
}

export default MyApp;

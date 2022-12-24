import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/DatePicker.css";
import "../styles/Calendar.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;

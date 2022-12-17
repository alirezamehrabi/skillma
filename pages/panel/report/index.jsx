import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import Chart from "../../../src/components/panel/Chart1/Chart1.tsx";
import Chart2 from "../../../src/components/panel/Chart2/Chart2.tsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import re from "../../../styles/panel/Report.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/Course.module.css";
import men from "../../../styles/panel/Menu.module.css";
import tr from "../../../styles/panel/Trend.module.css";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import { Button, Modal } from "react-bootstrap";

const Trend = () => {
  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${dash.container}`}>
        <div className={`row d-flex justify-content-between`}>
          <div className={`col-2 ${men.menucontainer}`}>
            <Link href="/panel/dashboard">
              <div className={`${men.logo}`}></div>
            </Link>

            <Menu />
          </div>
          <div className={`col-lg-10 ${dash.maincontainer}`}>
            <Header />
            <div className={`row`}>
                <div className={`col-12`}>
                <Chart/>
                </div>
                <div className={`col-12 ${re.chart2}`}>
                <Chart2/>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Trend;

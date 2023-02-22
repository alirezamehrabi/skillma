import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
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
            <div className={`row ${tr.trcontainer}`}>
              <div className={`col-md-6 ${tr.trimg}`}>
                <Image
                  src={require(`../../../src/assets/panel/dash/trend.png`)}
                  alt="trend"
                />
              </div>
              <div className={`col-md-6`}>
                <h5 className={`${tr.trTitle}`}>Trend Title</h5>
                <h6 className={`${tr.trDes}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`&apos;`s
                  standard. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </h6>
                <div className={`col-12 d-flex justify-content-start mt-4`}>
              <button type="button" className={`${co.conBTN} ${co.nxt}`}>
                Pay
              </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Trend;

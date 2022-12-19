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
import DatePicker from 'react-date-picker/dist/entry.nostyle';

const Trend = () => {
  const [value1, onChange1] = useState(new Date());
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
                <div className={`row position-relative `}>
                  <div className={`col-md-7 order-2 order-md-1 ${re.chart2}`}><Chart2/>
                  <div className={`${re.chartborder}`}>
                  <h6 className={``}>total income</h6>
                  <h5 className={`fw-bold`}>50 $</h5>
                </div>
                </div>
                  <div className={`col-md-5 order-1 order-md-2`}>
                  <div className={`${re.datepicker}`}>
                                            <DatePicker onChange={onChange1} value={value1} maxDetail={"year"} format={"MMMM yyyy"}/>
                                            <h5 className={`fw-bold`}>Total Income</h5>
                                        </div>
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
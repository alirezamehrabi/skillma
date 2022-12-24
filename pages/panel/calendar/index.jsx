import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import Chart from "../../../src/components/panel/Chart1/Chart1.tsx";
import Cal from "../../../src/components/panel/Calender/Calender";
import Chart2 from "../../../src/components/panel/Chart2/Chart2.tsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import ca from "../../../styles/panel/Calendar.module.css";
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
              <div className={`row mb-4`}>
                <div className={`col-12 ${ca.caltitle}`}>
                <span className={`fw-bold`}>Calendar</span>
                <div className={``}>
                    <button type="button" className={`${ca.calbtn}`}>
                    Create New
                    </button>
              </div>
                </div>
              </div>
              <div className={`col-lg-9`}>
              <Cal
                month={10} 
                year={2021} 
                preloadedEvents={[
                  {
                    id: 1,
                    name: "Holiday",
                    dateFrom: "2021-09-29T12:00",
                    dateTo: "2021-10-03T08:45",
                    //meta: SAMPLE_META,
                    type: "Holiday"
                  },
                  {
                    id: 2,
                    name: "Meeting",
                    dateFrom: "2021-10-01T09:45",
                    dateTo: "2021-10-04T22:00",
                    //meta: SAMPLE_META,
                    type: "Standard"
                  },
                  {
                    id: 3,
                    name: "Away",
                    dateFrom: "2021-10-01T01:00",
                    dateTo: "2021-10-01T23:59",
                    //meta: SAMPLE_META,
                    type: "Busy"
                  },
                  {
                    id: 4,
                    name: "Inspection",
                    dateFrom: "2021-10-19T07:30",
                    dateTo: "2021-10-21T23:59",
                    //meta: SAMPLE_META,
                    type: "Standard"
                  },
                  {
                    id: 5,
                    name: "Holiday - Greece",
                    dateFrom: "2021-10-14T08:00",
                    dateTo: "2021-10-16T23:59",
                    //meta: SAMPLE_META,
                    type: "Holiday"
                  },
                  {
                    id: 6,
                    name: "Holiday - Spain",
                    dateFrom: "2021-10-29T08:00",
                    dateTo: "2021-10-31T23:59",
                    //meta: SAMPLE_META,
                    type: "Holiday"
                  }
                ]}
                />
              </div>
              <div className={`col-lg-3`}>
              <div className={`col-md-11 mx-auto ${ca.rightitemholder}`}>
                                    <div className={`col-12 ${ca.timelinepart}`}>
                                        <h6 className={`col-12 mt-4 ${dash.tltitle}`}>Event List</h6>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>
                                        <div className={`col-12 mb-4`}>
                                        <h6 className={`${dash.timelineremain}`}>//In next 10 minute</h6>
                                        </div>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>

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

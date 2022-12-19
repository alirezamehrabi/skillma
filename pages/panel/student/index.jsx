import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import StuProfile from "../../../src/components/panel/TeacherProfile/TeacherProfile.jsx";
import StuPayment from "../../../src/components/panel/TeacherPayment/TeacherPayment.jsx";
import StuRecommendation from "../../../src/components/panel/TeacherRecommendation/TeacherRecommendation.jsx";
import Chart from "../../../src/components/panel/Chart1/Chart1.tsx";
import Chart2 from "../../../src/components/panel/Chart2/Chart2.tsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import st from "../../../styles/panel/Teacher.module.css";
import re from "../../../styles/panel/Report.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/Course.module.css";
import men from "../../../styles/panel/Menu.module.css";
import { Button, Modal,Tab, Tabs } from "react-bootstrap";
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import search from "../../../styles/Search.module.css";
import main from "../../../styles/MainCourse.module.css";

const Trend = () => {
  const [value1, onChange1] = useState(new Date());
  const notify= <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="Group_21226" data-name="Group 21226" transform="translate(1)">
    <rect id="Rectangle_6293" data-name="Rectangle 6293" width="40" height="40" transform="translate(-1)" fill="#2d3ddf" opacity="0"/>
    <path id="Path_83053" data-name="Path 83053" d="M18.125,3A15.125,15.125,0,1,0,33.25,18.125,15.124,15.124,0,0,0,18.125,3Zm0,27.225a12.1,12.1,0,1,1,12.1-12.1A12.1,12.1,0,0,1,18.125,30.225Zm0-12.856a1.513,1.513,0,0,0-1.512,1.512v4.538a1.512,1.512,0,1,0,3.025,0V18.881A1.513,1.513,0,0,0,18.125,17.369Zm0-6.05a1.891,1.891,0,1,0,1.891,1.891A1.891,1.891,0,0,0,18.125,11.319Z" transform="translate(1.875 1.875)" fill="#2d3ddf"/>
  </g>
</svg>
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
            <div className={`row ${st.main}`}>
            <div className={`col-md-8 mx-auto ${st.not}`}>
                <div className={`row`}>
                <div className={`col-1`}>{notify}</div>
                <div className={`col-10`}>Wellcom back  Dani Beaumont... complete your profile</div>
                <div className={`col-1 fw-bold`}>(20%)</div>
                </div>
        </div>
            <Tabs
            defaultActiveKey="pop"
            id="uncontrolled-tab-example"
            className={`mb-5 ${search.tabs} ${search.tabs2} changeTab1`}
          >
            <Tab eventKey="pop" title="Edit Profile" className={``}>
              <div className={`col-12`}>
                <StuProfile/>
              </div>
            </Tab>
            <Tab eventKey="new" title="profile public">
              <div className={`col-12`}>
                
              </div>
            </Tab>
            <Tab eventKey="pay" title="Payment method">
              <div className={`col-12`}>
                <StuPayment/>
              </div>
            </Tab>
            <Tab eventKey="trend" title="Recommendation">
              <div className={`col-12`}>
                <StuRecommendation/>
              </div>
            </Tab>
          </Tabs>
            </div>
            
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Trend;

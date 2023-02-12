import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import Chart from "../../../src/components/panel/Chart1/Chart1.tsx";
import Chart2 from "../../../src/components/panel/Chart2/Chart2.tsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import re from "../../../styles/panel/Report.module.css";
import men from "../../../styles/panel/Menu.module.css";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { getItem } from "../../../src/core/services/storage/storage.js";
const Report = () => {
  const [courseDt, setCourseDt] = useState();
  // console.log(courseDt)
  const fetchcourse = async (p) => {
    const token = getItem("token");
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetTeacherCoursesName`,
        { headers: { Authorization: "Bearer " + token } }
      );
      const json = await result.json();
      // console.log(json.data.pageData)
      setCourseDt(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcourse();
  }, []);
  console.log(courseDt)
  const [value1, onChange1] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const now = new Date().toISOString();
  const val = value.toISOString()
  const val1 = value1.toISOString()
const [coursenum, setcoursenum] = useState();
const[total,setTotal]= useState();
  // const coursedt = 
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
              <div className={`col-12 mb-5`}>
                <h5 className="mb-4">Click on Date and Course to see the detail.</h5>
                <select defaultValue={'DEFAULT'} className={`mx-4`}>
                <option value="DEFAULT" disabled hidden>Course Name</option>
                  {courseDt !== undefined && courseDt.map((i)=>{return(<option key={i.id} onClick={()=>{setcoursenum(i.id)}} value={i.id}>{i.courseName}</option>)})}
                </select>
              <DatePicker
                      onChange={onChange}
                      value={value}
                      maxDetail={"decade"}
                      format={"yyyy"}
                    />
                <Chart date={val} courseid={coursenum} />
              </div>
              <div className="my-5"/>
              <div className={`row position-relative `}>
                <div className={`col-md-7 order-2 order-md-1 my-5 ${re.chart2}`}>
                  <Chart2 date={val1} handleRandom={(x) => setTotal(x)}/>
                  <div className={`${re.chartborder}`}>
                    <h6 className={``}>total income</h6>
                    <h5 className={`fw-bold`}>{total} $</h5>
                  </div>
                </div>
                <div className={`col-md-5 order-1 order-md-2`}>
                  <div className={`${re.datepicker}`}>
                    <DatePicker
                      onChange={onChange1}
                      value={value1}
                      maxDetail={"year"}
                      format={"yyyy"}
                    />
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
export default Report;

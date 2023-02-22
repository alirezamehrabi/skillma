import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getItem } from "../../../src/core/services/storage/storage.js";
import Loader from "../../../src/components/Loader/Loader.jsx";
import Select from "react-select";
import { addEvent } from "../../api/add-event.js";

const ContactSchema = Yup.object().shape({
  title: Yup.string()

    .min(2, "Too Short!")

    .required("Required"),

  people: Yup.string().required("Required"),
  description: Yup.string()

    .min(4, "Too Short!")

    .required("Required"),
  startTime: Yup.string().required("Required"),
  endTime: Yup.string().required("Required"),
});
export async function getStaticProps() {
  const res = await fetch(`${process.env.webURL}/Event/GetDashboardEvents`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
const Trend = (props) => {
  const [courseDt1, setCourseDt1] = useState();
  console.log(courseDt1);
  const fetchcourse1 = async () => {
    const token = getItem("token");
    try {
      const result = await fetch(
        `${process.env.webURL}/Event/GetDashboardEvents`,
        { headers: { Authorization: "Bearer " + token } }
      );
      const json = await result.json();
      setCourseDt1(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcourse1();
  }, []);
  console.log(props.posts);
  const [courseDt, setCourseDt] = useState();
  const [stDt, setstDt] = useState();
  const [taskDt, setTaskDt] = useState();
  const fetchTask = async (p) => {
    const token = getItem("token");
    try {
      const result = await fetch(`${process.env.webURL}/Task/GetMainTasks`, {
        headers: { Authorization: "Bearer " + token },
      });
      const json = await result.json();
      // console.log(json.data);
      setTaskDt(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTask();
  }, []);
  const [cid, setCid] = useState();

  const fetchStu = async (p) => {
    const token = getItem("token");
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetStudentOfCourseByCourseId?id=${cid}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      const json = await result.json();
      // console.log(json.data);
      setstDt(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStu(cid);
  }, [cid]);
  console.log(cid);
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

  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const [delid, setDelid] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setDelid(id);
  };
  const [stulist, setStu] = useState();
  const handleStList = (e) => {
    setStu(e);
  };
  const [slist, setSlist] = useState();
  const handleSList = (e) => {
    setSlist(e.target.value);
  };
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
                    <button
                      type="button"
                      className={`${ca.calbtn}`}
                      onClick={handleShow}
                    >
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
                      type: "Holiday",
                    },
                    {
                      id: 2,
                      name: "Meeting",
                      dateFrom: "2021-10-01T09:45",
                      dateTo: "2021-10-04T22:00",
                      //meta: SAMPLE_META,
                      type: "Standard",
                    },
                    {
                      id: 3,
                      name: "Away",
                      dateFrom: "2021-10-01T01:00",
                      dateTo: "2021-10-01T23:59",
                      //meta: SAMPLE_META,
                      type: "Busy",
                    },
                    {
                      id: 4,
                      name: "Inspection",
                      dateFrom: "2021-10-19T07:30",
                      dateTo: "2021-10-21T23:59",
                      //meta: SAMPLE_META,
                      type: "Standard",
                    },
                    {
                      id: 5,
                      name: "Holiday - Greece",
                      dateFrom: "2021-10-14T08:00",
                      dateTo: "2021-10-16T23:59",
                      //meta: SAMPLE_META,
                      type: "Holiday",
                    },
                    {
                      id: 6,
                      name: "Holiday - Spain",
                      dateFrom: "2021-10-29T08:00",
                      dateTo: "2021-10-31T23:59",
                      //meta: SAMPLE_META,
                      type: "Holiday",
                    },
                  ]}
                />
              </div>
              <div className={`col-lg-3`}>
                <div className={`col-12 mt-5 ${dash.timelinepart}`}>
                  <h6 className={`col-12 mt-5 ${dash.tltitle}`}>Event List</h6>
                  {courseDt1 !== undefined && courseDt1.map((i,index) => {
                    return (
                      <div className={`col-12 mb-4 ${dash.timelineitem}`} key={index}>
                        <h5 className={`${dash.timelinename}`}>
                          {i.eventTitle}
                        </h5>
                        <h6 className={`${dash.timelinetitle}`}>
                          {i.courseName}
                        </h6>
                        <h6 className={`${dash.timelineclock}`}>
                          {i.startTime}
                        </h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          size="xl"
          show={show}
          onHide={handleClose}
          className={`${co.modalholder}`}
        >
          <Modal.Body className={`${co.modalbody} ${co.modalbody2}`}>
            <h5 className={``}>Create new task</h5>

            <Formik
              initialValues={{
                title: "",
                people: "",
                startDate: "",
                endDate: "",
                startTime: "",
                endTime: "",
                description: "",
                isSms: [],
                isEmail: [],
              }}
              validationSchema={ContactSchema}
              // same shape as initial values
              onSubmit={async (values) => {
                const userObj = {
                  title: values.title,
                  // users: values.people,
                  // courseId: values.courseList,
                  // startDate: value1,
                  // endDate: value2,
                  // startTime: values.startTime,
                  // endTime: values.endTime,
                  // description: values.description,
                  // atachFileName: values.photo,
                  // isSms: [values.isSms],
                  // isEmail: [values.isEmail],
                };
                const user = await addEvent(userObj);
                // setUser(user);

                console.log(values);
              }}
            >
              {({ errors, touched, values }) => (
                <Form className={co.form}>
                  <label className={`${co.label}`}>
                    Title
                    <Field
                      name="title"
                      id="title"
                      type="text"
                      placeholder="Event Title"
                      className={`col-12 mx-auto ${co.field}`}
                    />
                    {errors.title && touched.title ? (
                      <div className={co.err}>{errors.title}</div>
                    ) : null}
                  </label>

                  <label htmlFor="courseList" className={`${co.label}`}>
                    Type Event
                  </label>
                  <Field
                    as="select"
                    name="courseList"
                    placeholder="EventType"
                    onKeyUp={handleSList}
                    className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`}
                    defaultValue={"DEFAULT"}
                  >
                    <option hidden value="DEFAULT">
                      EventType
                    </option>
                    {courseDt.map((i) => {
                      return (
                        <option
                          value={i.id}
                          key={i.id}
                          onClick={() => {
                            setCid(i.id);
                          }}
                        >
                          {i.courseName}
                        </option>
                      );
                    })}
                  </Field>
                  {errors.courseList && touched.courseList ? (
                    <div className={co.err}>{errors.courseList}</div>
                  ) : null}
                  <label htmlFor="courseList" className={`${co.label} mt-3`}>
                    Student List
                  </label>
                  {stDt !== undefined ? (
                    <Select
                      value={stulist}
                      onChange={handleStList}
                      isMulti
                      name="people"
                      className="basic-multi-select"
                      classNamePrefix="select"
                      options={stDt.map((i) => ({
                        label: i.studentMame,
                        value: i.id,
                      }))}
                    />
                  ) : null}
                  <div className={`row d-flex justify-content-between`}>
                    <label className={`col-lg-6 ${co.label} ${co.labelleft}`}>
                      Start Date
                      <br />
                      <DatePicker
                        onChange={onChange1}
                        value={value1}
                        className={`col-12 ${co.datepick}`}
                      />
                    </label>
                  </div>
                  <div className={`row d-flex justify-content-between`}>
                    <div className={`col-lg-6 ${co.timefield}`}>
                      <label className={`col-12 ${co.label} ${co.labelleft}`}>
                        Start Time
                        <Field
                          name="startTime"
                          placeholder="10:00"
                          className={`${co.field} `}
                        />
                        {errors.startTime && touched.startTime ? (
                          <div className={co.err}>{errors.startTime}</div>
                        ) : null}
                      </label>
                    </div>
                    <div className={`col-lg-6 ${co.timefield}`}>
                      <label className={`col-12 ${co.label}`}>
                        End Time
                        <Field
                          name="endTime"
                          placeholder="10:00"
                          className={`${co.field} `}
                        />
                        {errors.endTime && touched.endTime ? (
                          <div className={co.err}>{errors.endTime}</div>
                        ) : null}
                      </label>
                    </div>
                  </div>
                  <label className={`col-12 ${co.label} ${co.labelleft}`}>
                    Description
                    <Field
                      name="description"
                      placeholder="description"
                      as="textarea"
                      className={`col-12 mx-auto ${co.field}`}
                    />
                    {errors.description && touched.description ? (
                      <div className={co.err}>{errors.description}</div>
                    ) : null}
                  </label>

                  <div className={co.divider} />
                  <h6 className={`${co.notify}`}>Notification Setting</h6>
                  <label>
                    <Field
                      type="checkbox"
                      className={`${co.chek}`}
                      name="isSms"
                      value={values.checked ? "true" : "true"}
                    />
                    Send SMS
                  </label>
                  <br />
                  <label>
                    <Field
                      type="checkbox"
                      name="isEmail"
                      value={values.checked ? "true" : "true"}
                      className={`${co.chek}`}
                    />
                    Send Email
                  </label>
                  <Button
                    variant="warning mt-4 mb-3"
                    className={`${co.frmBTN}`}
                    type="submit"
                  >
                    Create
                  </Button>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      </div>
    </SSRProvider>
  );
};
export default Trend;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/Courses.module.css";
import men from "../../../styles/panel/Menu.module.css";
import about from "../../../styles/About.module.css";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import { Button, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getItem } from "../../../src/core/services/storage/storage.js";
import Loader from "../../../src/components/Loader/Loader.jsx";
import { addTask } from "../../api/add-task.js";
import Select from "react-select";
import UploadBox from "../../../src/components/panel/UploadBox/UploadBox"
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

const Courses = (props) => {
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
  const [cid, setCid] = useState()

  const fetchStu = async (p) => {
    const token = getItem("token");
    try {
      const result = await fetch(`${process.env.webURL}/Course/GetStudentOfCourseByCourseId?id=${cid}`, {
        headers: { Authorization: "Bearer " + token },
      });
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
  // console.log(cid)
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

  // console.log(props.data);
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

  const funcHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };

  const [stulist, setStu] = useState([]);
  const handleStList = (e) => {
    setStu(e);
  };
  const [slist, setSlist] = useState();
  const handleSList = (e) => {
    setSlist(e.target.value);
  };
  const [upoaldboxdt, setUpoaldboxdt] = useState()
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
            <div className={`col-12 ${co.coursetitle}`}>
              <span className={``}>Task</span>
              <div className={``}>
                <button
                  type="button"
                  className={`${co.coursebtn}`}
                  onClick={handleShow}
                >
                  Create New
                </button>
              </div>
            </div>

            <div className={`row mt-5`}>
              {taskDt !== undefined ? (
                taskDt.map((i, index) => {
                  return (
                    <div
                      className={`col-xl-4 ${co.taskitemholder}`}
                      key={index}
                    >
                      <Link href={`/panel/task/${i.id}`}>
                        <div className={`col-11`}>
                          <div className={`col-12`}>
                            <h5 className={`${co.tname}`}>{i.taskName}</h5>
                            <h6 className={`${co.tdes}`}>{i.description}</h6>
                            <div className={`${co.cname}`}>{i.courseName}</div>
                            <div className={`${co.cdate}`}>{i.startDate}</div>
                            <div className={`${co.conholder}`}>
                              {i.studentPics.map((j, index) => {
                                return (
                                  <div className={`${co.conpicholder}`} key={index}>
                                    <Image
                                      src={j.picName}
                                      alt="1"
                                      height="100"
                                      width="100"
                                      key={index}
                                    />
                                  </div>
                                );
                              })}
                              <div className={`${co.conpicholdernum}`}>
                                <Image
                                  src={require(`../../../src/assets/student/6.png`)}
                                  alt="1"
                                  height=""
                                  width=""
                                />
                                <span className={`${co.connum}`}>
                                  {i.studentCount}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <Loader />
              )}
            </div>
            <div className={co.seeMore}>
              <Link href={`/panel/tasklist`}>See All</Link>
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
              users: [],
              startDate: "",
              endDate: "",
              startTime: "",
              endTime: "",
              description: "",
            }}
            // validationSchema={ContactSchema}
            onSubmit={async (values) => {

              const userObj = {
                title: values.title,
                users: stulist.map((i) => { return i.value }),
                courseId: values.courseList,
                startDate: value1,
                endDate: value2,
                startTime: values.startTime,
                endTime: values.endTime,
                description: values.description,
                atachFileName: upoaldboxdt,
                isSms: values.isSms,
                isEmail: values.isEmail,
                subTitle: values.subTitle
              };
              console.log(userObj);

              const user = await addTask(userObj).then((r) => {
                 console.log(r)
              });
                console.log(user)
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
                <label className={`${co.label}`}>
                  Breif
                  <Field
                    name="subTitle"
                    id="subTitle"
                    type="text"
                    placeholder="Breif"
                    className={`col-12 mx-auto ${co.field}`}
                  />
                  {errors.subTitle && touched.subTitle ? (
                    <div className={co.err}>{errors.subTitle}</div>
                  ) : null}
                </label>
                <label htmlFor="courseList" className={`${co.label}`}>Course List</label>
                <Field
                  as="select"
                  name="courseList"
                  placeholder="Select category"
                  onKeyUp={handleSList}
                  className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`} defaultValue={'DEFAULT'}
                >
                  <option hidden value="DEFAULT" >Select Category</option>
                  {courseDt.map((i) => {
                    return <option value={i.id} key={i.id} onClick={() => { setCid(i.id) }}>{i.courseName}</option>
                  })}
                </Field>
                {errors.courseList && touched.courseList ? (
                  <div className={co.err}>{errors.courseList}</div>
                ) : null}
                <label htmlFor="courseList" className={`${co.label} mt-3`}>Student List</label>
                {stDt !== undefined ? <Select
                  value={stulist}
                  onChange={handleStList}
                  isMulti
                  name="users"
                  className="basic-multi-select"
                  classNamePrefix="select"
                  options={stDt.map((i) => ({
                    label: i.studentMame,
                    value: i.id,
                  }))}
                /> : null}
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
                  <label className={`col-lg-6 ${co.label}`}>
                    End Date
                    <br />
                    <DatePicker
                      className={`col-12 ${co.datepick}`}
                      onChange={onChange2}
                      value={value2}
                    />
                  </label>
                </div>
                <div className={`row d-flex justify-content-between`}>
                  <div className={`col-lg-6 ${co.timefield}`}>
                    <label className={`col-12 ${co.label} ${co.labelleft}`}>
                      Start Time
                      <Field
                        name="startTime"
                        placeholder="10:00:00"
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
                        placeholder="10:00:00"
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
                <label htmlFor="upload-photo" className={`my-2 fw-bold`}>
                  Attach File
                </label>
                <UploadBox handleRandom={(x) => setUpoaldboxdt(x)} />
                <div className={co.divider} />
                <h6 className={`${co.notify}`}>Notification Setting</h6>
                <label>
                  <Field type="checkbox" className={`${co.chek}`} name="isSms"
                  />
                  Send SMS
                </label>
                <br />
                <label>
                  <Field
                    type="checkbox"
                    name="isEmail"
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
    </SSRProvider>
  );
};
export default Courses;

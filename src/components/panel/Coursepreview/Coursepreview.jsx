import Image from "next/image";
import Link from "next/link";
import { useState, createRef } from "react";
import { SSRProvider, Modal, Button } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import UploadBox from "../UploadBox/UploadBox";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import React from "react";
import Moment from "react-moment";
import { addCourse } from "../../../../pages/api/course/new-course";

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
  categoryId: Yup.string().min(2, "Too Short!").required("Required"),
  level: Yup.string().min(4, "Too Short!").required("Required"),
});

const Courses = ({ prev, data }) => {
  const [whatYouLearn, setWhatYouLearn] = useState("");
  const [courseConsist, setCourseConsist] = useState([{}, {}]);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const now = new Date();

  const handleNameChangetitle = (event) => {
    setTitle(event.target.value);
  };
  const handleNameChangeCat = (event) => {
    setCategoryId(event.target.value);
  };
  const handleNameChangeprice = (event) => {
    setPrice(event.target.value);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = (index) => {
    setShow4(true);
    setModalObjNum(index);
  };
  console.log(courseConsist.length, "cl");
  const [upoaldboxdt, setUpoaldboxdt] = useState();
  const [upoaldimg, setUpoaldimg] = useState();
  const [upoaldintro, setUpoaldintro] = useState();

  const tik = (
    <svg
      id="Group_20738"
      data-name="Group 20738"
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
    >
      <rect
        id="Rectangle_6118"
        data-name="Rectangle 6118"
        width="54"
        height="54"
        transform="translate(0 0)"
        fill="#3a8944"
        opacity="0"
      />
      <path
        id="Path_51926"
        data-name="Path 51926"
        d="M28.917,16.835,20.176,25.6l-3.362-3.362a2.037,2.037,0,1,0-2.873,2.873l4.788,4.809a2.041,2.041,0,0,0,2.873,0L31.79,19.728a2.038,2.038,0,0,0,.011-2.882l-.011-.011A2.037,2.037,0,0,0,28.917,16.835ZM23.375,3A20.375,20.375,0,1,0,43.75,23.375,20.374,20.374,0,0,0,23.375,3Zm0,36.675a16.3,16.3,0,1,1,16.3-16.3A16.3,16.3,0,0,1,23.375,39.675Z"
        transform="translate(3.792 3.792)"
        fill="#3a8944"
      />
    </svg>
  );
  const delet = (
    <svg
      id="Component_28_1"
      data-name="Component 28 – 1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Rectangle_6197"
        data-name="Rectangle 6197"
        width="24"
        height="24"
        fill="red"
        opacity="0"
      />
      <path
        id="Path_82778"
        data-name="Path 82778"
        d="M19.2,6.6H15.6V5.7A2.7,2.7,0,0,0,12.9,3H11.1A2.7,2.7,0,0,0,8.4,5.7v.9H4.8a.9.9,0,1,0,0,1.8h.9v9.9A2.7,2.7,0,0,0,8.4,21h7.2a2.7,2.7,0,0,0,2.7-2.7V8.4h.9a.9.9,0,0,0,0-1.8Zm-9-.9a.9.9,0,0,1,.9-.9h1.8a.9.9,0,0,1,.9.9v.9H10.2Zm6.3,12.6a.9.9,0,0,1-.9.9H8.4a.9.9,0,0,1-.9-.9V8.4h9Z"
        fill="#7a7d7c"
      />
    </svg>
  );
  const edit = (
    <svg
      id="Component_29_43"
      data-name="Component 29 – 43"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={co.editsvg}
    >
      <rect
        id="Rectangle_6196"
        data-name="Rectangle 6196"
        width="24"
        height="24"
        fill="#7a7d7c"
        opacity="0"
      />
      <path
        id="Path_82777"
        data-name="Path 82777"
        d="M20.092,12a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V5.706a.9.9,0,0,1,.9-.9h5.4a.9.9,0,0,0,0-1.8H5.7A2.7,2.7,0,0,0,3,5.706V18.3A2.7,2.7,0,0,0,5.7,21H18.294a2.7,2.7,0,0,0,2.7-2.7V12.9A.9.9,0,0,0,20.092,12ZM6.6,12.686V16.5a.9.9,0,0,0,.9.9h3.814a.892.892,0,0,0,.638-.261L18.177,10.9h0l2.554-2.5a.9.9,0,0,0,0-1.272l0-.005L16.917,3.269a.9.9,0,0,0-1.272-.005l-.005.005L13.1,5.814h0L6.862,12.048A.892.892,0,0,0,6.6,12.686Zm9.678-7.51,2.545,2.545L17.547,9,15,6.453ZM8.4,13.055l5.333-5.334,2.546,2.546L10.945,15.6H8.4Z"
        fill="#7a7d7c"
      />
    </svg>
  );
  const notice = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="41"
      viewBox="0 0 41 41"
    >
      <g
        id="Group_21226"
        data-name="Group 21226"
        transform="translate(0.5 0.5)"
      >
        <rect
          id="Rectangle_6293"
          data-name="Rectangle 6293"
          width="40"
          height="40"
          stroke="#1d7dd8"
          strokeWidth="1"
          opacity="0"
        />
        <path
          id="Path_83053"
          data-name="Path 83053"
          d="M18.125,3A15.125,15.125,0,1,0,33.25,18.125,15.124,15.124,0,0,0,18.125,3Zm0,27.225a12.1,12.1,0,1,1,12.1-12.1A12.1,12.1,0,0,1,18.125,30.225Zm0-12.856a1.513,1.513,0,0,0-1.512,1.512v4.538a1.512,1.512,0,1,0,3.025,0V18.881A1.513,1.513,0,0,0,18.125,17.369Zm0-6.05a1.891,1.891,0,1,0,1.891,1.891A1.891,1.891,0,0,0,18.125,11.319Z"
          transform="translate(1.875 1.875)"
          fill="#1d7dd8"
          stroke="#1d7dd8"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
  const del = (
    <svg
      id="Component_39_1"
      data-name="Component 39 – 1"
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="56"
      viewBox="0 0 47 56"
    >
      <rect
        id="Rectangle_6297"
        data-name="Rectangle 6297"
        width="47"
        height="56"
        rx="8"
        fill="#fafafa"
      />
      <rect
        id="Rectangle_6197"
        data-name="Rectangle 6197"
        width="28"
        height="28"
        transform="translate(10 14)"
        fill="#2d3ddf"
        opacity="0"
      />
      <path
        id="Path_82778"
        data-name="Path 82778"
        d="M22.978,7.4H18.489V6.3A3.334,3.334,0,0,0,15.122,3H12.878A3.334,3.334,0,0,0,9.511,6.3V7.4H5.022a1.1,1.1,0,1,0,0,2.2H6.144V21.7A3.334,3.334,0,0,0,9.511,25h8.978a3.334,3.334,0,0,0,3.367-3.3V9.6h1.122a1.1,1.1,0,1,0,0-2.2ZM11.756,6.3a1.111,1.111,0,0,1,1.122-1.1h2.244a1.111,1.111,0,0,1,1.122,1.1V7.4H11.756Zm7.856,15.4a1.111,1.111,0,0,1-1.122,1.1H9.511a1.111,1.111,0,0,1-1.122-1.1V9.6H19.611Z"
        transform="translate(10 14)"
        fill="#2d3ddf"
        opacity="0.45"
      />
    </svg>
  );
  const plus = (
    <svg
      id="Group_21233"
      data-name="Group 21233"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <rect
        id="Rectangle_6294"
        data-name="Rectangle 6294"
        width="28"
        height="28"
        fill="#7a7d7c"
        opacity="0"
      />
      <path
        id="Path_83054"
        data-name="Path 83054"
        d="M22.858,12.267H14.915V4.324a1.324,1.324,0,0,0-2.648,0v7.943H4.324a1.324,1.324,0,0,0,0,2.648h7.943v7.943a1.324,1.324,0,0,0,2.648,0V14.915h7.943a1.324,1.324,0,0,0,0-2.648Z"
        transform="translate(0.53 0.53)"
        fill="#7a7d7c"
      />
    </svg>
  );
  const [modalData, setModalData] = useState(null);
  const [modalData3, setModalData3] = useState(null);
  const [editor, setEditor] = useState("");
  const [formstep, setFormstep] = useState(0);
  const completeFormStep = () => {
    setFormstep((formstep) => formstep + 1);
  };
  const backFormStep = () => {
    setFormstep((formstep) => formstep - 1);
  };
  const [itemdt, setItemdt] = useState([]);
  const [item, setItem] = useState([]);

  const [modalObjNum, setModalObjNum] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [partId, setPartId] = useState();
  const itemdtHandler = (item) => {
    console.log(courseConsist, "courseConsist");
    console.log(isEdit, "isEdit");
    console.log(modalObjNum, "modalObjNum");
    console.log(partId, "partId");
    console.log(item, "item");

    if (courseConsist[modalObjNum].parts) {
    } else {
      courseConsist[modalObjNum].parts = [];
    }
    if (isEdit === true) {
      courseConsist[modalObjNum].parts[partId] = item;
    } else {
      courseConsist[modalObjNum].parts.push(item);
    }
    setCourseConsist(courseConsist);
    setIsEdit(false);
  };

  const handledel = () => {
    courseConsist[modalObjNum].parts = courseConsist[modalObjNum].parts.filter(
      (i, index) => index !== partId
    );
    setCourseConsist(courseConsist);
  };
  const handledelsection = () => {
    courseConsist = courseConsist.filter((i, index) => index !== modalObjNum);
    setCourseConsist(courseConsist);
  };
  // const handleedit = () => {
  //   console.log(courseConsist[modalObjNum].parts[partId]);
  // };

  return (
    <SSRProvider>
      <div className={`row ${co.preview}`}>
        <Formik
          enableReinitialize={true}
          initialValues={{
            whatYouLearn: [{}, {}],
            itemShow: [],
            courseConsist: courseConsist,
            requirement: [{}],
          }}
          // validationSchema={ContactSchema}
          onSubmit={async(values) => {
            console.log(values)
            setCourseConsist(values.courseConsist);
            const userObj = {
            //   values.title,
            //   values.categoryId,
            //   values.level,
            //   values.status,
            //   values.progress,
            //   values.whatYouLearn,
            //   (values.description = editor),
            //   (values.itemShow = item),
            //   (values.seasonNumber = courseConsist.length),
            //   values.price,
            //   (values.upldb = upoaldboxdt),
            //   (values.pictureName =
            //     upoaldimg === undefined ? values.radio : upoaldimg),
            //   (values.introductionVideoName = upoaldintro),
            //   (values.parts = []);
            // console.log(values, "val");

              
            courseConsist: courseConsist,
            title: values.title,
            categoryId: parseInt(values.categoryId),
            level: parseInt(values.level),
            whatYouLearn: values.whatYouLearn,
            // whatYouLearn: values.whatYouLearn.map((i)=> {return i.data}),
            duration:1,
            price:parseInt(values.price),
            status : parseInt(values.status),
            seasonNumber : courseConsist.length,
            progress : parseInt(values.progress),
            upldb : upoaldboxdt,
              description : editor,
              pictureName : upoaldimg,
              introductionVideoName : upoaldintro,
            }
            console.log(userObj, "userObj");
            console.log(courseConsist, "courseConsist");
            const user = await addCourse(userObj).then((r) => {
              console.log(r);
            });
            console.log(user,"user");
          }}
        >
          {({ errors, touched, values }) => (
            <Form className={co.form}>
              {/* form1 - coursePreview */}
              {/* form1 - coursePreview */}
              {/* form1 - coursePreview */}
              {/* form1 - coursePreview */}
              {/* form1 - coursePreview */}
              {/* form1 - coursePreview */}
              {/* form1 - coursePreview */}
              <div
                className={formstep === 0 ? `${co.active}` : `${co.noactive}`}
              >
                <h5 className={`${co.prevTitle}`}>Create new course</h5>

                <label htmlFor="title" className={`${co.label}`}>
                  How about a working title?
                </label>
                <Field
                  name="title"
                  type="text"
                  placeholder="e.g. Learn  ui/ux design"
                  className={`col-12 mx-auto ${co.txtfeild}`}
                  onKeyUp={handleNameChangetitle}
                  maxLength="160"
                />
                <span className={`${co.txtlength}`}>{160 - title.length}</span>
                {errors.title && touched.title ? (
                  <div className={co.err}>{errors.title}</div>
                ) : null}
                <label htmlFor="categoryId" className={`${co.label}`}>
                  What category best fits the knowledge you'll share?
                </label>
                <Field
                  as="select"
                  name="categoryId"
                  placeholder="Select category"
                  onKeyUp={handleNameChangeCat}
                  className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`}
                  defaultValue={"DEFAULT"}
                >
                  <option hidden value="DEFAULT">
                    Select Category
                  </option>
                  {data.map((i) => {
                    return (
                      <option value={i.id} key={i.id}>
                        {i.categoryName}
                      </option>
                    );
                  })}
                </Field>
                {errors.categoryId && touched.categoryId ? (
                  <div className={co.err}>{errors.categoryId}</div>
                ) : null}
                <label htmlFor="status" className={`${co.label}`}>
                  Status
                </label>
                <Field
                  as="select"
                  name="status"
                  placeholder="Status of your content"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`}
                  defaultValue={"DEFAULT"}
                >
                  <option hidden value="DEFAULT">
                    Status of your content
                  </option>
                  <option value="0">Awaiting</option>
                  <option value="1">Published</option>
                </Field>
                <label htmlFor="progress" className={`${co.label}`}>
                  Progress
                </label>
                <Field
                  as="select"
                  name="progress"
                  placeholder="Status of your content"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`}
                  defaultValue={"DEFAULT"}
                >
                  <option hidden value="DEFAULT">
                    Progress
                  </option>
                  <option value="0">InProgress</option>
                  <option value="1">Compelete</option>
                </Field>
                <label htmlFor="level" className={`${co.label}`}>
                  select level
                </label>
                <Field
                  as="select"
                  name="level"
                  placeholder="select level"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`}
                  defaultValue={"DEFAULT"}
                >
                  <option hidden value="DEFAULT">
                    Select Level
                  </option>
                  <option value="0">Beginer</option>
                  <option value="1">Intermediate</option>
                  <option value="2">Expert</option>
                </Field>
                {errors.level && touched.level ? (
                  <div className={co.err}>{errors.level}</div>
                ) : null}
                <div className={`col-12 d-flex justify-content-end mt-4`}>
                  {values.level === "" ||
                  values.categoryId === "" ||
                  values.title === "" ? (
                    <button disabled>Please Fill all Field To Continue</button>
                  ) : (
                    <button
                      type="submit"
                      onClick={completeFormStep}
                      className={`${co.conBTN} ${co.nxt}`}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>

              {/* form2 CourseIntended */}
              {/* form2 CourseIntended */}
              {/* form2 CourseIntended */}
              {/* form2 CourseIntended */}
              {/* form2 CourseIntended */}
              {/* form2 CourseIntended */}
              {/* form2 CourseIntended */}
              <div
                className={formstep === 1 ? `${co.active}` : `${co.noactive}`}
              >
                <div className={`row container mx-auto ${co.blueDes}`}>
                  <div className={`col-1`}>{notice}</div>
                  <div className={`col-11 ${co.noticedes}`}>
                    The following descriptions will have a direct impact on your
                    course performance. These descriptions will help learners
                    decide if your course is right for them
                  </div>
                </div>
                <div className={`row ${co.preview}`}>
                  <div className={`row mx-auto justify-content-center`}>
                    <div className={`col-2`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Intended learners
                      </div>
                    </div>
                    <div className={`col-2 ${co.disable}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Landing
                      </div>
                    </div>
                    <div className={`col-2 ${co.disable}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`col-12 ${co.navName}`}>
                        Price & discount
                      </div>
                    </div>
                  </div>

                  <h5 className={`fw-bold`}>
                    What will students learn in your course?
                  </h5>
                  <label
                    htmlFor="whatYouLearn"
                    className={`${co.label} ${co.lbl1}`}
                  >
                    You must enter at least 4 learning objectives or outcomes
                    that learners can expect to achieve after completing your
                    course
                  </label>
                  <div className="form-group">
                    <FieldArray
                      name="whatYouLearn"
                      render={(arrayHelper) => {
                        return (
                          <div>
                            {values.whatYouLearn.map((i, index) => {
                              return (
                                <React.Fragment>
                                  <div className="" key={index}>
                                    <div className="float-end">
                                      <button
                                        onClick={() => {
                                          arrayHelper.remove(index);
                                        }}
                                        className={co.newdelbtn}
                                      >
                                        {del}
                                      </button>
                                    </div>
                                    {
                                      <Field
                                        className="form-control"
                                        placeholder={`What You Learn ${
                                          index + 1
                                        }`}
                                        name={`whatYouLearn.${index}.data`}
                                      ></Field>
                                    }
                                  </div>
                                </React.Fragment>
                              );
                            })}
                            <button
                              className={`col-12 mx-auto text center ${co.addBtn}`}
                              onClick={() =>
                                arrayHelper.insert(
                                  values.whatYouLearn.length + 1,
                                  {}
                                )
                              }
                            >
                              {plus}Add more
                            </button>
                          </div>
                        );
                      }}
                    />
                  </div>

                  <h5 className={`fw-bold`}>
                    What are the requirements or prerequisites for taking your
                    course?
                  </h5>
                  <label className={`${co.label} ${co.lbl1}`}>
                    List the required skills, experience, tools or equipment
                    learners should have prior to taking your course.
                  </label>
                  <div className="form-group">
                    <FieldArray
                      name="requirement"
                      render={(arrayHelper) => {
                        return (
                          <div>
                            {values.requirement.map((i, index) => {
                              return (
                                <React.Fragment>
                                  <div className="" key={index}>
                                    <div className="float-end">
                                      <button
                                        onClick={() => {
                                          arrayHelper.remove(index);
                                        }}
                                        className={co.newdelbtn}
                                      >
                                        {del}
                                      </button>
                                    </div>
                                    {
                                      <Field
                                        className="form-control"
                                        placeholder={`requirement ${index + 1}`}
                                        name={`requirement.${index}.data`}
                                      ></Field>
                                    }
                                  </div>
                                </React.Fragment>
                              );
                            })}
                            <button
                              className={`col-12 mx-auto text center ${co.addBtn}`}
                              onClick={() =>
                                arrayHelper.insert(
                                  values.requirement.length + 1,
                                  {}
                                )
                              }
                            >
                              {plus}Add more
                            </button>
                          </div>
                        );
                      }}
                    />
                  </div>
                  <h5 className={`fw-bold mb-4`}>Description</h5>
                  <ReactQuill
                    theme="snow"
                    name="description"
                    value={editor}
                    onChange={(e) => setEditor(e)}
                  />
                  <div className="my-2" />
                  <div className={`col-12 d-flex justify-content-end mt-5`}>
                    <button
                      type="button"
                      onClick={backFormStep}
                      className={`${co.conBTN} ${co.nxt} mx-3`}
                    >
                      Previous
                    </button>
                    {values.whatYouLearn.length < 2 ? (
                      <button disabled>
                        Please Fill More Field To Continue
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={completeFormStep}
                        className={`${co.conBTN} ${co.nxt}`}
                      >
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* form3 CourseSection */}
              {/* form3 CourseSection */}
              {/* form3 CourseSection */}
              {/* form3 CourseSection */}
              {/* form3 CourseSection */}
              {/* form3 CourseSection */}
              {/* form3 CourseSection */}
              {/* form3 CourseSection */}
              {/* form3 CourseSection */}

              <div
                className={formstep === 2 ? `${co.active}` : `${co.noactive}`}
              >
                <div className={`row ${co.preview}`}>
                  <div className={`row mx-auto justify-content-center`}>
                    <div className={`col-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Intended learners
                      </div>
                    </div>
                    <div className={`col-2`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Section
                      </div>
                    </div>
                    <div className={`col-2 ${co.disable}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Content
                      </div>
                    </div>
                    <div className={`col-2 ${co.disable}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Landing
                      </div>
                    </div>
                    <div className={`col-2 ${co.disable}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`col-12 ${co.navName}`}>
                        Price & discount
                      </div>
                    </div>
                  </div>
                  <h5 className={`fw-bold`}>
                    How many section does your course consist of?
                  </h5>
                  <label className={`${co.label} ${co.lbl1}`}>
                    Here is where you add course content, like lectures, course
                    sections, file and ...
                  </label>
                  <div className="form-group">
                    {/* Add courseConsist */}
                    {/* Add courseConsist */}
                    {/* Add courseConsist */}

                    <FieldArray
                      name="courseConsist"
                      render={(arrayHelper) => {
                        return (
                          <div>
                            {courseConsist.map((i, index) => {
                              return (
                                // <div>kjhkh</div>
                                <React.Fragment>
                                  <div className="" key={index}>
                                    <div className="float-end">
                                      <button
                                        onClick={() => {
                                          arrayHelper.remove(index);
                                        }}
                                        className={co.newdelbtn}
                                      >
                                        {del}
                                      </button>
                                    </div>
                                    {
                                      <Field
                                        className="form-control"
                                        placeholder={`course Consist ${
                                          index + 1
                                        }`}
                                        // onBlur={(x) => {console.log(x);setCourseConsist(h=>[...h, x.target.value])}}
                                        name={`courseConsist.${index}.data`}
                                      ></Field>
                                    }
                                  </div>
                                </React.Fragment>
                              );
                            })}
                            <button
                              className={`col-12 mx-auto text center ${co.addBtn}`}
                              onClick={() => {
                                arrayHelper.insert(
                                  courseConsist.length + 1,
                                  {}
                                );
                              }}
                            >
                              {plus}Add more
                            </button>
                          </div>
                        );
                      }}
                    />
                  </div>
                  <div className={`col-12 d-flex justify-content-end mt-5`}>
                    <button
                      type="button"
                      onClick={backFormStep}
                      className={`${co.conBTN} ${co.nxt} mx-3`}
                    >
                      Previous
                    </button>
                    {courseConsist.length < 2 ? (
                      <button disabled>
                        Please Fill More Field To Continue
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={() => {
                          completeFormStep();
                          setCourseConsist(courseConsist);
                        }}
                        className={`${co.conBTN} ${co.nxt}`}
                      >
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* form4 CourseContent */}
              {/* form4 CourseContent */}
              {/* form4 CourseContent */}
              {/* form4 CourseContent */}
              {/* form4 CourseContent */}
              {/* form4 CourseContent */}

              <div
                className={formstep === 3 ? `${co.active}` : `${co.noactive}`}
              >
                <div className={`row ${co.preview}`}>
                  <div className={`row mx-auto justify-content-center`}>
                    <div className={`col col-xxl-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Intended learners
                      </div>
                    </div>
                    <div className={`col col-xxl-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Section
                      </div>
                    </div>
                    <div className={`col col-xxl-2`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Content
                      </div>
                    </div>
                    <div className={`col col-xxl-2 ${co.disable}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Landing
                      </div>
                    </div>
                    <div className={`col col-xxl-2 ${co.disable}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`col-12 ${co.navName}`}>
                        Price & discount
                      </div>
                    </div>
                  </div>
                </div>

                {/* Show courseConsist Section in page */}
                {/* Show courseConsist Section in page */}

                <div className={`row ${co.courseContent}`}>
                  {courseConsist.map((i, index) => {
                    return (
                      <div className={`col-12  mt-5`} key={index}>
                        <h6 className={`${co.navtitle}`}>{i.data}</h6>
                        <div className={` mb-4 ${co.icon}`}>
                          <div
                            onClick={() => {
                              handleShow4(index);
                            }}
                          >
                            {del}
                          </div>{" "}
                          <div className="" onClick={backFormStep}>
                            {edit}
                          </div>
                        </div>
                        <div className={`row ${co.contentcourse}`}>
                          <div
                            className={`col-3 d-flex justify-content-center mb-3 ${co.newItem}`}
                            onClick={() => {
                              handleShow2(index);
                              setModalObjNum(index);
                              setModalData(index);
                            }}
                          >
                            <div className={`d-flex align-self-center`}>
                              {plus} Add New Lecture
                            </div>
                          </div>

                          {/* courseConsist item per section */}
                          {/* courseConsist item per section */}

                          {i.parts
                            ? i.parts.map((z, zindex) => {
                                return (
                                  <React.Fragment>
                                    <div
                                      className={`col-3 mb-3 offset-1 d-flex justify-content-center ${co.newItem} ${co.oldItem}`}
                                    >
                                      <div className="row">
                                        <div
                                          className={`col-12 ${co.courseIMG}`}
                                        >
                                          <Image
                                            src={require(`../../../assets/panel/course/1p.png`)}
                                            alt="course pic"
                                          />
                                        </div>
                                        <div className={`col-12`}>
                                          <h6>{z.lecture}</h6>
                                          <Moment format="MM/DD/YYYY">
                                            {now}
                                          </Moment>
                                        </div>
                                        <div
                                          className={`col-12 d-flex justify-content-end ${co.icon}`}
                                        >
                                          <div
                                            onClick={() => {
                                              setModalObjNum(index);
                                              setPartId(zindex);
                                              handleShow3(zindex);
                                              setModalData3(zindex);
                                            }}
                                          >
                                            {del}
                                          </div>{" "}
                                          <div
                                            onClick={() => {
                                              setIsEdit(true);
                                              setModalObjNum(index);
                                              handleShow2(zindex);
                                              setPartId(zindex);
                                              setModalData3(zindex);
                                              handleedit(zindex);
                                            }}
                                          >
                                            {edit}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </React.Fragment>
                                );
                              })
                            : null}
                        </div>
                      </div>
                    );
                  })}
                  <div className={`d-flex justify-content-end ${co.corsebtn}`}>
                    <button
                      type="button"
                      onClick={backFormStep}
                      className={`${co.conBTN} ${co.nxt} mx-3`}
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      onClick={completeFormStep}
                      className={`${co.conBTN} ${co.nxt}`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body className={`${co.modalbody}`}>
                    {delet} <h5 className={``}>Delete course</h5>
                    <h6 className={``}>
                      Lorem ipsum, or lipsum as it is sometimes known
                    </h6>
                    <Button variant="outline-danger mt-3" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="danger mx-3 mt-3" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Body>
                </Modal>
                <Modal show={show3} onHide={handleClose3}>
                  <Modal.Body className={`${co.modalbody}`}>
                    {delet} <h5 className={``}>Delete course</h5>
                    <h6 className={``}>Are you sure?</h6>
                    <Button
                      variant="outline-danger mt-3"
                      onClick={handleClose3}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="danger mx-3 mt-3"
                      onClick={() => {
                        handleClose3();
                        handledel();
                      }}
                    >
                      Delete
                    </Button>
                  </Modal.Body>
                </Modal>
                <Modal show={show4} onHide={handleClose4}>
                  <Modal.Body className={`${co.modalbody}`}>
                    {delet} <h5 className={``}>Delete course</h5>
                    <h6 className={``}>Are you sure?</h6>
                    <Button
                      variant="outline-danger mt-3"
                      onClick={handleClose4}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="danger mx-3 mt-3"
                      onClick={() => {
                        handleClose4();
                        handledelsection();
                      }}
                    >
                      Delete
                    </Button>
                  </Modal.Body>
                </Modal>
                {/* Modal Box */}
                {/* Modal Box */}
                {/* Modal Box */}

                {modalData !== null ? (
                  <Modal
                    show={show2}
                    onHide={() => {
                      handleClose2();
                      //setIsEdit(false);
                    }}
                    size="xl"
                  >
                    <Modal.Header closeButton className={co.modal}>
                      <div className={`row ${co.upholder}`}>
                        <h5 className={`col-12 ${co.uptitle}`}>
                          Create new course
                        </h5>
                        <h6 className={`col-12 ${co.upLblName}`}>
                          Lecture name
                        </h6>
                        <div className={`col-12`}>
                          <Formik
                            initialValues={{
                              lecture:
                                isEdit === false
                                  ? ""
                                  : courseConsist[modalObjNum].parts[partId]
                                      .lecture,
                              upldb:
                                isEdit === false
                                  ? ""
                                  : courseConsist[modalObjNum].parts[partId]
                                      .upldb,
                            }}
                            // validationSchema={ContactSchema}
                            onSubmit={(values) => {
                              (values.upldb = upoaldboxdt), console.log(values);
                              setItemdt(values);
                            }}
                          >
                            {({ errors, touched, values }) => (
                              <Form className={co.form}>
                                <Field
                                  name="lecture"
                                  type="text"
                                  placeholder="Enter a title"
                                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                                />
                                {errors.lecture && touched.lecture ? (
                                  <div className={co.err}>{errors.lecture}</div>
                                ) : null}
                                <h6 className={`${co.upLblName}`}>
                                  Select content type:
                                </h6>
                                <div className={`${co.uploadbox}`}>
                                  <UploadBox
                                    handleRandom={(x) => setUpoaldboxdt(x)}
                                  />
                                </div>
                                {isEdit === true && (
                                  <div className="my-5">
                                    File:{" "}
                                    {
                                      courseConsist[modalObjNum].parts[partId]
                                        .upldb
                                    }
                                  </div>
                                )}
                                <div
                                  className={`d-flex justify-content-end ${co.corsebtn}`}
                                >
                                  <button
                                    type="submit"
                                    onClick={() => {
                                      handleClose2();
                                      itemdtHandler(values);
                                    }}
                                    className={`mt-4 ${co.conBTN} ${co.nxt}`}
                                  >
                                    Continue
                                  </button>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </Modal.Header>
                  </Modal>
                ) : null}
              </div>

              {/* form5 CourseLanding */}
              {/* form5 CourseLanding */}
              {/* form5 CourseLanding */}
              {/* form5 CourseLanding */}
              {/* form5 CourseLanding */}
              {/* form5 CourseLanding */}

              <div
                className={formstep === 4 ? `${co.active}` : `${co.noactive}`}
              >
                <div className={`row container mx-auto ${co.redDes}`}>
                  <div className={`col-1`}>{notice}</div>
                  <div className={`col-11 ${co.noticedes}`}>
                    <span>
                      The following descriptions will have a direct impact on
                      your course performance. These descriptions will help
                      learners decide if your course is right for them
                    </span>
                    <Link href="#">Update your profile</Link>
                  </div>
                </div>
                <div className={`row ${co.preview} ${co.courseLanding}`}>
                  <div className={`row mx-auto justify-content-center`}>
                    <div className={`col col-xxl-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Intended learners
                      </div>
                    </div>
                    <div className={`col-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Section
                      </div>
                    </div>
                    <div className={`col col-xxl-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Content
                      </div>
                    </div>
                    <div className={`col col-xxl-2`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Landing
                      </div>
                    </div>
                    <div className={`col col-xxl-2 ${co.disable}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`col-12 ${co.navName}`}>
                        Price & discount
                      </div>
                    </div>
                  </div>
                  <div className={`row `}>
                    <h5 className={`${co.landingTitle}`}>
                      Course landing page
                    </h5>
                    <h6 className={`${co.landingCourseTitle}`}>Course image</h6>
                    <h6 className={`${co.landingDes}`}>
                      Upload your course image here. It must meet our course
                      image quality standards to be accepted.
                    </h6>

                    <h6 className={`${co.landingDes}`}>default cover</h6>
                    <div className={`row ${co.landingBg}`}>
                      <div className={`col-2`}>
                        <div className={`col-11`}>
                          <div className="form-check">
                            <Field
                              className={`form-check-input ${co.input}`}
                              type="radio"
                              name="radio"
                              value="1"
                              id="e1"
                            />
                            <label className="form-check-label" htmlFor="e1">
                              <figure className={`${co.catImg}`}>
                                <Image
                                  src={require(`../../../assets/panel/course/1p.png`)}
                                  alt="logo"
                                  width=""
                                  height=""
                                />
                              </figure>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className={`col-2`}>
                        <div className={`col-11`}>
                          <div className="form-check">
                            <Field
                              className={`form-check-input ${co.input}`}
                              type="radio"
                              name="radio"
                              value="2"
                              id="e2"
                            />
                            <label className="form-check-label" htmlFor="e2">
                              <figure className={`${co.catImg}`}>
                                <Image
                                  src={require(`../../../assets/panel/course/2p.png`)}
                                  alt="logo"
                                  width=""
                                  height=""
                                />
                              </figure>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className={`col-2`}>
                        <div className={`col-11`}>
                          <div className="form-check">
                            <Field
                              className={`form-check-input ${co.input}`}
                              type="radio"
                              name="radio"
                              value="3"
                              id="e3"
                            />
                            <label className="form-check-label" htmlFor="e3">
                              <figure className={`${co.catImg}`}>
                                <Image
                                  src={require(`../../../assets/panel/course/3p.png`)}
                                  alt="logo"
                                  width=""
                                  height=""
                                />
                              </figure>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className={`col-2`}>
                        <div className={`col-11`}>
                          <div className="form-check">
                            <Field
                              className={`form-check-input ${co.input}`}
                              type="radio"
                              name="radio"
                              value="4"
                              id="e4"
                            />
                            <label className="form-check-label" htmlFor="e4">
                              <figure className={`${co.catImg}`}>
                                <Image
                                  src={require(`../../../assets/panel/course/4p.png`)}
                                  alt="logo"
                                  width=""
                                  height=""
                                />
                              </figure>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className={`col-2`}>
                        <div className={`col-11`}>
                          <div className="form-check">
                            <Field
                              className={`form-check-input ${co.input}`}
                              type="radio"
                              name="radio"
                              value="5"
                              id="e5"
                            />
                            <label className="form-check-label" htmlFor="e5">
                              <figure className={`${co.catImg}`}>
                                <Image
                                  src={require(`../../../assets/panel/course/5p.png`)}
                                  alt="logo"
                                  width=""
                                  height=""
                                />
                              </figure>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className={`col-2`}>
                        <div className={`col-11`}>
                          <div className="form-check">
                            <Field
                              className={`form-check-input ${co.input}`}
                              type="radio"
                              name="radio"
                              value="6"
                              id="e6"
                            />
                            <label className="form-check-label" htmlFor="e6">
                              <figure className={`${co.catImg}`}>
                                <Image
                                  src={require(`../../../assets/panel/course/6p.png`)}
                                  alt="logo"
                                  width=""
                                  height=""
                                />
                              </figure>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className={`${co.landingDes}`}>or</h6>

                    <div className={co.modal}>
                      <div className={`row ${co.upholder}`}>
                        <div className={`${co.uploadbox}`}>
                          <UploadBox handleRandom={(x) => setUpoaldimg(x)} />
                        </div>
                        <h6 className={`fw-bold mt-5`}>Your Files</h6>
                        <h5 className={`${co.landingCourseTitle}`}>
                          Promotional video
                        </h5>
                        <h6 className={`mb-5 ${co.landingDes}`}>
                          Students who watch a well-made promo video are 5X more
                          likely to enroll in your course.{" "}
                          <Link href="#">Learn how to make yours awesome!</Link>
                        </h6>
                        <div className={`${co.uploadbox}`}>
                          <UploadBox handleRandom={(x) => setUpoaldintro(x)} />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`d-flex justify-content-end ${co.corsebtn}`}
                    >
                      <button
                        type="button"
                        onClick={backFormStep}
                        className={`${co.conBTN} ${co.nxt} mx-3`}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        className={`${co.conBTN} ${co.nxt}`}
                        onClick={completeFormStep}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* form6 CoursePrice */}
              {/* form6 CoursePrice */}
              {/* form6 CoursePrice */}
              {/* form6 CoursePrice */}
              {/* form6 CoursePrice */}
              {/* form6 CoursePrice */}
              <div
                className={formstep === 5 ? `${co.active}` : `${co.noactive}`}
              >
                <div className={`row ${co.preview}`}>
                  <div className={`row mx-auto justify-content-center`}>
                    <div className={`col col-xxl-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Intended learners
                      </div>
                    </div>
                    <div className={`col-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Section
                      </div>
                    </div>
                    <div className={`col col-xxl-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Content
                      </div>
                    </div>
                    <div className={`col col-xxl-2 ${co.passed}`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`${co.border}`} />
                      <div className={`col-12 ${co.navName}`}>
                        Course Landing
                      </div>
                    </div>
                    <div className={`col col-xxl-2`}>
                      <div className={`col-12`}>
                        <div className={`${co.firstDiv}`}>
                          <div className={`${co.secDiv}`} />
                        </div>
                      </div>
                      <div className={`col-12 ${co.navName}`}>
                        Price & discount
                      </div>
                    </div>
                  </div>
                  <div className={`row `}>
                    <h6 className={`${co.priceTitle}`}>Price</h6>

                    <div className={`col-md-6 position-relative`}>
                      <Field
                        name="price"
                        type="text"
                        placeholder="Insert Course price"
                        className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                        onKeyUp={handleNameChangeprice}
                      />
                      <span className={`${co.txtlength} ${co.txtlength2}`}>
                        $
                      </span>
                      {errors.price && touched.price ? (
                        <div className={co.err}>{errors.price}</div>
                      ) : null}
                    </div>
                    <div
                      className={`d-flex justify-content-end ${co.corsebtn}`}
                    >
                      <button
                        type="button"
                        onClick={backFormStep}
                        className={`${co.conBTN} ${co.nxt} mx-3`}
                      >
                        Previous
                      </button>
                      {values.price === "" ? (
                        <button disabled>
                          Please Fill all Field To Continue
                        </button>
                      ) : (
                        <button
                          type="submit"
                          onClick={handleShow}
                          className={`${co.conBTN} ${co.nxt}`}
                        >
                          Save
                        </button>
                      )}
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Body className={co.stepModal}>
                          <div>{tik}</div>
                          <h6>Your course successfully has been send</h6>
                          <h6>
                            The lesson will be published by the admin after
                            checking
                          </h6>
                          <Link href="/panel/courses">
                            <button
                              type="button"
                              className={`mt-3 mb-4 ${co.conBTN} ${co.nxt}`}
                            >
                              See Course
                            </button>
                          </Link>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </SSRProvider>
  );
};
export default Courses;

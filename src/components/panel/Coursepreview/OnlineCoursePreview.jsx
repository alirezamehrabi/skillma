import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SSRProvider, Modal } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import UploadBox from "../UploadBox/UploadBox";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import React from "react";
import { addOnlineCourse } from "../../../../pages/api/course/new-course";

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
  
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");

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
  const [editor, setEditor] = useState("");
  const err = () => {
    return toast.error("Please Upload File to Continue", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const [formstep, setFormstep] = useState(0);
  const completeFormStep = (value) => {
    setFormstep((formstep) => formstep + 1);

    console.log(formstep + "normal");
  };
  const backFormStep = () => {
    setFormstep((formstep) => formstep - 1);
    // console.log(formstep)
  };
  const [upoaldboxdt2, setUpoaldboxdt2] = useState();
  const [upoaldboxdt3, setUpoaldboxdt3] = useState();

  return (
    <SSRProvider>
      <div className={`row ${co.preview}`}>
        <Formik
          initialValues={{
            title: "",
            whatYouLearn: [{}, {}],
            requirement: [{}],
          }}
          // validationSchema={ContactSchema}
          onSubmit={async(values) => {
            const userObj = {



            courseConsist: values.courseConsist,
            title: values.title,
            categoryId: parseInt(values.categoryId),
            level: parseInt(values.level),
            whatYouLearn: values.whatYouLearn,
            meeting:parseInt(values.meeting),
            duration:parseInt(values.duration),
            price:parseInt(values.price),
            status : 1,
            progress : 1,
              description : editor,
              pictureName : upoaldboxdt2,
              introductionVideoName : upoaldboxdt3
            }
            console.log(userObj, "userObj");
            const user = await addOnlineCourse(userObj).then((r) => {
              console.log(r);
            });
            console.log(user,"user");
          }}
        >
          {({ errors, touched, values }) => (
            <Form className={co.form}>
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
                <label htmlFor="duration" className={`${co.label}`}>
                  Course Duration
                </label>
                <Field
                  name="duration"
                  type="text"
                  placeholder="course duration"
                  className={`col-12 mx-auto ${co.txtfeild}`}
                  maxLength="160"
                />
                <label htmlFor="meeting" className={`${co.label}`}>
                  Number of Meeting
                </label>
                <Field
                  name="meeting"
                  type="text"
                  placeholder="number of meeting"
                  className={`col-12 mx-auto ${co.txtfeild}`}
                  maxLength="160"
                />
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
                      type="button"
                      onClick={completeFormStep}
                      className={`${co.conBTN} ${co.nxt}`}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>

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
                        type="button"
                        onClick={completeFormStep}
                        className={`${co.conBTN} ${co.nxt}`}
                      >
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* form5 CourseLanding */}

              <div
                className={formstep === 2 ? `${co.active}` : `${co.noactive}`}
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
                    <div className={co.modal}>
                      <div className={`row ${co.upholder}`}>
                        <div className={`${co.uploadbox}`}>
                          <UploadBox handleRandom={(x) => setUpoaldboxdt2(x)} />
                          <Field
                            type="hidden"
                            name="pictureName"
                            value={upoaldboxdt2}
                          />
                        </div>
                        <h5 className={`${co.landingCourseTitle}`}>
                          Promotional video
                        </h5>
                        <h6 className={`mb-5 ${co.landingDes}`}>
                          Students who watch a well-made promo video are 5X more
                          likely to enroll in your course.{" "}
                          <Link href="#">Learn how to make yours awesome!</Link>
                        </h6>
                        <div className={`${co.uploadbox}`}>
                          <UploadBox handleRandom={(x) => setUpoaldboxdt3(x)} />
                          <Field
                            type="hidden"
                            name="introductionVideoName"
                            value={upoaldboxdt3}
                          />
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
                      {/* {
                      values.pictureName === undefined ||
                      values.introductionVideoName === undefined ? (
                        <>
                          <button
                            type="button"
                            className={`${co.conBTN} ${co.nxt}`}
                            onClick={err}
                          >
                            Upload Files To Continue
                          </button>
                          <ToastContainer />
                        </> 
                      ) : */}
                      
                        <button
                          type="button"
                          className={`${co.conBTN} ${co.nxt}`}
                          onClick={completeFormStep}
                        >
                          Continue
                        </button>
                      
                      {/* } */}
                    </div>
                  </div>
                </div>
              </div>

              {/* form6 CoursePrice */}
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
                    <h6 className={`${co.priceTitle}`}>Price <span> (if this course is free, set 0)</span></h6>

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

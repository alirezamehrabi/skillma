import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SSRProvider, Modal } from "react-bootstrap";
import co from "../../../styles/panel/course.module.css";
import dash from "../../../styles/panel/Dashboard.module.css";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import UploadBox from "../../../src/components/panel/UploadBox/UploadBox";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import React from "react";
import men from "../../../styles/panel/Menu.module.css";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import Header from "../../../src/components/panel/Header/Header.jsx";
import { addShort } from "../../api/course/new-course";
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
  categoryId: Yup.string().min(2, "Too Short!").required("Required"),
  level: Yup.string().min(4, "Too Short!").required("Required"),
});
export async function getStaticProps() {
  const res = await fetch(`${process.env.webURL}/Category/GetMainCategories`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
const Courses = (props) => {
  const data = props.posts.data;
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleNameChangetitle = (event) => {
    setTitle(event.target.value);
  };
  const handleNameChangeCat = (event) => {
    setCategoryId(event.target.value);
  };
  const [editor, setEditor] = useState("");

  const [formstep, setFormstep] = useState(0);
  const completeFormStep = () => {
    setFormstep((formstep) => formstep + 1);

    console.log(formstep + "normal");
  };
  const backFormStep = () => {
    setFormstep((formstep) => formstep - 1);
  };
  const [upoaldboxdt, setUpoaldboxdt] = useState();
  const [upoaldboxdt2, setUpoaldboxdt2] = useState();

  const txt = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
    >
      <g id="Group_21273" data-name="Group 21273" transform="translate(-0.317)">
        <rect
          id="Rectangle_3582"
          data-name="Rectangle 3582"
          width="44"
          height="44"
          transform="translate(0.317)"
          fill="#7a7d7c"
          opacity="0"
        />
        <path
          id="Path_9893"
          data-name="Path 9893"
          d="M30.4,14.12a1.985,1.985,0,0,0-.1-.433v-.144a1.678,1.678,0,0,0-.307-.449h0l-9.7-9.614h0a1.7,1.7,0,0,0-.453-.3h-.146L19.176,3h-9.8A4.83,4.83,0,0,0,4.525,7.807V30.238a4.83,4.83,0,0,0,4.851,4.807H25.547A4.83,4.83,0,0,0,30.4,30.238V14.12ZM20.7,8.464l4.188,4.15H20.7Zm6.468,21.775a1.61,1.61,0,0,1-1.617,1.6H9.376a1.61,1.61,0,0,1-1.617-1.6V7.807A1.61,1.61,0,0,1,9.376,6.2h8.086v8.011a1.61,1.61,0,0,0,1.617,1.6h8.086Z"
          transform="translate(3.912 2.976)"
          fill="#7a7d7c"
        />
      </g>
    </svg>
  );
  const vid = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
    >
      <g
        id="Group_21270"
        data-name="Group 21270"
        transform="translate(-0.174 0.109)"
      >
        <path
          id="Path_83059"
          data-name="Path 83059"
          d="M19,0A19,19,0,1,1,0,19,19,19,0,0,1,19,0Z"
          transform="translate(0.174 -0.109)"
          fill="#7a7d7c"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M7.512,6.834H0L4.325,0,8.649,6.834Z"
          transform="translate(23.234 14.161) rotate(90)"
          fill="#7a7d7c"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  );
  const snd = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
    >
      <g id="Group_20835" data-name="Group 20835" transform="translate(-0.334)">
        <rect
          id="Rectangle_3565"
          data-name="Rectangle 3565"
          width="44"
          height="44"
          transform="translate(0.334)"
          fill="#7a7d7c"
          opacity="0"
        />
        <path
          id="Path_9885"
          data-name="Path 9885"
          d="M17.436,23.97a5.993,5.993,0,0,0,5.992-5.992V8.992a5.992,5.992,0,0,0-11.983,0v8.986A5.993,5.993,0,0,0,17.436,23.97ZM14.441,8.992a2.995,2.995,0,1,1,5.99,0v8.986a2.995,2.995,0,0,1-5.99,0Zm14.976,8.986a1.5,1.5,0,0,0-2.995,0,8.986,8.986,0,0,1-17.973,0,1.5,1.5,0,0,0-2.995,0A11.981,11.981,0,0,0,15.939,29.855v3.1h-3a1.5,1.5,0,0,0,0,2.995H21.93a1.5,1.5,0,0,0,0-2.995h-3v-3.1A11.981,11.981,0,0,0,29.418,17.978Z"
          transform="translate(4.468 2.492)"
          fill="#7a7d7c"
        />
      </g>
    </svg>
  );

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
            <div className={`row ${co.preview}`}>
              <Formik
                initialValues={{}}
                // validationSchema={ContactSchema}
                onSubmit={async (values) => {
                  const userObj = {
                    title: values.title,
                    categoryId: values.categoryId,
                    description: editor,
                    type: parseInt(values.radio),
                    status: parseInt(values.status),
                    fileName: upoaldboxdt2,
                    pictureName: upoaldboxdt,
                    duration: "10",
                  };
                  console.log(userObj);

                  const user = await addShort(userObj).then((r) => {
                    console.log(r);
                  });
                  console.log(user);
                }}
              >
                {({ errors, touched, values }) => (
                  <Form className={co.form}>
                    {/* form1 - coursePreview */}
                    <div
                      className={
                        formstep === 0 ? `${co.active}` : `${co.noactive}`
                      }
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
                      <span className={`${co.txtlength}`}>
                        {160 - title.length}
                      </span>
                      {errors.title && touched.title ? (
                        <div className={co.err}>{errors.title}</div>
                      ) : null}
                      <label htmlFor="categoryId" className={`${co.label}`}>
                        What category best fits the knowledge you`&apos;`ll share?
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
                      <h5 className={`fw-bold mb-4`}>Description</h5>
                      <ReactQuill
                        theme="snow"
                        name="editor"
                        value={editor}
                        onChange={(e) => setEditor(e)}
                      />

                      <div className="row mt-5">
                        <div
                          className={`form-check col-4 p-4 ${co.radioHolder}`}
                        >
                          <div>
                            <Field
                              className={`form-check-input ${co.radio}`}
                              type="radio"
                              name="radio"
                              value="0"
                              id="e1"
                            />
                            <label className="form-check-label" htmlFor="e1">
                              {vid}
                              <span>Video</span>
                            </label>
                          </div>
                        </div>
                        <div
                          className={`form-check col-4 p-4 ${co.radioHolder}`}
                        >
                          <div>
                            <Field
                              className={`form-check-input ${co.radio}`}
                              type="radio"
                              name="radio"
                              value="1"
                              id="e2"
                            />
                            <label className="form-check-label" htmlFor="e2">
                              {txt}
                              <span>Text</span>
                            </label>
                          </div>
                        </div>
                        <div
                          className={`form-check col-4 p-4 ${co.radioHolder}`}
                        >
                          <div>
                            <Field
                              className={`form-check-input ${co.radio}`}
                              type="radio"
                              name="radio"
                              value="2"
                              id="e3"
                            />
                            <label className="form-check-label" htmlFor="e3">
                              {snd}
                              <span>Audio</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className={`col-12 d-flex justify-content-end mt-4`}>
                        {!values.title  ? (
                          <button disabled>
                            Please Fill all Field To Continue
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              completeFormStep();
                            }}
                            className={`${co.conBTN} ${co.nxt}`}
                          >
                            Continue
                          </button>
                        )}
                      </div>
                    </div>

                    {/* form2 CourseLanding */}

                    <div
                      className={
                        formstep === 1 ? `${co.active}` : `${co.noactive}`
                      }
                    >
                      <div className={`row ${co.preview} `}>
                        <div className={`row `}>
                          <h6 className={`${co.landingCourseTitle}`}>
                            course content
                          </h6>
                          <h6 className={`${co.landingDes}`}>
                            Here is where you add course topics
                          </h6>
                          <div className={co.modal}>
                            <div className={`row ${co.upholder}`}>
                              <div className={`${co.uploadbox}`}>
                                <UploadBox
                                  handleRandom={(x) => setUpoaldboxdt2(x)}
                                />
                                <Field
                                  type="hidden"
                                  name="fileName"
                                  value={upoaldboxdt2}
                                />
                              </div>
                            </div>
                            <h6 className={`${co.landingCourseTitle}`}>
                              Poster for your content
                            </h6>
                            <div className={`row ${co.upholder}`}>
                              <div className={`${co.uploadbox}`}>
                                <UploadBox
                                  handleRandom={(x) => setUpoaldboxdt(x)}
                                />
                                <Field
                                  type="hidden"
                                  name="pictureName"
                                  value={upoaldboxdt}
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
                            {upoaldboxdt !== undefined &&
                            upoaldboxdt2 !== undefined ? (
                              <button
                                type="submit"
                                className={`${co.conBTN} ${co.nxt}`}
                                //   onClick={completeFormStep}
                              >
                                Save
                              </button>
                            ) : (
                              <button
                                className={`${co.conBTN} ${co.nxt}`}
                                //   onClick={completeFormStep}
                              >
                                Please Upload File to Save
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Courses;

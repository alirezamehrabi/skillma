import Image from "next/image";
import Link from "next/link";
import { useState, createRef } from "react";
import { SSRProvider } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
  category: Yup.string().min(2, "Too Short!").required("Required"),
  level: Yup.string().min(4, "Too Short!").required("Required"),
});

const CourseIntended = ({completeFormStep}) => {
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [f6, setF6] = useState("");

  const handleNameChange = (event) => {
    setF1(event.target.value);
  };
  const handleNameChange2 = (event) => {
    setF2(event.target.value);
  };
  const handleNameChange3 = (event) => {
    setF3(event.target.value);
  };
  const handleNameChange4 = (event) => {
    setF4(event.target.value);
  };
  const handleNameChange5 = (event) => {
    setF5(event.target.value);
  };
  const handleNameChange6 = (event) => {
    setF6(event.target.value);
  };

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

  return (
    <SSRProvider>
      <div className={`row container mx-auto ${co.blueDes}`}>
        <div className={`col-1`}>{notice}</div>
        <div className={`col-11 ${co.noticedes}`}>
          The following descriptions will have a direct impact on your course
          performance. These descriptions will help learners decide if your
          course is right for them
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
            <div className={`col-12 ${co.navName}`}>Intended learners</div>
          </div>
          <div className={`col-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Section</div>
          </div>
          <div className={`col-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Content</div>
          </div>
          <div className={`col-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Landing</div>
          </div>
          <div className={`col-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`col-12 ${co.navName}`}>Price & discount</div>
          </div>
        </div>

        <Formik
          initialValues={{
            subject: "",

            email: "",

            message: "",
          }}
          validationSchema={ContactSchema}
          onSubmit={(values) => {
            // same shape as initial values

            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={co.form}>
              <h5 className={`fw-bold`}>
                What will students learn in your course?
              </h5>
              <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
                You must enter at least 4 learning objectives or outcomes that
                learners can expect to achieve after completing your course
              </label>
              <Field
                name="email"
                type="email"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f1}
                onChange={handleNameChange}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f1.length}
              </span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <Field
                name="email"
                type="email"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f2}
                onChange={handleNameChange2}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f2.length}
              </span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <Field
                name="email"
                type="email"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f3}
                onChange={handleNameChange3}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f3.length}
              </span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <Field
                name="email"
                type="email"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f4}
                onChange={handleNameChange4}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f4.length}
              </span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <Field
                name="email"
                type="email"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f5}
                onChange={handleNameChange5}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f5.length}
              </span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <div className={`${co.delBtn}`}>{del}</div>
              <div className={`col-12 mx-auto text center ${co.addBtn}`}>
                {plus}Add more
              </div>
              <h5 className={`fw-bold`}>
                What are the requirements or prerequisites for taking your
                course?
              </h5>
              <label className={`${co.label} ${co.lbl1}`}>
                List the required skills, experience, tools or equipment
                learners should have prior to taking your course.
              </label>
              <Field
                name="email"
                type="email"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f6}
                onChange={handleNameChange6}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f6.length}
              </span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <div className={`col-12 mx-auto text center ${co.addBtn}`}>
                {plus}Add more
              </div>
              <h5 className={`fw-bold`}>Description</h5>
              <div className={`${co.ckHolder}`}>Editor Holder</div>
              <div className={`col-12 d-flex justify-content-end mt-4`}>
                <button type="button" onClick={completeFormStep} className={`${co.conBTN} ${co.nxt}`}>
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </SSRProvider>
  );
};
export default CourseIntended;

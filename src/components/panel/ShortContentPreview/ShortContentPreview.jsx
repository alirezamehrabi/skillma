import Image from "next/image";
import Link from "next/link";
import { useState,createRef } from "react";
import { SSRProvider } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const ContactSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  level: Yup.string()
    .min(4, "Too Short!")
    .required("Required"),
});

const Courses = ({completeFormStep,back}) => {
  const [firstName, setFirstName] = useState('');

  const handleNameChange = event => {
    setFirstName(event.target.value);
  };
  const play = <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
  <g id="Group_21270" data-name="Group 21270" transform="translate(-0.174 0.109)">
    <path id="Path_83059" data-name="Path 83059" d="M19,0A19,19,0,1,1,0,19,19,19,0,0,1,19,0Z" transform="translate(0.174 -0.109)" fill="#7a7d7c"/>
    <path id="Path_5" data-name="Path 5" d="M7.512,6.834H0L4.325,0,8.649,6.834Z" transform="translate(23.234 14.161) rotate(90)" fill="#7a7d7c" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>
const text= <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
<g id="Group_21273" data-name="Group 21273" transform="translate(-0.317)">
  <rect id="Rectangle_3582" data-name="Rectangle 3582" width="44" height="44" transform="translate(0.317)" fill="#7a7d7c" opacity="0"/>
  <path id="Path_9893" data-name="Path 9893" d="M30.4,14.12a1.985,1.985,0,0,0-.1-.433v-.144a1.678,1.678,0,0,0-.307-.449h0l-9.7-9.614h0a1.7,1.7,0,0,0-.453-.3h-.146L19.176,3h-9.8A4.83,4.83,0,0,0,4.525,7.807V30.238a4.83,4.83,0,0,0,4.851,4.807H25.547A4.83,4.83,0,0,0,30.4,30.238V14.12ZM20.7,8.464l4.188,4.15H20.7Zm6.468,21.775a1.61,1.61,0,0,1-1.617,1.6H9.376a1.61,1.61,0,0,1-1.617-1.6V7.807A1.61,1.61,0,0,1,9.376,6.2h8.086v8.011a1.61,1.61,0,0,0,1.617,1.6h8.086Z" transform="translate(3.912 2.976)" fill="#7a7d7c"/>
</g>
</svg>
const audio = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
<g id="Group_20835" data-name="Group 20835" transform="translate(-0.334)">
  <rect id="Rectangle_3565" data-name="Rectangle 3565" width="44" height="44" transform="translate(0.334)" fill="#7a7d7c" opacity="0"/>
  <path id="Path_9885" data-name="Path 9885" d="M17.436,23.97a5.993,5.993,0,0,0,5.992-5.992V8.992a5.992,5.992,0,0,0-11.983,0v8.986A5.993,5.993,0,0,0,17.436,23.97ZM14.441,8.992a2.995,2.995,0,1,1,5.99,0v8.986a2.995,2.995,0,0,1-5.99,0Zm14.976,8.986a1.5,1.5,0,0,0-2.995,0,8.986,8.986,0,0,1-17.973,0,1.5,1.5,0,0,0-2.995,0A11.981,11.981,0,0,0,15.939,29.855v3.1h-3a1.5,1.5,0,0,0,0,2.995H21.93a1.5,1.5,0,0,0,0-2.995h-3v-3.1A11.981,11.981,0,0,0,29.418,17.978Z" transform="translate(4.468 2.492)" fill="#7a7d7c"/>
</g>
</svg>

  return (
    <SSRProvider>
      <div className={`row ${co.preview}`}>
        <h5 className={`${co.prevTitle}`}>Create new course</h5>
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
              <label htmlFor="email" className={`${co.label}`}>How about a working title?</label>
              <Field
                name="email"
                type="email"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild}`}
                value={firstName}
                onChange={handleNameChange}
                maxLength="160"
              />
              <span className={`${co.txtlength}`}>{160- firstName.length}</span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label htmlFor="subject" className={`${co.label}`}>What category best fits the knowledge you'll share?</label>
              <Field
                as="select"
                name="subject"
                placeholder="Select category"
                className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`}
              >
              <option value="" disabled defaultValue hidden>Select category</option>
              <option value="red">1</option>
              <option value="green">1</option>
              <option value="blue">1</option>
                </Field>
              {errors.subject && touched.subject ? (
                <div className={co.err}>{errors.subject}</div>
              ) : null}
              <label htmlFor="subject" className={`${co.label}`}>Description</label>
              <div className={`${co.ckHolder}`}>Editor Holder</div>
              <label htmlFor="subject" className={`${co.label}`}>Select content type:</label>
              <div className={`mx-auto justify-content-center ${co.shortTypeHolder}`}>
              <div className={`${co.shortType}`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input1}`}
                    type="radio"
                    value="first"
                    id="a1"
                    name="r"
                  />
                  <label className="form-check-label" htmlFor="a1">
                    <figure className={`${co.catImg}`}>
                      {play}
                      <h5 className={`${co.TypeName}`}>Video</h5>
                    </figure>
                  </label>
                </div>
              </div>
              <div className={`${co.shortType}`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input1}`}
                    type="radio"
                    value="sec"
                    id="a2"
                    name="r"
                  />
                  <label className="form-check-label" htmlFor="a2">
                    <figure className={`${co.catImg}`}>
                      {text}
                      <h5 className={`${co.TypeName}`}>Text</h5>
                    </figure>
                  </label>
                </div>
              </div>
              <div className={`${co.shortType}`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input1}`}
                    type="radio"
                    value="third"
                    id="a3"
                    name="r"
                  />
                  <label className="form-check-label" htmlFor="a3">
                    <figure className={`${co.catImg}`}>
                      {audio}
                      <h5 className={`${co.TypeName}`}>Audio</h5>
                    </figure>
                  </label>
                </div>
              </div>
              </div>
              <div className={`col-12 d-flex justify-content-end mt-4`}>
              <button onClick={completeFormStep} type="button" className={`${co.conBTN} ${co.nxt}`}>
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
export default Courses;

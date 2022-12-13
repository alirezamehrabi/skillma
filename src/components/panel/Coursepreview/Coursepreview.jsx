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

const Courses = () => {
  const [firstName, setFirstName] = useState('');

  const handleNameChange = event => {
    setFirstName(event.target.value);
    console.log(event.target.value.length)
  };
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
              <label htmlFor="subject" className={`${co.label}`}>select level</label>
              <Field
                as="select"
                name="message"
                placeholder="select level"
                className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`}
              >
              <option value="" disabled defaultValue hidden>select level</option>
              <option value="red">1</option>
              <option value="green">1</option>
              <option value="blue">1</option>
              </Field>
              {errors.message && touched.message ? (
                <div className={co.err}>{errors.message}</div>
              ) : null}
              <input type="checkbox" id="a" className={`${co.chkbox}`}/>
              <label htmlFor="a" className={`${co.label} ${co.chkboxlbl}`}>This Course is Free</label>
              <div className={`col-12 d-flex justify-content-end mt-4`}>
              <button type="button" className={`${co.conBTN} ${co.prev}`}>
              Previuse
              </button>
              <button type="button" className={`${co.conBTN} ${co.nxt}`}>
                Contiue
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

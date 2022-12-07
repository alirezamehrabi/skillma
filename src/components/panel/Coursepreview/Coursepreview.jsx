import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  return (
    <SSRProvider>
      <div className={`row ${co.preview}`}>
        <h5 className={`co.prevTitle`}>Create new course</h5>
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
              <Field
                name="email"
                type="email"
                placeholder="abcd@gmail.com"
                className={`col-12 mx-auto ${co.field}`}
              />

              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <Field
                name="subject"
                placeholder="Subject"
                className={`col-12 mx-auto ${co.field}`}
              />

              {errors.subject && touched.subject ? (
                <div className={co.err}>{errors.subject}</div>
              ) : null}

              <Field
                name="message"
                placeholder="message"
                as="textarea"
                className={`col-12 mx-auto ${co.field}`}
              />

              {errors.message && touched.message ? (
                <div className={co.err}>{errors.message}</div>
              ) : null}

              <button type="submit" className={co.conBTN}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </SSRProvider>
  );
};
export default Courses;

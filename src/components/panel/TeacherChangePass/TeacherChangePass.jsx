import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { SSRProvider, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import co from "../../../../styles/panel/course.module.css";


const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
  category: Yup.string().min(2, "Too Short!").required("Required"),
  level: Yup.string().min(4, "Too Short!").required("Required"),
});
const Changepass = ({ handleRandom }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <SSRProvider>
      <div className={`row p-3`}>
        <div className={``}>
          <Formik
            initialValues={{
            }}
            // validationSchema={ContactSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className={co.form}>
                <label htmlFor="currentpass" className={`${co.label} ${co.lbl1}`}>
                Current password
                </label>
                <Field
                  name="currentpass"
                  type="password"
                  placeholder="Enter your Current password"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.password && touched.password ? (
                  <div className={co.err}>{errors.password}</div>
                ) : null}
                <br/><br/><br/><br/><br/><br/>
                <label htmlFor="newpass" className={`${co.label} ${co.lbl1}`}>
                New password
                </label>
                <Field
                  name="newpass"
                  type="password"
                  placeholder="Enter your New password"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.newpass && touched.newpass ? (
                  <div className={co.err}>{errors.newpass}</div>
                ) : null}
                <label htmlFor="renewpass" className={`${co.label} ${co.lbl1}`}>
                Repeat New password
                </label>
                <Field
                  name="renewpass"
                  type="password"
                  placeholder="Enter your New password"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.renewpass && touched.renewpass ? (
                  <div className={co.err}>{errors.renewpass}</div>
                ) : null}
                <div className={`col-12 d-flex justify-content-end mt-4`}>
                  <button type="submit" className={`${co.conBTN} ${co.nxt}`}>
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Changepass;

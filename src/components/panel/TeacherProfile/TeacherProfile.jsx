import Image from "next/image";
import Link from "next/link";
import { useState,createRef } from "react";
import { SSRProvider,Button } from "react-bootstrap";
import st from "../../../../styles/panel/Teacher.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UploadBox from "../UploadBox/UploadBox"
import co from "../../../../styles/panel/course.module.css";

const ContactSchema = Yup.object().shape({
    title: Yup.string().min(2, "Too Short!").required("Required"),
    category: Yup.string().min(2, "Too Short!").required("Required"),
    level: Yup.string().min(4, "Too Short!").required("Required"),
  });

const StuProfile = () => {
    const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [f6, setF6] = useState("");
  const [f7, setF7] = useState("");
  const [f8, setF8] = useState("");

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
  const handleNameChange7 = (event) => {
    setF7(event.target.value);
  };
  const handleNameChange8 = (event) => {
    setF8(event.target.value);
  };

    return (
      <SSRProvider>
        
       <div className={`row ${st.container}`}>
        <div className={`col-12 ${st.pdetail}`}>
          <Image src={require(`../../../assets/panel/profile/avatar.png`)} alt=""/>
          <h5 className={``}>Name</h5>
          <h6 className={``}>Skill</h6>
          </div>
          <div className={``}>
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
              <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
              Name
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Name"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f1}
                onChange={handleNameChange}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
              Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="abcd@gmaill.com"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f2}
                onChange={handleNameChange2}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
              Password
              </label>
              <Field
                name="email"
                type={passwordShown ? "text" : "password"}
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f3}
                onChange={handleNameChange3}
              />
              <Button className={`${st.eye}`} onClick={togglePassword}><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg></Button>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
              Skill
              </label>
              <Field
                as="select"
                name="subject"
                placeholder="percent discount"
                className={`col-12 d-block mx-auto ${co.txtfeild} ${co.selectFeild}`}
              >
              <option value="" disabled defaultValue hidden>Select Type</option>
              <option value="red">10%</option>
              <option value="green">20%</option>
              <option value="blue">50%</option>
                </Field>
              <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
              bio
              </label>
              <Field
                placeholder="Description"
                as="textarea"
                type="email"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f5}
                onChange={handleNameChange5}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label className={`${co.label} ${co.lbl1}`}>
                Facebook
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Copy Link"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f6}
                onChange={handleNameChange6}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label className={`${co.label} ${co.lbl1}`}>
                Twitter
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Copy Link"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f7}
                onChange={handleNameChange7}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label className={`${co.label} ${co.lbl1}`}>
                Instagram
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Copy Link"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f8}
                onChange={handleNameChange8}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <div className={`col-12 d-flex justify-content-end mt-4`}>
                <button type="button" className={`${co.conBTN} ${co.nxt}`}>
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
  export default StuProfile;

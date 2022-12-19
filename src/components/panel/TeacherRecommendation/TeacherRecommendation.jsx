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
        
       <div className={`row container ${st.containerSuggest}`}>
        <h6 className={`fw-bold`}>Recommendation</h6>
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
              For how
              </label>
              <Field
                name="email"
                type="text"
                placeholder="Search connection"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f1}
                onChange={handleNameChange}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
              course
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Select course"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f2}
                onChange={handleNameChange2}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
              Message
              </label>
              <Field
                placeholder="Message"
                as="textarea"
                type="email"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f5}
                onChange={handleNameChange5}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              
              <div className={`col-12 d-flex justify-content-end mt-4`}>
                <button type="button" className={`${co.conBTN} ${co.nxt}`}>
                  Confirm
                </button>
              </div>
            </Form>
          )}
        </Formik>
          </div>
            <h6 className={`fw-bold mb-3 col-12`}>your Recommendation</h6><br/>
            <div className={`row`}>
            <div className={`col-lg-6`}>
            <div className={`col-sm-11`}>
          <div className={`my-4 row ${st.itholder}`}>
            <div className={`col-4 my-1 ${st.recImg}`}>
                <Image src={require(`../../../assets/panel/profile/1.png`)} alt=""/>
            </div>
            <div className={`col-8 ${st.recDetail}`}>
              <h6 className={`fw-bold`}>Dani Beaumont</h6>
              <h6 className={``}>Course: UI/UX desing</h6>
              <h6 className={``}>sep,20,2022</h6>
              <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print, graphic or web designs. 
              <Link href="#">See More</Link></h6>
            </div>
          </div>
          </div>
          </div>
          <div className={`col-lg-6`}>
            <div className={`col-sm-11`}>
          <div className={`my-4 row ${st.itholder}`}>
            <div className={`col-4 my-1 ${st.recImg}`}>
                <Image src={require(`../../../assets/panel/profile/2.png`)} alt=""/>
            </div>
            <div className={`col-8 ${st.recDetail}`}>
              <h6 className={`fw-bold`}>Dani Beaumont</h6>
              <h6 className={``}>Course: UI/UX desing</h6>
              <h6 className={``}>sep,20,2022</h6>
              <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print, graphic or web designs. 
              <Link href="#">See More</Link></h6>
            </div>
          </div>
          </div>
          </div>
          <div className={`col-lg-6`}>
            <div className={`col-sm-11`}>
          <div className={`my-4 row ${st.itholder}`}>
            <div className={`col-4 my-1 ${st.recImg}`}>
                <Image src={require(`../../../assets/panel/profile/1.png`)} alt=""/>
            </div>
            <div className={`col-8 ${st.recDetail}`}>
              <h6 className={`fw-bold`}>Dani Beaumont</h6>
              <h6 className={``}>Course: UI/UX desing</h6>
              <h6 className={``}>sep,20,2022</h6>
              <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print, graphic or web designs. 
              <Link href="#">See More</Link></h6>
            </div>
          </div>
          </div>
          </div>
          <div className={`col-lg-6`}>
            <div className={`col-sm-11`}>
          <div className={`my-4 row ${st.itholder}`}>
            <div className={`col-4 my-1 ${st.recImg}`}>
                <Image src={require(`../../../assets/panel/profile/2.png`)} alt=""/>
            </div>
            <div className={`col-8 ${st.recDetail}`}>
              <h6 className={`fw-bold`}>Dani Beaumont</h6>
              <h6 className={``}>Course: UI/UX desing</h6>
              <h6 className={``}>sep,20,2022</h6>
              <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print, graphic or web designs. 
              <Link href="#">See More</Link></h6>
            </div>
          </div>
          </div>
          </div>
       </div>
       </div>
      </SSRProvider>
    );
  };
  export default StuProfile;

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SSRProvider } from "react-bootstrap";
import st from "../../../../styles/panel/Teacher.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import co from "../../../../styles/panel/course.module.css";
import { getItem } from "../../../core/services/storage/storage";

const ContactSchema = Yup.object().shape({
    title: Yup.string().min(2, "Too Short!").required("Required"),
    category: Yup.string().min(2, "Too Short!").required("Required"),
    level: Yup.string().min(4, "Too Short!").required("Required"),
  });

const StuProfile = () => {

  
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f5, setF5] = useState("");

  const handleNameChange = (event) => {
    setF1(event.target.value);
  };
  const handleNameChange2 = (event) => {
    setF2(event.target.value);
  };
  const handleNameChange5 = (event) => {
    setF5(event.target.value);
  };
  const fetchcourse = async (p) => {
    const token = getItem("token");
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetTeacherCoursesName`,
        { headers: { Authorization: "Bearer " + token } }
      );
      const json = await result.json();
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcourse();
  }, []);
  const [cid, setCid] = useState()

  const fetchStu = async (p) => {
    const token = getItem("token");
    try {
      const result = await fetch(`${process.env.webURL}/Course/GetStudentOfCourseByCourseId?id=${cid}`, {
        headers: { Authorization: "Bearer " + token },
      });
      const json = await result.json();
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStu(cid);
  }, [cid]);
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
              For Who
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

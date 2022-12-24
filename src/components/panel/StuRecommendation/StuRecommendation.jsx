import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider, Button,Modal  } from "react-bootstrap";
import st from "../../../../styles/panel/Student.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import co from "../../../../styles/panel/course.module.css";

const ContactSchema = Yup.object().shape({
    email: Yup.string().min(2, "Too Short!").required("Required"),
  });

const StuRecommendation = () => {
    const [f1, setF1] = useState("");
  
    const handleNameChange = (event) => {
      setF1(event.target.value);
    };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <div className={`row`}>
        <div className={`col-12 text-center mx-auto ${st.recommend}`}>
            <h6 className={``}>Ask your former teachers to write their opinion and rating about you</h6>
            <div className={`col-12 text-center mx-auto`}>
                <button className={``} onClick={handleShow}>Ask Recommendation</button>
            </div>
      </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <h6 className={`fw-bold`}>Ask Recomention</h6>
            <Formik
            initialValues={{
              email: "",
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
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                  value={f1}
                  onChange={handleNameChange}
                />
                {errors.email && touched.email ? (
                  <div className={co.err}>{errors.email}</div>
                ) : null}
                <div className={`col-12 mx-auto text center ${co.addBtn}`}>
                {plus}Add more
              </div>
              <h6 className={`fw-bold`}>Request preview</h6>
              <h6 className={`${st.recDes}`}>Lorem ipsum, or lipsum as it is sometimes known, is text used in laying out print, graphic or web designs. passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Cicero's De Finibus Bonorum et Malorum for use in a specimen book. It usually begins with:</h6>
              <div className={`${st.recPer}`}>
                  <Image src={require(`../../../assets/panel/dash/per.png`)} alt=""/>
                  <h6 className={``}>Dani Beaumont</h6>
                </div>
                <div className={`col-12 d-flex justify-content-end mt-4`}>
                  <button type="button" className={`${co.conBTN} ${co.nxt}`}>
                  Send Request
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          
        </Modal.Body>
      </Modal>
    </SSRProvider>
  );
};
export default StuRecommendation;

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider, Button, Modal } from "react-bootstrap";
import st from "../../../../styles/panel/Student.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import co from "../../../../styles/panel/course.module.css";

const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
  category: Yup.string().min(2, "Too Short!").required("Required"),
  level: Yup.string().min(4, "Too Short!").required("Required"),
});

const StuRecommendation = () => {
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f5, setF5] = useState("");
  const handleNameChange = (event) => {
    setF1(event.target.value);
  };
  const handleNameChange2 = (event) => {
    setF2(event.target.value);
  };
  const handleNameChange3 = (event) => {
    setF3(event.target.value);
  };
  const handleNameChange5 = (event) => {
    setF5(event.target.value);
  };

  return (
    <SSRProvider>
      <div className={`row p-4`}>
        <div className={`col-12 mx-auto ${st.recommend}`}>
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
                  Category
                </label>
                <Field
                  as="select"
                  name="subject"
                  placeholder="percent discount"
                  className={`col-12 d-block mx-auto ${co.txtfeild} ${co.selectFeild}`}
                >
                  <option value="" disabled defaultValue hidden>
                    Select Category
                  </option>
                  <option value="red">test1</option>
                  <option value="green">test2</option>
                  <option value="blue">test3</option>
                </Field>
                <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
                  Sub category
                </label>
                <Field
                  as="select"
                  name="subject1"
                  placeholder="percent discount"
                  className={`col-12 d-block mx-auto ${co.txtfeild} ${co.selectFeild}`}
                >
                  <option value="" disabled defaultValue hidden>
                    Select Sub category
                  </option>
                  <option value="red">test1</option>
                  <option value="green">test2</option>
                  <option value="blue">test3</option>
                </Field>
                <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
                  Description
                </label>
                <Field
                  placeholder="Description"
                  as="textarea"
                  type="textarea"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                  value={f5}
                  onChange={handleNameChange5}
                />
                <div className={`col-12 d-flex justify-content-end mt-4`}>
                  <button type="button" className={`${co.conBTN} ${co.nxt}`}>
                    Send
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
export default StuRecommendation;

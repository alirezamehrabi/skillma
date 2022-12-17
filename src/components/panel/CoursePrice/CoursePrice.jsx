import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";;
import * as Yup from "yup";
import {Button,Modal,Table} from 'react-bootstrap';
import { Formik, Form, Field } from "formik";
import UploadBox from "../UploadBox/UploadBox"
import DatePicker from 'react-date-picker/dist/entry.nostyle';

const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required")
});

const CourseIntended = ({sec}) => {
  const [f1, setF1] = useState("");
  const handleNameChange = (event) => {
    setF1(event.target.value);
  };
  const [f2, setF2] = useState("");
  const handleNameChange2 = (event) => {
    setF2(event.target.value);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const tik = <svg id="Group_20738" data-name="Group 20738" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
  <rect id="Rectangle_6118" data-name="Rectangle 6118" width="54" height="54" transform="translate(0 0)" fill="#3a8944" opacity="0"/>
  <path id="Path_51926" data-name="Path 51926" d="M28.917,16.835,20.176,25.6l-3.362-3.362a2.037,2.037,0,1,0-2.873,2.873l4.788,4.809a2.041,2.041,0,0,0,2.873,0L31.79,19.728a2.038,2.038,0,0,0,.011-2.882l-.011-.011A2.037,2.037,0,0,0,28.917,16.835ZM23.375,3A20.375,20.375,0,1,0,43.75,23.375,20.374,20.374,0,0,0,23.375,3Zm0,36.675a16.3,16.3,0,1,1,16.3-16.3A16.3,16.3,0,0,1,23.375,39.675Z" transform="translate(3.792 3.792)" fill="#3a8944"/>
</svg>

  

  const ContactSchema = Yup.object().shape({
    title: Yup.string().min(2, "Too Short!").required("Required"),
    category: Yup.string().min(2, "Too Short!").required("Required"),
    level: Yup.string().min(4, "Too Short!").required("Required"),
  });
  return (
    <SSRProvider>
      <div className={`row ${co.preview}`}>
        <div className={`row mx-auto justify-content-center`}>
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Intended learners</div>
          </div>
          {sec === false ? null : <div className={`col-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Section</div>
          </div>}
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Content</div>
          </div>
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Landing</div>
          </div>
          <div className={`col col-xxl-2`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`col-12 ${co.navName}`}>Price & discount</div>
          </div>
        </div>
        <div className={`row `}>
        <h6 className={`${co.priceTitle}`}>Price</h6>
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
                <div className={`col-md-6 position-relative`}>
              <Field
                name="email"
                type="email"
                placeholder="Insert Course price"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f1}
                onChange={handleNameChange}
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                $
              </span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              </div>
              <input type="checkbox" id="a" className={`${co.chkbox}`}/>
              <label htmlFor="a" className={`${co.label} ${co.chkboxlbl}`}>This Course is Free</label>
              <div className={`row`}>
              <div className={`col-md-6 position-relative`}>
              <label htmlFor="subject" className={`col-12 ${co.label} d-block`}>Discount</label>

              <Field
                name="email"
                type="email"
                placeholder="discount code"
                className={`col-12 col-md-11 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                value={f2}
                onChange={handleNameChange2}
              />
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              </div>
              <div className={`col-md-6 position-relative`}>
              <label htmlFor="subject" className={`col-12 ${co.label} d-block`}>percent discount</label>
              <Field
                as="select"
                name="subject"
                placeholder="percent discount"
                className={`col-12 col-md-11 mx-auto ${co.txtfeild} ${co.selectFeild}`}
              >
              <option value="" disabled defaultValue hidden>percent discount</option>
              <option value="red">10%</option>
              <option value="green">20%</option>
              <option value="blue">50%</option>
                </Field>
                </div>
                <div className={`row`}>
              <div className={`col-md-6 position-relative`}>
              <label htmlFor="subject" className={`${co.label}`}>Active  time</label>
              <DatePicker onChange={onChange1} value={value1} className={`col-11 ${co.datepick}`} />
              </div>
              <div className={`col-md-6 position-relative mb-5`}>
              <label htmlFor="subject" className={`${co.label}`}>Expire time</label>
              <DatePicker className={`col-11 ${co.datepick}`} onChange={onChange2} value={value2} />
              </div>
              </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className={`d-flex justify-content-end ${co.corsebtn}`}>
        <button type="button" onClick={handleShow} className={`${co.conBTN} ${co.nxt}`}>
                Save
              </button>
              <Modal show={show} onHide={handleClose}>
        <Modal.Body className={co.stepModal}><div>{tik}</div>
        <h6>Your  course  successfully  has been send</h6>
        <h6>The lesson will be published by the admin after checking</h6>
<Link href="/panel/courses">
        <button type="button" className={`mt-3 mb-4 ${co.conBTN} ${co.nxt}`}>
                See Course
              </button>
              </Link>
        </Modal.Body>
      </Modal>
      </div>
      </div>
      </div>
      
    </SSRProvider>
  );
};
export default CourseIntended;

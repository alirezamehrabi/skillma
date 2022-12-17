import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";
import * as Yup from "yup";
import { Button, Modal, Table } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import UploadBox from "../UploadBox/UploadBox";
const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
});

const CourseContent = ({ completeFormStep, backFormStep }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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
  const delet = (
    <svg
      id="Component_28_1"
      data-name="Component 28 – 1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Rectangle_6197"
        data-name="Rectangle 6197"
        width="24"
        height="24"
        fill="red"
        opacity="0"
      />
      <path
        id="Path_82778"
        data-name="Path 82778"
        d="M19.2,6.6H15.6V5.7A2.7,2.7,0,0,0,12.9,3H11.1A2.7,2.7,0,0,0,8.4,5.7v.9H4.8a.9.9,0,1,0,0,1.8h.9v9.9A2.7,2.7,0,0,0,8.4,21h7.2a2.7,2.7,0,0,0,2.7-2.7V8.4h.9a.9.9,0,0,0,0-1.8Zm-9-.9a.9.9,0,0,1,.9-.9h1.8a.9.9,0,0,1,.9.9v.9H10.2Zm6.3,12.6a.9.9,0,0,1-.9.9H8.4a.9.9,0,0,1-.9-.9V8.4h9Z"
        fill="#7a7d7c"
      />
    </svg>
  );

  const del = (
    <svg
      id="Component_28_48"
      data-name="Component 28 – 48"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={co.delsvg}
    >
      <rect
        id="Rectangle_6197"
        data-name="Rectangle 6197"
        width="24"
        height="24"
        fill="#7a7d7c"
        opacity="0"
      />
      <path
        id="Path_82778"
        data-name="Path 82778"
        d="M19.2,6.6H15.6V5.7A2.7,2.7,0,0,0,12.9,3H11.1A2.7,2.7,0,0,0,8.4,5.7v.9H4.8a.9.9,0,1,0,0,1.8h.9v9.9A2.7,2.7,0,0,0,8.4,21h7.2a2.7,2.7,0,0,0,2.7-2.7V8.4h.9a.9.9,0,0,0,0-1.8Zm-9-.9a.9.9,0,0,1,.9-.9h1.8a.9.9,0,0,1,.9.9v.9H10.2Zm6.3,12.6a.9.9,0,0,1-.9.9H8.4a.9.9,0,0,1-.9-.9V8.4h9Z"
        fill="#7a7d7c"
      />
    </svg>
  );
  const edit = (
    <svg
      id="Component_29_43"
      data-name="Component 29 – 43"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={co.editsvg}
    >
      <rect
        id="Rectangle_6196"
        data-name="Rectangle 6196"
        width="24"
        height="24"
        fill="#7a7d7c"
        opacity="0"
      />
      <path
        id="Path_82777"
        data-name="Path 82777"
        d="M20.092,12a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V5.706a.9.9,0,0,1,.9-.9h5.4a.9.9,0,0,0,0-1.8H5.7A2.7,2.7,0,0,0,3,5.706V18.3A2.7,2.7,0,0,0,5.7,21H18.294a2.7,2.7,0,0,0,2.7-2.7V12.9A.9.9,0,0,0,20.092,12ZM6.6,12.686V16.5a.9.9,0,0,0,.9.9h3.814a.892.892,0,0,0,.638-.261L18.177,10.9h0l2.554-2.5a.9.9,0,0,0,0-1.272l0-.005L16.917,3.269a.9.9,0,0,0-1.272-.005l-.005.005L13.1,5.814h0L6.862,12.048A.892.892,0,0,0,6.6,12.686Zm9.678-7.51,2.545,2.545L17.547,9,15,6.453ZM8.4,13.055l5.333-5.334,2.546,2.546L10.945,15.6H8.4Z"
        fill="#7a7d7c"
      />
    </svg>
  );
  const file = (
    <svg
      id="Group_21369"
      data-name="Group 21369"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="30"
      viewBox="0 0 32 30"
    >
      <rect
        id="Rectangle_16896"
        data-name="Rectangle 16896"
        width="32"
        height="30"
        fill="#7a7d7c"
        opacity="0"
      />
      <path
        id="Path_83065"
        data-name="Path 83065"
        d="M24.339,6.562H16.288l-.411-1.181a3.842,3.842,0,0,0-3.64-2.365H6.389A3.706,3.706,0,0,0,2.543,6.562V21.93a3.706,3.706,0,0,0,3.846,3.546h17.95a3.706,3.706,0,0,0,3.846-3.546V10.109A3.706,3.706,0,0,0,24.339,6.562ZM25.62,21.93a1.234,1.234,0,0,1-1.281,1.181H6.389A1.234,1.234,0,0,1,5.108,21.93V6.562A1.234,1.234,0,0,1,6.389,5.381h5.847a1.277,1.277,0,0,1,1.217.8l.693,1.937a1.277,1.277,0,0,0,1.217.805h8.975a1.234,1.234,0,0,1,1.281,1.181Z"
        transform="translate(0.636 0.754)"
        fill="#7a7d7c"
      />
    </svg>
  );
  const see = (
    <svg
      id="Component_44_9"
      className={co.editsvg}
      data-name="Component 44 – 9"
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="22"
      viewBox="0 0 23 22"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_2658"
            data-name="Rectangle 2658"
            width="23"
            height="22"
            fill="#7a7d7c"
          />
        </clipPath>
      </defs>
      <g id="Group_18439" data-name="Group 18439" clipPath="url(#clip-path)">
        <g id="Group_18438" data-name="Group 18438">
          <g
            id="Group_18437"
            data-name="Group 18437"
            clipPath="url(#clip-path)"
          >
            <path
              id="Path_9429"
              data-name="Path 9429"
              d="M20.359,11.424C18.6,7.337,15.288,4.8,11.716,4.8S4.832,7.337,3.073,11.424a.873.873,0,0,0,0,.7c1.76,4.086,5.071,6.621,8.643,6.621s6.884-2.535,8.643-6.621a.873.873,0,0,0,0-.7M11.716,17c-2.762,0-5.376-2-6.884-5.228C6.34,8.54,8.954,6.545,11.716,6.545S17.092,8.54,18.6,11.773C17.092,15,14.478,17,11.716,17m0-8.713A3.485,3.485,0,1,0,15.2,11.773a3.485,3.485,0,0,0-3.485-3.485m0,5.228a1.743,1.743,0,1,1,1.742-1.742,1.742,1.742,0,0,1-1.742,1.742"
              transform="translate(-0.033 -0.925)"
              fill="#7a7d7c"
            />
          </g>
        </g>
      </g>
    </svg>
  );

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
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Section</div>
          </div>
          <div className={`col col-xxl-2`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Content</div>
          </div>
          <div className={`col col-xxl-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Landing</div>
          </div>
          <div className={`col col-xxl-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`col-12 ${co.navName}`}>Price & discount</div>
          </div>
        </div>
      </div>
      <div className={`row ${co.courseContent}`}>
        <div className={`col-12  mt-5`}>
          <h6 className={`${co.navtitle}`}>Introduction</h6>
          <div className={` mb-4 ${co.icon}`}>
            <div onClick={handleShow}>{del}</div>{" "}
            <div className="" onClick={backFormStep}>
              {edit}
            </div>
          </div>
          <div className={`row ${co.contentcourse}`}>
            <div
              className={`col-3 d-flex justify-content-center ${co.newItem}`}
            >
              <div className={`d-flex align-self-center`}>
                {plus} Add New Lecture
              </div>
            </div>
            <div
              className={`col-3 offset-1 d-flex justify-content-center ${co.newItem} ${co.oldItem}`}
            >
              <div className="row">
                <div className={`col-12 ${co.courseIMG}`}>
                  <Image
                    src={require(`../../../assets/panel/course/1.png`)}
                    alt="course pic"
                  />
                </div>
                <div className={`col-12`}>
                  <h6>create wireframe</h6>
                  <h6>sep 13 , 2022</h6>
                  <h6>24:00</h6>
                </div>
                <div className={`col-12 d-flex justify-content-end ${co.icon}`}>
                  <div>{del}</div> <div onClick={handleShow2}>{edit}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-12 mt-5`}>
          <h6 className={`${co.navtitle}`}>season 1</h6>
          <div className={` mb-4 ${co.icon}`}>
            {del} {edit}
          </div>
          <div className={`row ${co.contentcourse}`}>
            <div
              className={`col-3 d-flex justify-content-center ${co.newItem}`}
            >
              <div className={`d-flex align-self-center`}>
                {plus} Add New Lecture
              </div>
            </div>
          </div>
        </div>
        <div className={`d-flex justify-content-end ${co.corsebtn}`}>
          <button type="button" className={`${co.conBTN} ${co.nxt}`} onClick={completeFormStep}>
            Continue
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className={`${co.modalbody}`}>
          {delet} <h5 className={``}>Delete course</h5>
          <h6 className={``}>
            Lorem ipsum, or lipsum as it is sometimes known
          </h6>
          <Button variant="outline-danger mt-3" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger mx-3 mt-3" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2} size="xl">
        <Modal.Header closeButton className={co.modal}>
          <div className={`row ${co.upholder}`}>
            <h5 className={`col-12 ${co.uptitle}`}>Create new course</h5>
            <h6 className={`col-12 ${co.upLblName}`}>Lecture name</h6>
            <div className={`col-12`}>
              <Formik
                initialValues={{
                  title: "",
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
                      name="title"
                      type="title"
                      placeholder="Enter a title"
                      className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                    />
                    {errors.title && touched.title ? (
                      <div className={co.err}>{errors.title}</div>
                    ) : null}
                  </Form>
                )}
              </Formik>
            </div>
            <h6 className={`${co.upLblName}`}>Select content type:</h6>
            <div className={`${co.uploadbox}`}>
              <UploadBox />
            </div>
            <h6 className={`fw-bold mt-5`}>Your Files</h6>
            <Table bordered hover responsive size="xl" className={`my-5`}>
              <thead>
                <tr className={co.tablehead}>
                  <th>File Name</th>
                  <th>Data</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className={co.tablebody}>
                  <td>{file} production ID_4884238.Pdf</td>
                  <td>sep 13 , 2022</td>
                  <td>
                    {del} {see}
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className={`d-flex justify-content-end ${co.corsebtn}`}>
              <button
                type="button"
                className={`${co.conBTN} ${co.nxt}`}
              >
                Continue
              </button>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </SSRProvider>
  );
};
export default CourseContent;
